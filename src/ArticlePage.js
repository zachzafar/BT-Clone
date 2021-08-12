import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import InfiniteScroll from "react-infinite-scroll-component"
import Loading from "./Loading.js"

function ArticlePage({articleImage}) {
  const { articleId } = useParams();
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let post
    axios
      .get(`/posts/${articleId}`)
      .then((res) => {
         post = {
          title: res.data.title.rendered,
          body: res.data.content.rendered,
        };
       
        console.log(post);
        return axios.get(`/media/${res.data.featured_media}`)
      }).then((res) => {
        post = {
          ...post,
          image: res.data.guid.rendered,
        }
        setArticle(post);
        setLoading(true)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="HomePage">
    {loading ? 
    <div>
      <img src={article.image}  width="800"/>
      <h1 dangerouslySetInnerHTML={{ __html: article.title }}></h1>
      <div dangerouslySetInnerHTML={{ __html: article.body }}></div> 
      </div>
      : <Loading/>}
      
    </div>
  );
}

export default ArticlePage;
