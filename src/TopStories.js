import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import "./TopStories.css"

function TopStories({addImage}) {
    const [list, setList] = useState([]);

    useEffect(() => {
      loadPosts();
    }, []);
  
    const loadPosts = async () => {
      try {
        const { data: posts } = await axios.get(
          "posts?categories=1254&per_page=6"
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

    return (
        <div>
        <h1 className="Title">Top Stories</h1>
        <div className="container">
        {list.map((item, key) => {
            console.log(item);
            return (
              <div key={key} width="10vw">
                <div>
                  <img src={item.image} alt={'s'} width="150px" height="100px"/>
                 
                   <Link to={`posts/${item.id}`} style={{ textDecoration: "none", color: "black",fontWeight: "bold" }}>
                   <div className='title' style={styles.title} dangerouslySetInnerHTML={{ __html: item.title }} onClick={addImage(item.image)}></div>
                    </Link>
                  
                  <div className='body' style={styles.textbox} dangerouslySetInnerHTML={{ __html: item.description }}>
                  </div>
                </div>
              </div>
            );
          })}</div>
          
        </div>
    )
}

const styles = {
    textbox: {
        width: "20vw",
        overflow: "hidden",
        height: "10vh",
    },
    title: {
        width: "20vw",
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "22vw 50vw"
    }
}

export default TopStories
