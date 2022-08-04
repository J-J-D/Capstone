import axios from "axios";
import React, { useState } from "react";
import "./UserLogin.css";
import PropTypes from "prop-types";


interface Login{
    handleSubmission: (username: string) => void

}

const UserLoginForm = (Props: Login) => {
    const [loginData, setLoginData] = useState("");

    const changeName: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setLoginData(e.currentTarget.value)
    }

    const loginUser = (e: React.SyntheticEvent) => {
        e.preventDefault();
        Props.handleSubmission(loginData);
        setLoginData(loginData + " is logged in" )
    }




    return (
        <form onSubmit={loginUser}>
            <p>Please enter your username:</p>
            <input
            type="text"
            name = "Username"
            value = {loginData}
            onChange = {changeName}

            />
        

        </form>
    )
    };

export default UserLoginForm;