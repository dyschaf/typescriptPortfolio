import React from 'react';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Footer from './component/Footer'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Footer/>
    
    
    
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </>
  );
}

export default App;