import React, { useState } from "react";
import Genres from "./Genres";
import Eras from "./Eras";
import Runtime from "./Runtime";

const InputForm = () => {

    const [page, setPage] = useState(0)

    const InputTitles = ["Genres", "Era", "Runtime"]

    const pageDisplay = () => {
        if (page === 0){
            return <Genres/>
        }else if(page === 1){
            return <Eras/>
        }else if(page === 2){
            return <Runtime/>
        }

    }

    return (
        <div className="InputForm">
            User Preferences
            <div className="InputTitle">
                <h1>{InputTitles[page]}</h1>
            </div>
            <div className="PrefButtons">{pageDisplay()}</div>
            <div className="FormNav">
                <button disabled = {page === 0} onClick={() => {
                    setPage((curPage) => curPage - 1)
                }}>Prev</button>
                <button disabled = {page === InputTitles.length-1}onClick={() => {
                    setPage((curPage) => curPage + 1)
                }}>Next</button>
            </div>
        </div>
    )

}



export default InputForm