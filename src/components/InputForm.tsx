import React, { useState } from "react";
import Genres from "./Genres";
import Eras from "./Eras";
import Runtime from "./Runtime";
import { UserPrefs } from "../types/interfaces";

const InputForm = () => {

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
        }

    }

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
                <button onClick={() => { if (page === InputTitles.length -1) {console.log("TIME TO POST THE SESSION PREFS CURRENLTY IN USERPREFS STATE")}else {
                    setPage((curPage) => curPage + 1)
            }}}>{page === InputTitles.length -1 ? "Submit" : "Next"}</button>
            </div>
        </div>
    )

}



export default InputForm