import React from 'react';
import Navigation from '../components/Navigation';

function PortfolioPage() {
  return (
    <div className="portfolio" style={Styles.portfolio}>
      <Navigation />
    </div>
  );
}

const Styles = {
  portfolio:{
    height: "100%"
  },
  block: {
    width: "40%",
    height: "100%",
    backgroundColor: "#E3E1D9",
    opacity: "33%",
    zIndex: "3",
  }
}

export default PortfolioPage;