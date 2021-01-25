import React from 'react';
import './App.css';
import HomePage from './pages/Home';
import PortfolioPage from './pages/Portfolio';

function App() {
  return (
    <div className="App" style={{height: "100%",}}>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <HomePage />
    </div>
  );
}

export default App;
