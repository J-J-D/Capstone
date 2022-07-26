import React from 'react';
import './App.css';
import axios from "axios";


function App() {
  const randomGet = () => {
    let year: number = 
     Math.floor(Math.random() * (2022 - 1977 + 1)) + 1977; 
    console.log(year)



  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          hello, world
        </p>
        <a
          className="Trello-link"
          href="https://trello.com/b/OZob7lcI/matinee-all-day"
          target="_blank"
          rel="noopener noreferrer"
        >
          MAD Trello Site
        </a>
      </header>
      <button onClick={randomGet}>Random</button>
    </div>
    
  );
}

export default App;
