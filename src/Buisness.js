import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import loadPostsfunc from "./functions.js"

function Buisness() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadPostsfunc("buisness",null,null,setList,setLoading);
  }, []);

  
  return (
    <div width="50px">
      <h1 className="Title">Buisness</h1>
      <div style={styles.container}>
        {list.map((item, key) => {
          console.log(item);
          return (
            <div key={key}>
              <div>
                <img src={item.image} alt={"s"} width="650px" height="400px" />
                <div className="title">
                    <Link to={`posts/${item.id}`} style={{ textDecoration: "none", color: "black",fontWeight: "bold" }}>{item.title}</Link>
                
                </div>
                <div
                  className=""
                  style={styles.textbox}
                  dangerouslySetInnerHTML={{ __html: item.description }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const styles = {
  textbox: {
    width: "45vw",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    webkitLineClamp : "3",
    webkitBoxOrient : "vertical",
    //whiteSpace: "nowrap",
  },
  title: {
    width: "20vw",
  }, text: {
    fontWeight: "900",
    fontSize: "70px",
    fontStyle: "italic",
  }

};

export default Buisness;
