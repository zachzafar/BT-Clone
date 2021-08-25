import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import loadPostsfunc from "./functions.js"

function Court() {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadPostsfunc("court",null,null,setList,setLoading);
  }, []);
  
    return (
        <div>
        <h1 className="Title">Court</h1>
        <div >
        {list.map((item, key) => {
            console.log(item);
            return (
              <div key={key} width="10vw" style={styles.container}>
                <div>
                  <img src={item.image} alt={'s'} width="150px" height="100px"/>
                  
                    <Link to={`posts/${item.id}`} style={{ textDecoration: "none", color: "black",fontWeight: "bold" }}>
                    <div className='title' style={styles.title} dangerouslySetInnerHTML={{ __html: item.title }}></div>
                    </Link>
                  
                  <div className='' style={styles.textbox} dangerouslySetInnerHTML={{ __html: item.description }}>
                    
                  </div>
                </div>
              </div>
            );
          })}</div>
        </div>
    )
}
const styles = {
    textbox: {
        width: "25vw",
        overflow: "hidden",
        fontSize: "13px",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        webkitLineClamp : "3",
        webkitBoxOrient : "vertical",
        //whiteSpace: "nowrap",
    },
    title: {
        width: "20vw",
    },
    text: {
          fontWeight: "900",
          fontSize: "70px",
          fontStyle: "italic",
        },
    container: {
      paddingBottom: "20px",
    }
      
}

export default Court
