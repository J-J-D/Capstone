import React from 'react';
import './App.css';
import MovieDisplay from './components/MovieDisplay';


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          You should watch: 
        </p>
          </header>
        <section className ="Body">
          <MovieDisplay/>
        </section>
    </div>
    
  );
}

export default App;
