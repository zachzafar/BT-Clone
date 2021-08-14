import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./Loading.js";
import { PostAddSharp } from "@material-ui/icons";
import MoreLT from "./MoreLT.js";

function ArticlePage({ articleImage }) {
  const { articleId } = useParams();
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let post;
    axios
      .get(`/posts/${articleId}`)
      .then((res) => {
        post = {
          description: res.data.excerpt.rendered,
          title: res.data.title.rendered,
          body: res.data.content.rendered,
          authorID: res.data.author,
          category: res.data.categories,
        };

        console.log(post.category[0]);
        return axios.get(`/media/${res.data.featured_media}`);
      })
      .then((res) => {
        post = {
          ...post,
          image: res.data.guid.rendered,
        };
        return axios.get(`/users/${post.authorID}`);
      })
      .then((res) => {
        post = {
          ...post,
          authorName: res.data.name,
          authorImage: res.data.avatar_urls["24"],
        };
        setArticle(post);
        setLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="HomePage">
      {loading ? (
        <div className="article">
          <h1 dangerouslySetInnerHTML={{ __html: article.title }}></h1>
          <h5 dangerouslySetInnerHTML={{ __html: article.description }}></h5>
          <div className="author">
            <img src={article.authorImage} styles={styles.AuthorImage} />
            <h5 dangerouslySetInnerHTML={{ __html: article.authorName }}/>
          </div>

          <div style={styles.container}>
            <div style={styles.articleBox}>
              <img src={article.image} width="600" />
              <div dangerouslySetInnerHTML={{ __html: article.body }}></div>
            </div>
            <div style={{ flex: "40%" }}>
              <MoreLT categories={article.category} />
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

const styles = {
  AuthorImage: {
    borderRadius: "50%",
  },
  container: {
    display: "flex",
    flexDirection: "row",
  },
  articleBox : {
    flex: "60%",
    borderRight: "1px solid #d6d6d6",
    paddingRight: "20px",
  },
  adbox : {
    flex: "40%"
  }
};
export default ArticlePage;
