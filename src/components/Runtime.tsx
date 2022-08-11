import React from "react";
import { UserPrefs } from "../types/interfaces";


interface RuntimeProps {userPrefs: UserPrefs, setUserPrefs: React.Dispatch<React.SetStateAction<UserPrefs>>} 

const Runtime = (props: RuntimeProps) => {
    const {userPrefs, setUserPrefs} = props
    const handleClick = (e: React.SyntheticEvent) => {
        //@ts-ignore comment
        setUserPrefs({...userPrefs, runtime: e.target.value})
        }
    const TMDB_MAX_TIMES = ["90 minutes", "2 hours"]

    return (
        <div className="transparent-background">
            <h2 className="input-title transparent-background">What's the max length you want a movie to be?</h2>
            <h4 className="transparent-background question-explanation">Click Next to get a movie of any length</h4>
            <ul className="transparent-background button-list">
            {TMDB_MAX_TIMES.map(time => {
                let runtimeButtonId: string 
                if ('90 minutes' === time) {
                    runtimeButtonId = '90-mins-button'
                } else {
                    runtimeButtonId = '2-hours-button'
                }
                    return (
                        <>
                        <input type="radio" className="preferance-buttons btn-check" name="btnradio" key={time} id={runtimeButtonId} autoComplete="off" onClick={handleClick} value={time}></input>
                        <label className="preferance-buttons btn btn-primary" htmlFor={runtimeButtonId}>{time}</label>
                        </>
                    )
                })}
            </ul>
        </div>
    )
}

export default Runtime