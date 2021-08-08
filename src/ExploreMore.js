import React from 'react'
import './ExploreMore.css'

function ExploreMore() {
    return (
        <div className="ExploreMore">
            <h1 style={styles.text}>EXPLORE MORE</h1>
            <div className="ProductContainer">
            <div className="Product"><h2>TRAVEL</h2></div>
            <div className="Product"><h2>NEWS</h2></div>
            <div className="Product"><h2>LIFE</h2></div>
            <div className="Product"><h2>SHOPPING</h2></div>
            <div className="Product"><h2>MAGAZINES</h2></div>
            </div>
        </div>
    )
}

const styles = {
    text: {
      fontWeight: "900",
      fontSize: "40px",
      fontStyle: "italic",
      
    }
  }

export default ExploreMore
