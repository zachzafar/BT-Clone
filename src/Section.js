import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Adspot from './Adspot.js'
import "./HomePage.css"

function Section() {
  const { sectionName } = useParams();

  const [list, setList] = useState([]);

  useEffect(() => {
    loadPosts();
  }, [sectionName]);

  const loadPosts = async () => {
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
        `/posts?categories=${category}`
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
    <div className="HomePage">
      <h1 className="Title" style={styles.text}>{sectionName}</h1>
      {list.map((item, key) => {
        console.log(item);
        return (
          <div key={key} style={styles.article}>
            <div>
              <img src={item.image} alt={"s"} width="450px" height="300px"/>
             
                <Link to={`/posts/${item.id}`} style={{ textDecoration: "none", color: "black",fontWeight: "bold" }}>
                <div className=""  dangerouslySetInnerHTML={{ __html: item.title }}></div>
                </Link>
              
              <div className="" dangerouslySetInnerHTML={{ __html: item.description }}>
              </div>
            </div>
          </div>
        );
      })}
      <Adspot/>
    </div>
  );
}

const styles = {
  text: {
    textTransform: "uppercase",
  },
  article : {
    borderBottom : "1px solid #d6d6d6",
    paddingTop: "10px"
  }
}

export default Section;
