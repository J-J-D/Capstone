import axios from "axios";
import React, { useState } from "react";
import "./UserLogin.css";
import PropTypes from "prop-types";


interface Login{
    handleSubmission: (username: string) => void

}



const UserLoginForm = (Props: Login) => {
    const [username, setUsername] = useState("");
    const [loggedInMessage, setLoggedInMessage] = useState("")

    const changeName: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setUsername(e.currentTarget.value)
    }

    const loginUser = (e: React.SyntheticEvent) => {
        e.preventDefault();
        Props.handleSubmission(username);
        setLoggedInMessage(username + " is logged in" )
    }
    

    return (
        <section className="login">
            <form className="loginForm"
            onSubmit={loginUser}>
                <p>Please enter your username:</p>
                <input
                type="text"
                name = "Username"
                value = {username}
                onChange = {changeName}
                ></input>
            </form>
            <p>
                {loggedInMessage}
            </p>
        </section>
    )
    };

export default UserLoginForm;