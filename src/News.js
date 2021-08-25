import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import loadPostsfunc from "./functions.js"

function News() {
  const [list, setList] = useState([]);
  const [amount, setAmount] = useState(9);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadPostsfunc("list",amount,null,setList,setLoading);
  }, []);

  
  const fetchData = async () => {
    setAmount(amount + 10);
  };

  return (
    <div width="50px">
      <h1 className="Title">Latest Stories</h1>

      {list.map((item, key) => {
        console.log(item);
        return (
          <div key={key} style={styles.article}>
            <div style={styles.textArea}>
              <Link
                to={`posts/${item.id}`}
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                <div
                  style={styles.title}
                  className="title"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                ></div>
              </Link>
              <div
                className="body"
                style={styles.textbox}
                dangerouslySetInnerHTML={{ __html: item.description }}
              ></div>
            </div>
            <img src={item.image} alt={"s"} width="125px" height="100px" />
          </div>
        );
      })}
    </div>
  );
}

const styles = {
  textbox: {
    width: "20vw",
    height: "10vh",
    overflow: "hidden",
    fontSize: "13px",
    paddingRight: "5px",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  title: {
    fontSize: "14px",
    paddingRight: "5px",
  },
  container: {
    overflow: "auto",
    height: "110vh",
    width: "35vw",
  },
  text: {
    fontWeight: "900",
    fontSize: "40px",
    fontStyle: "italic",
  },
  article: {
    display: "flex",
    flexDirection: "row",
    paddingBottom: "10px",
  },
};
export default News;
