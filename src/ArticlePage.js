import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

function ArticlePage() {
  const { articleId } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    axios
      .get(`posts/${articleId}`)
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

  /*const loadPosts = async () => {
    let list = [];
    try {
      const posts = await axios.get(`${articleId}`);
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
  };*/
  console.log(articleId)
  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
    </div>
  );
}

export default ArticlePage;
