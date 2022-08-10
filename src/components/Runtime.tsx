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
        <div className="runtime-container">
            <h3 className="runtime-details">Approximate maximum movie length?</h3>
            <ul className="runtime-details">
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