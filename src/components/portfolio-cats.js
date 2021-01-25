import React from 'react';

function PortfolioCats() {
  return (
    <div className="App" style={Styles.links}>
      <a href="https://github.com" style={Styles.github}>logologologo</a>
      <a href="https://github.com" style={Styles.linkedin}>logo</a>
      <a href="https://github.com" style={Styles.twitter}>logo</a>
    </div>
  );
}

const Styles = {
    links: {
        display: "flex",
        border: "blue 1px solid",
        height: "30em",
        flexDirection: "row",
        width: "120em",
        justifyContent: "flex-start"
    },
    a: {
        width: "4em"
    },
  github: {
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${require("../assets/icons/logo.png")})`,
    backgroundSize: "auto 5em",
  },
  linkedin: {
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${require("../assets/icons/linkedin.png")})`,
    backgroundSize: "auto 5em",
  twitter: {
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${require("../assets/icons/twitter.png")})`,
    backgroundSize: "auto 5em",
  }
}}

export default PortfolioCats;