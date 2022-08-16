import React, { useState } from "react";
import "./InputForm.css"
import Genres from "./Genres";
import Eras from "./Eras";
import Runtime from "./Runtime";
import { UserPrefs } from "../types/interfaces";
import axios from "axios";


interface InputFormProps {userId: number, setMovieRec: React.Dispatch<React.SetStateAction<{
    id: number;
    overview: string;
    poster: string;
    release_date: string;
    title: string}
    >>,
    setSessionId: React.Dispatch<React.SetStateAction<number>>
    
}

const InputForm = (props: InputFormProps) => {
    
    const [page, setPage] = useState(0);
    
    const [userPrefs, setUserPrefs] = useState({
        "genre" : new Array<string>(),
        "era" : "",
        "runtime":"",
    });

    const InputTitles = ["Genres", "Era", "Runtime"];


    const pageDisplay = () => {
        if (page === 0){
            return <Genres userPrefs={userPrefs} setUserPrefs={setUserPrefs}/>
        }else if(page === 1){
            return <Eras userPrefs={userPrefs} setUserPrefs={setUserPrefs}/>
        }else if(page === 2){
            return <Runtime userPrefs={userPrefs} setUserPrefs={setUserPrefs}/>}

    };



    const getSession = (sessionId: number) => {
        axios
        .get(`https://matinee-all-day.herokuapp.com/sessions/${sessionId}`)
        .then((response) => {
            console.log("You got a movie!")
            console.log(response)
            props.setMovieRec(response.data)

        })
        .catch((err) => {console.log(err)}) 
    }

    const putSession = (sessionId: number) => {
        axios
        .put(`https://matinee-all-day.herokuapp.com/sessions/${sessionId}`)
        .then((response) => {
            console.log(response)
        getSession(sessionId)
        })

        .catch((err) => {console.log(err)}) 
    }

    const postSession = (userPrefs: UserPrefs) => {
        let genrePrefs = userPrefs.genre.join(' ')
        const postPrefs = {...userPrefs, genre:genrePrefs, user_id:props.userId}

        axios
        .post('https://matinee-all-day.herokuapp.com/sessions', postPrefs)
        .then((response) => {console.log(response);
            let sessionId = response.data.session_id;
            props.setSessionId(response.data.session_id)
        putSession(sessionId);
    })
        .catch((err) => {console.log(err)})
    };

    
    return (
        <div className="col d-flex justify-content-center">
            <div className="card-group w-75" style={{height: "35rem"}}>
                <div className="card preferance-cards ">{pageDisplay()}
                
                <div className="FormNav transparent-background">
                    <button className="preferance-buttons page-turn-buttons" disabled={page === 0} onClick={() => {
                        setPage((curPage) => curPage - 1)
                    }}>Prev</button>
                    <button className="preferance-buttons page-turn-buttons" onClick={() => { 
                        if (page === InputTitles.length -1) 
                            {
                            postSession(userPrefs);
                        } else {
                            setPage((curPage) => curPage + 1)
                }}}>{page === InputTitles.length -1 ? "Submit" : "Next"}</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default InputForm

