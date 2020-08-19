import React from 'react';
import logo from './logo.svg';
import './App.css';
import Facebook from './components/facebook';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Facebook Auth Example
        </p>
        <div>
          <Facebook />
        </div>
        <br/>
        <p>
          To get started, authenticate with facebook
        </p>
      </header>
    </div>
    
  );
}

export default App;
