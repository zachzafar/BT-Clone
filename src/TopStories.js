import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';


function TopStories({addImage}) {
    const [list, setList] = useState([]);

    useEffect(() => {
      loadPosts();
    }, []);
  
    const loadPosts = async () => {
      try {
        const { data: posts } = await axios.get(
          "posts?categories=1254&per_page=5"
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
        {list.length > 0  ? <div  style={{backgroundImage: `url(${list[0].image})`,  height: "45vh", width: "70vh", backgroundSize: "105%", marginBottom:"30px"}}>
        <Link to={`posts/${list[0].id}`} style={{ textDecoration: "none", color: "white",fontWeight: "bold" }}>
                   <div className='title' style={styles.maintTitle} dangerouslySetInnerHTML={{ __html: list[0].title }} ></div>
                    </Link>
        </div>: null }
       
        <div className="container">
        {list.map((item, key) => {
            console.log(key);
            if (key > 0){
              return (
              <div key={key} width="10vw">
                <div>
                  <img src={item.image} alt={'s'} width="300vw" height="200px"/>
                 
                   <Link to={`posts/${item.id}`} style={{ textDecoration: "none", color: "black",fontWeight: "bold" }}>
                   <div className='title' style={styles.title} dangerouslySetInnerHTML={{ __html: item.title }} ></div>
                    </Link>
                  
                  <div className='body' style={styles.textbox} dangerouslySetInnerHTML={{ __html: item.description }}>
                  </div>
                </div>
              </div>
            );
            }
            
          })}</div>
          
        </div>
    )
}

const styles = {
    textbox: {
        display: "block",
        width: "20vw",
        overflow: "hidden",
        margin: 0,
        fontSize: "13px",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        
        
    },
    title: {
        width: "20vw",
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "22vw 50vw"
    },
    maintTitle: {
      fontSize: "30px",
      fontWeight: "900",
      fontStyle:"italic",
      paddingTop: "25vh",
      paddingLeft: "20px",
      textAlign: "left",
      width: "60%", 
      textShadow: "2px 2px 2px black"
    },
    mainImage: {
      height: "100vh",
      
    }
}

export default TopStories
