import React from 'react'

function ExploreMore() {
    return (
        <div className="ExploreMore">
            <h1 style={styles.text}>EXPLORE MORE</h1>
            <div className="ProductContainer">
            <div className="Product" style={{backgroundImage: "url(/travel.jpg)", backgroundSize: "120%"}}><h2>TRAVEL</h2></div>
            <div className="Product" style={{backgroundImage: "url(/lifestyle.jpg)",  backgroundSize: "110%"}}><h2>LIFE</h2></div>
            <div className="Product" style={{backgroundImage: "url(/shopping.jpg)" ,backgroundSize: "110%"}}><h2>SHOPPING</h2></div>
            <div className="Product" style={{backgroundImage: "url(/magazines.jpg)",  backgroundSize: "110%"}}><h2>MAGAZINES</h2></div>
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
