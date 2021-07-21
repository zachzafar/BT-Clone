import React from 'react'
import Features from './Features.js'
import MostRead from './MostRead.js'
import Adspot from './Adspot.js'
import LocalNews from './LocalNews.js'


function HomePage() {
    return (
        <div>
            <Features/>
            <MostRead/>
            <Adspot/>
            <LocalNews/>
        </div>
    )
}

export default HomePage
