import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Buisness() {
  const [list, setList] = useState([]);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      const { data: posts } = await axios.get("posts?categories=91&per_page=2");
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

  return (
    <div width="50px">
      <h1 className="Title">Buisness</h1>
      <div style={styles.container}>
        {list.map((item, key) => {
          console.log(item);
          return (
            <div key={key}>
              <div>
                <img src={item.image} alt={"s"} width="650px" height="400px" />
                <div className="title">
                    <Link to={`posts/${item.id}`} style={{ textDecoration: "none", color: "black",fontWeight: "bold" }}>{item.title}</Link>
                
                </div>
                <div
                  className=""
                  style={styles.textbox}
                  dangerouslySetInnerHTML={{ __html: item.description }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const styles = {
  textbox: {
    width: "45vw",
    overflow: "hidden",
  },
  title: {
    width: "20vw",
  }, text: {
    fontWeight: "900",
    fontSize: "70px",
    fontStyle: "italic",
  }

};

export default Buisness;
