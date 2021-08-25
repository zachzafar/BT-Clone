import React , { useState, useEffect }from 'react'
import {useParams} from "react-router-dom"
import {Link} from "react-router-dom"
import Loading from "./Loading.js"
import Adspot from "./Adspot.js"
import InfiniteScroll from "react-infinite-scroll-component";
import loadPostsfunc from "./functions.js"

function SearchPage() {
    const {searchTerm} = useParams()
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);
    

  useEffect(() => {
    loadPostsfunc("search",null,searchTerm,setList,setLoading);
  }, []);

    return (
        <div className="HomePage">
        <h1 className="Title" style={styles.text}> Search results based on term "{searchTerm}"</h1>
        {loading ? list.map((item, key) => {
          console.log(item);
          return (
            <div key={key} style={styles.article}>
              <div>
                <img src={item.image} alt={"s"} width="450px" height="300px"/>
               
                  <Link to={`/posts/${item.id}`} style={{ textDecoration: "none", color: "black",fontWeight: "bold" }}>
                  <div className=""  dangerouslySetInnerHTML={{ __html: item.title }}></div>
                  </Link>
                
                <div className="" dangerouslySetInnerHTML={{ __html: item.description }}>
                </div>
              </div>
              {key % 4 === 0 && key !== 0 ? <Adspot/>: null}
            </div>
          );
        }): <Loading/>}
      </div>
    )
}

const styles = {
    text: {
      textTransform: "uppercase",
    },
    article : {
      borderBottom : "1px solid #d6d6d6",
      paddingTop: "10px"
    }
  }
export default SearchPage
