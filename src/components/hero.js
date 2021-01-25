import React from 'react';

function Hero() {
  return (
    <div className="hero" style={Styles.hero}>
      <img src={require("../assets/cece.JPG")} style={Styles.image}></img>
      <div className="greeting" style={Styles.greeting}>
          <p style={Styles.sentenceOne}>Hello, I'm Ca'Nese.</p>
          <p style={Styles.sentenceTwo}>I'm a web and mobile developer. I create POCs for fun!</p>
          <button style={Styles.readButton}>Read More</button>
      </div>
      {/* /* show a paragraph and change height for about page */ }
    </div>
  );
}

const Styles = {
  hero: {
    height: "38vh",
    width: "100vw",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E3E1D9",
    boxShadow: "0 2px 20px rgba(0, 0, 0, 0.08), 0 -2px 20px rgba(0, 0, 0, 0.08)",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${require("../assets/abstract.png")})`,
    backgroundSize: "auto 35em",
    backgroundPosition: "right bottom",
 
  },
  heroContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100vw",
    height: "auto",
    // border: "black 2px solid",
    paddingLeft: "15vw"
  },
  photo: {
    height: "100%",
    width: "30%",
    border: "red 2px solid",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    height: "20vh",
    width: "auto",
    border: "#FF5F58 3px solid",
    borderRadius: "50%",
    marginLeft: "17vw",
    marginRight: "2vw"
  },
  greeting: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  sentenceOne: {
    margin: 0,
    padding: 0,
    fontSize: "4vh",
    color: "#FF5F58"
  },
  sentenceTwo: {
    margin: 0,
    marginTop: ".5vh",
    padding: 0,
    fontSize: "2vh",
    paddingBottom: "4vh",
    color: "#FF5F58"
  },
  readButton: {
    width: "6vw",
    backgroundColor: "transparent",
    border: "#FF5F58 1px solid",
    borderRadius: 5
  }
}

export default Hero;