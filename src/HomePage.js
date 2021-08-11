import React, {useState} from 'react'
import Features from './Features.js'
import Adspot from './Adspot.js'
import News from './News.js'
import MostWatched from './MostWatched.js'
import "./HomePage.css"
import TopStories from './TopStories.js'
import Buisness from './Buisness.js'
import ExploreMore from './ExploreMore.js'
import Court from './Court.js'


function HomePage({addImage}) {
    const [loading,setLoading] = useState(false)
    

    return (
        <div className="HomePage">
            <Features addImage={addImage}/>
            <div className="section-1"> 
            <TopStories addImage={addImage}/>
            <News addImage={addImage}/>
            </div>
            <MostWatched addImage={addImage}/>
            <ExploreMore addImage={addImage}/>
            <div className="section-2">
                <Buisness addImage={addImage}/>
                <Court addImage={addImage}/>
            </div>
        </div>
    )
}

export default HomePage
