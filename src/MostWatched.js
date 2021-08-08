import React from 'react'

function MostWatched() {
    return (
        <div style={styles.container}>
            <h1 style={styles.text}>MOST WATCHED</h1>
            <div style={{alignItems: 'center'}}><iframe  src="https://www.youtube.com/embed/7UFq4cVaY30?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen style={styles.videoPlayer}/></div>
            <div></div>
        </div>
    )
}

const styles = {
    container: {
        color: 'white',
        width: '100%',
        backgroundColor: 'black',
        height: "70vh"
    },
    text: {
        textAlign: 'center',
        fontWeight: "900",
        fontSize: "40px",
        fontStyle: "italic",
    },
    videoPlayer:{
        width: "90%",
        height: "50vh",
        position: 'center',
    }
}

export default MostWatched
