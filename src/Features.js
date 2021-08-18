import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Features() {
  const [list, setList] = useState([]);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      const { data: posts } = await axios.get(
        "posts?categories=1254"
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
        }).catch((err) => {
          console.log(err);
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
  <div className="features"> 
  {list.length > 0 ? (
      <div className="article" key={list[1].key}> 
      <Link to={`posts/${list[1].id}`} style={{ textDecoration: "none", color: "black" }}><div style={styles.text} className="Title" dangerouslySetInnerHTML={{ __html: list[1].title}}></div></Link>
        <img src={list[1].image} width="90%" height="550px" style={styles.image}/>
       
        
    </div>) :(null)}
    </div>)
}

const styles = {
  text: {
    fontWeight: "900",
    fontSize: "70px",
    fontStyle: "italic",
    textDecoration: "none",
    textAlign: "center",
  },
  image: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  }
}
export default Features;
