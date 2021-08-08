import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import "./HomePage.css"
import InfiniteScroll from "react-infinite-scroll-component"

function ArticlePage({articleImage}) {
  const { articleId } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    axios
      .get(`/posts/${articleId}`)
      .then((res) => {
        let post = {
          title: res.data.title.rendered,
          body: res.data.content.rendered,
        };
        setArticle(post);
        console.log(post);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(articleId)
  return (
    <div className="HomePage">
      <img src={articleImage} />
      <h1 dangerouslySetInnerHTML={{ __html: article.title }}></h1>
      <div dangerouslySetInnerHTML={{ __html: article.body }}></div>
    </div>
  );
}

export default ArticlePage;
