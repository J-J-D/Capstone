import React from 'react';
import './App.css';
import axios from "axios";
import {useState} from 'react';


function App() {
 
const getMovie = () => {
  let year: number = Math.floor(Math.random() * (2022 - 1960 + 1)) + 1960; 

  axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=431d8e14474b80402b2e05a0e1ae22f4&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&primary_release_year=${year}&with_watch_monetization_types=flatrate`)
  .then((Response) => {
    console.log(Response.data.results[4].original_title, year);
  })

}

  // const [data, setData] = useState({data: []});
  // const [isLoading, setIsLoading] = useState(false);
  // const [err, setErr] = useState('');

  // const handleClick = async () => {
  //   setIsLoading(true);

  //   try {
  //     const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=431d8e14474b80402b2e05a0e1ae22f4&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&primary_release_year=${year}&with_watch_monetization_types=flatrate`, {
  //       method: 'GET',
  //       headers: {
  //         Accept: 'application/json',
  //       },
  //     });

  //     if (!response.ok) {
  //       console.log(`Error! status: ${response.status}`);
  //     }

  //     const result = await response.json();

  //     console.log('number of movies is:' + result.results.length +' Movies are: ', JSON.stringify(result, null, 4));

  //     setData(result);
  //   } catch (err) {
  //     console.log(err);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };



  
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
