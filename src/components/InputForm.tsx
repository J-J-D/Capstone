import React, { useState } from "react";
import Genres from "./Genres";
import Eras from "./Eras";
import Runtime from "./Runtime";
import { UserPrefs } from "../types/interfaces";
import axios from "axios";
import { createModuleResolutionCache } from "typescript";
import MovieDisplay from "./MovieDisplay";

interface InputFormProps {userId: number};

const InputForm = (props: InputFormProps) => {

    const [page, setPage] = useState(0)

    const [userPrefs, setUserPrefs] = useState({
        "genre" : "",
        "era" : "",
        "runtime":"",
})

    const InputTitles = ["Genres", "Era", "Runtime"]

    const pageDisplay = () => {
        if (page === 0){
            return <Genres userPrefs={userPrefs} setUserPrefs={setUserPrefs}/>
        }else if(page === 1){
            return <Eras userPrefs={userPrefs} setUserPrefs={setUserPrefs}/>
        }else if(page === 2){
            return <Runtime userPrefs={userPrefs} setUserPrefs={setUserPrefs}/>
        }else if(page === 3){
            return <MovieDisplay/>
        }

    }

    const getSession = (session_id: number) => {
        axios
        .get(`https://matinee-all-day.herokuapp.com/sessions/${session_id}`)
        .then((response) => {console.log(response.data)})
        .catch((err) => {console.log(err)}) 
    }

    const putSession = (session_id: number) => {
        axios
        .put(`https://matinee-all-day.herokuapp.com/sessions/${session_id}`)
        .then((reponse) => {console.log(reponse)
        getSession(session_id)})
        .catch((err) => {console.log(err)}) 
    }

    const postSession = (userPrefs: UserPrefs) => {
        const postPrefs = {...userPrefs, user_id:props.userId}
        axios
        .post('https://matinee-all-day.herokuapp.com/sessions', postPrefs)
        .then((response) => {console.log(response)
        const session_id = response.data.session_id
        putSession(session_id)
    })
        .catch((err) => {console.log(err)})
};

    return (
        <div className="InputForm">
            User Preferences
            <div className="InputTitle">
                <h1>{InputTitles[page]}</h1>
            </div>
            <div className="Preferences">{pageDisplay()}</div>
            <div className="FormNav">
                <button disabled = {page === 0} onClick={() => {
                    setPage((curPage) => curPage - 1)
                }}>Prev</button>
                <button onClick={() => { 
                    if (page === InputTitles.length -1) 
                        {console.log('Posting session');
                        postSession(userPrefs);
                        setPage((curPage) => curPage + 1);
                    } else {
                        setPage((curPage) => curPage + 1)
            }}}>{page === InputTitles.length -1 ? "Submit" : "Next"}</button>
            </div>
        </div>
    )

}



export default InputForm