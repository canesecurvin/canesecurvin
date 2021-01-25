import React from 'react';
import styles from './styles/navigation.css';

function Navigation() {
  return (
    <div className="navigation" style={styles.navigation}>
      <div className="logo" style={styles.logo}>
        <img alt="logo" src={require('../assets/logo-name.png')} style={{height: "auto", width: "45%"}}></img>
      </div>
      <div className="pageLinks" style={styles.pageLinks}>
        {/* <a href=""style={Styles.links}>ABOUT ME</a>
        <a style={Styles.links}>PORTFOLIO</a>
        <a style={Styles.links}>CONTACT</a> */}
        <p style={Styles.links}>about me</p>
        <p style={Styles.links}>portfolio</p>
        <p style={Styles.links}>contact</p>
      </div>
    </div>
  );
}

const Styles = {
  navigation: {
    display: "flex",
    flexDirection: "row",
    height: "auto",
    width: "100%",
    justifyContent: "flex-start",
  },
  logo: {
    width: "auto",
    height: "100%",
    paddingLeft: "3em",
    // border: "black 2px solid"
  },
  pageLinks: {
    width: "70%",
    height: "100%",
    paddingRight: "5%",
    paddingTop: "1%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  links: {
    color: "gray",
    fontSize: "20px",
    marginLeft: "10px",
    marginRight: "10px"
  }
}
export default Navigation;