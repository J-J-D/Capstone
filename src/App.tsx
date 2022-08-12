import React from 'react';
import './App.css';
import MovieDisplay from './components/MovieDisplay';
import UserLoginForm from "./components/UserLogin";
import About from "./components/About";
import InputForm from "./components/InputForm";
import { useState } from 'react';
import axios from 'axios';

function App() {
// login tracks the current user and their id. If no one logged in, the user id is set to Default User (48)
  const [login, setLogin] = useState({id: 48, message: 
  "You are now logged in.", username: ""});

  const [movieRec, setMovieRec] = useState({
    "id": 0,
  "overview": "",
  "poster": "",
  "release_date": "",
  "title": ""
});

const [sessionId, setSessionId] = useState(0)

const [seeAbout, setSeeAbout] = useState(false)

const backToApp = () => setSeeAbout(!seeAbout)

  const displayToggle = () => { if (seeAbout) {return <About backToApp = {backToApp}/>} else {
    if (movieRec.id === 0) {
      return <InputForm userId={login.id} setMovieRec={setMovieRec} setSessionId={setSessionId}/>
    } else{ 
      return <MovieDisplay userId={login.id} sessionId={sessionId} movieRec={movieRec} setMovieRec={setMovieRec}/>
    } 
  }};



  const loginUser =  (username: string) => {
    axios
      .post('https://matinee-all-day.herokuapp.com/users/login', {"username": username} )
      .then((response) => {
        setLogin(response.data);
        console.log(login)
      })
      .catch((error) => {
        console.log(error);
      })
      };
  
  
  
    return (
      <div className="App container-fluid">
        <nav className="navbar justify-content-space-between">
          <div className="login-form">
              <UserLoginForm handleSubmission={loginUser} userId ={login.id}/>
            </div>
          <div>
              <h1 className="project-title text-center">Matinee All Day</h1>
            </div>
            <button type="button" className="btn about-button" onClick = {() => {setSeeAbout(!seeAbout)}}> About This App</button>
        </nav>

        <section>
          {displayToggle()}
        </section>
        <div className="footer">
          <p>Jodi Denney & Amel Ntamark | 2022</p>
        </div>
      </div>
      
  );
}

export default App;