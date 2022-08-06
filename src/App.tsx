import React from 'react';
import './App.css';
import MovieDisplay from './components/MovieDisplay';
import UserLoginForm from "./components/UserLogin";
import InputForm from "./components/InputForm";
import { useState } from 'react';
import axios from 'axios';




function App() {
  const [login, setLogin] = useState({id: 0, message: 
  "You are now logged in.", username: ""});



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
      }
  

  
    return (
      <div className="App">
        <header className="App-header">
          <UserLoginForm handleSubmission={loginUser}/>
            </header>
          <section className ="Body">
            <InputForm/>
          </section>
      </div>
      
  );
}

export default App;

