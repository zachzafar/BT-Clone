import React from 'react'
import {useParams} from 'react-router-dom'


function Section() {
    const {sectionName} = useParams()

    return (
        <div>
           <h1>{sectionName}</h1> 
           <div className="Section-Page">
           <div className="article item">
                <img></img>
                <div className="Topic"><h5>Tech</h5></div>
                <div className="Title"><h5>New Oppurtunities at BT</h5></div>
                <div className="Title"><h5>Shonda Rhimes</h5></div>
            </div>
            <div className="article item">
                <img></img>
                <div className="Topic"><h5>Food</h5></div>
                <div className="Title"><h5>KFC vs Cheffete</h5></div>
                <div className="Title"><h5>Ikayla Yearwood</h5></div>
            </div>
            <div className="article item">
                <img></img>
                <div className="Topic"><h5>Money</h5></div>
                <div className="Title"><h5>Money Cirlces in Barbados</h5></div>
                <div className="Title"><h5>Del Figolo</h5></div>
            </div>
            <div className="article item">
                <img></img>
                <div className="Topic"><h5>Fashion</h5></div>
                <div className="Title"><h5>Blue Yellow and Black</h5></div>
                <div className="Title"><h5>Natasha King</h5></div>
            </div>
           </div>
        </div>
    )
}

export default Section
