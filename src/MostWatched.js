import React from "react";

function MostWatched() {
  return (
    <div style={styles.container}>
      <h1 style={styles.text}>MOST WATCHED</h1>
      <div style={styles.videoBox}>
        <div style={{ alignItems: "center" }}>
          <iframe
            src="https://www.youtube.com/embed/7UFq4cVaY30?controls=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullscreen
            width="800"
            height="500"
            style={styles.videoPlayer}
          />
        </div>
        <div>
          <div style={styles.videoDescription}>
            <img
              height="100px"
              width="150px"
              src="https://img.huffingtonpost.com/asset/61116492260000aba852548d.jpeg?cache=6aQ9b8NzsA&ops=1280_480&format=webp"
            />
            <h5>Title of video</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    color: "white",
    width: "100%",
    backgroundColor: "black",
    height: "70vh",
  },
  text: {
    textAlign: "center",
    fontWeight: "900",
    fontSize: "40px",
    fontStyle: "italic",
  },
  videoPlayer: {
    paddingLeft: "30px",
    paddingRight: "20px",
  },
  videoBox:{
      display: "flex",
      flexDirection:"row",
  },
  videoDescription: {
      display: "flex",
      flexDirection:"row",
  }
};

export default MostWatched;
