import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function LocalNews() {
  const [lists, setList] = useState([]);
  const [newsUpdate, setNewsUpdate] = useState(0);

  useEffect(() => {
    loadPosts()
  }, []);
  

  const loadPosts = async () => {
    let list = [];
    try {
      const posts = await axios.get("posts/");
      const data = posts.data;
      console.log(data);
      data.map(async (post) => {
        let featuredMedia = await axios.get(`media/${post.featured_media}`);
        list.push({
          id: post.id,
          title: post.title.rendered,
          description: post.excerpt.rendered,
          image: featuredMedia.data.guid.rendered,
        });
      });

      setList(list);
    } catch (err) {
     console.log(err);
    }
  };
  console.log(lists);
  return (
    <div>
      {lists.map((list) => {
          return (<div key={list.id}>
          <div className="article item" >
            <img src={list.image} />
            <div className="Title">
              <Link to={`article/${list.id}`}><h5>{list.title}</h5></Link>
            </div>
            <div className="Title">
              <h5>{list.description}</h5>
            </div>
          </div>
        </div>)
          }
      )}
    </div>
  );
}
export default LocalNews;
