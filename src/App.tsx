import React from 'react';
import './App.css';
import axios from "axios";
import {useState} from 'react';


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          hello, world
        </p>
        <a
          className="Trello-link"
          href="https://trello.com/b/OZob7lcI/matinyarn ee-all-day"
          target="_blank"
          rel="noopener noreferrer"
        >
          MAD Trello Site
        </a>
      </header>
      <button onClick={getMovie}>Random</button>
    </div>
    
  );
}

export default App;
