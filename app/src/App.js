import React from 'react';
import logo from './assets/img/logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Hello <strong>SEF</strong>!
        </h1>
        <a
          className="App-link"
          href="https://sefglobal.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://sefglobal.org/
        </a>
      </header>
    </div>
  );
}

export default App;
