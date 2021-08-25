import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Adspot from "./Adspot.js";
import Loading from "./Loading.js";
import InfiniteScroll from "react-infinite-scroll-component";
import loadPostsfunc from "./functions.js"


function Section() {
  const { sectionName } = useParams();
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [amount, setAmount] = useState(5);

  useEffect(() => {
    loadPostsfunc("section",amount,sectionName,setList,setLoading);
  }, [sectionName,amount]);

  const fetchData = async () => {
    setAmount(amount + 5);
  };

  return (
    <div className="HomePage">
      <h1 className="Title" style={styles.text}>
        {sectionName}
      </h1>
      
      <InfiniteScroll
        dataLength={list.length}
        next={fetchData}
        hasMore={true}
        loader={<Loading />}
        endMessage={<p>You've Seen it all</p>}
      >
        {loading ? (
          list.map((item, key) => {
            console.log(key)
            return (
              <div key={key} >
              <div style={styles.article}>
                <div className="articleSection">
                  <div>
                  <img
                    src={item.image}
                    alt={"s"}
                    width="450px"
                    height="300px"
                  /></div>
                  <div>
                  <Link
                    to={`/posts/${item.id}`}
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontWeight: 900,
                      fontSize: "30px",
                    
                    }}
                  >
                    <div
                      className=""
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    ></div>
                  </Link> 
                  <div
                    className=""
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  ></div>
                  </div>
                  

                  
                </div>
               
              </div>
              {key % 4 === 0 && key !== 0 ? <Adspot/>: null}       
              </div>
            )
            
            
          })
        ) : (
          <Loading />
        )}
        
      </InfiniteScroll>
    </div>
  );
}

const styles = {
  text: {
    textTransform: "uppercase",
  },
  article: {
    borderBottom: "1px solid #d6d6d6",
    paddingTop: "10px",
  },
};

export default Section;
