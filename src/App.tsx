import React from 'react';
import './App.css';
import MovieDisplay from './components/MovieDisplay';
import UserLogin from "./components/UserLogin";
import { useState } from 'react';
import axios from 'axios';



function App() {
  // const [login, setLogin] = useState(null);

  // const loginUser =  (username) => {
  //   axios
  //     .post('https://matinee-all-day.herokuapp.com/users/login', username)
  //     .then((response) => {
  //       setLogin(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  //     }
  

  
    return (
      <div className="App">
        <header className="App-header">
          {/* <UserLogin handleSubmission={loginUser}/> */}
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
