import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Adspot from "./Adspot.js";
import Loading from "./Loading.js";
import InfiniteScroll from "react-infinite-scroll-component";

function Section() {
  const { sectionName } = useParams();
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [amount, setAmount] = useState(10);

  useEffect(() => {
    loadPosts();
  }, [sectionName]);

  const loadPosts = async (a) => {
    try {
      let category;
      switch (sectionName) {
        case "sports":
          category = 1544;
          break;
        case "business":
          category = 91;
          break;
        case "regional":
          category = 103;
          break;
        case "politics":
          category = 102;
          break;
        case "local-news":
          category = 99;
          break;
      }
      const { data: posts } = await axios.get(
        `/posts?categories=${category}&per_page=` +(a == null ? "5" : `${a}`)
      );
      const media = [];

      const promises = posts.map((post) => {
        media.push({
          id: post.id,
          title: post.title.rendered,
          description: post.excerpt.rendered,
        });
        console.log(post.featured_media);
        return axios.get(`/media/${post.featured_media}`);
      });

      Promise.all(promises)
        .then((values) => {
          values.forEach((featuredMedia, i) => {
            media[i] = {
              ...media[i],
              image: featuredMedia.data.guid.rendered,
            };
          });
        }).catch((err) => {
          console.log(err);
        })
        .finally(() => {
          console.log(media);
          setList(media);
          setLoading(true);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const fetchData = async () => {
    const posts = await loadPosts(amount);
    setAmount(amount + 5);
  };

  return (
    <div className="HomePage">
      <h1 className="Title" style={styles.text}>
        {sectionName}
      </h1>
      
      <InfiniteScroll
        dataLength={list.length}
        next={fetchData}
        hasMore={true}
        loader={<Loading />}
        endMessage={<p>You've Seen it all</p>}
      >
        {loading ? (
          list.map((item, key) => {
            console.log(key)
            return (
              <div>
              <div key={key} style={styles.article}>
                <div>
                  <img
                    src={item.image}
                    alt={"s"}
                    width="450px"
                    height="300px"
                  />

                  <Link
                    to={`/posts/${item.id}`}
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontWeight: "bold",
                    }}
                  >
                    <div
                      className=""
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    ></div>
                  </Link>

                  <div
                    className=""
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  ></div>
                </div>
               
              </div>
              {key % 4 === 0 && key !== 0 ? <Adspot/>: null}       
              </div>
            )
            
            
          })
        ) : (
          <Loading />
        )}
        
      </InfiniteScroll>
    </div>
  );
}

const styles = {
  text: {
    textTransform: "uppercase",
  },
  article: {
    borderBottom: "1px solid #d6d6d6",
    paddingTop: "10px",
  },
};

export default Section;
