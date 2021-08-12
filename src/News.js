import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Adspot from "./Adspot.js";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

function News() {
  const [list, setList] = useState([]);
  const [amount, setAmount] = useState(20);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async (a) => {
    try {
      const { data: posts } = await axios.get(
        "/posts?per_page=" + (a == null ? "10" : `${a}`)
      );
      const media = [];

      const promises = posts.map((post) => {
        media.push({
          id: post.id,
          title: post.title.rendered,
          description: post.excerpt.rendered,
        });

        return axios.get(`media/${post.featured_media}`);
      });

      Promise.all(promises)
        .then((values) => {
          values.forEach((featuredMedia, i) => {
            media[i] = {
              ...media[i],
              image: featuredMedia.data.guid.rendered,
            };
          });
        })
        .finally(() => {
          console.log(media);
          setList(media);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const fetchData = async () => {
    const posts = await loadPosts(amount);
    setAmount(amount + 10);
  };

  return (
    <div width="50px">
      <h1 className="Title">Latest Stories</h1>

      {list.map((item, key) => {
        console.log(item);
        return (
          <div key={key} style={styles.article}>
            <img src={item.image} alt={"s"} width="150px" height="100px" />
            <div style={styles.textArea}>
              <Link
                to={`posts/${item.id}`}
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                <div
                  style={styles.title}
                  className="title"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                ></div>
              </Link>
              <div
                className="body"
                style={styles.textbox}
                dangerouslySetInnerHTML={{ __html: item.description }}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const styles = {
  textbox: {
    width: "20vw",
    height: "10vh",
    overflow: "hidden",
    fontSize: "10px",
    paddingLeft: "5px",
  },
  title: {
    fontSize: "11px",
    paddingLeft: "5px",
  },
  container: {
    overflow: "auto",
    height: "110vh",
    width: "35vw",
  },
  text: {
    fontWeight: "900",
    fontSize: "40px",
    fontStyle: "italic",
  },
  article: {
    display: "flex",
    flexDirection: "row",
  },
};
export default News;
