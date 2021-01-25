import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/hero';
import Breadcrumb from '../components/breadcrumb'
import PortfolioCats from '../components/portfolio-cats'

function HomePage() {
  return (
    <div className="HomePage" style={Styles.home}>
      <Navigation />
      <Hero />
      <Breadcrumb />
      <PortfolioCats />
    </div>
  );
}

const Styles = {
  home:{
    height: "100%"
  }
}
export default HomePage;