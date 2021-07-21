import React, {useEffect} from 'react'

function Article({id, title, description, image}) {

    return (
        <div>
            <div className="article item" key={id}>
        <img src={image}/>
        <div className="Title">
          <h5>{title}</h5>
        </div>
        <div className="Title">
          <h5>{description}</h5>
        </div>
      </div>
        </div>
    )
}

export default Article
