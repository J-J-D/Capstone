import React from "react";
import { UserPrefs } from "../types/interfaces";


interface RuntimeProps {userPrefs: UserPrefs, setUserPrefs: React.Dispatch<React.SetStateAction<UserPrefs>>} 

const Runtime = (props: RuntimeProps) => {
    const {userPrefs, setUserPrefs} = props
    const handleClick = (e: React.SyntheticEvent) => {
        console.log(e)
        //@ts-ignore comment
        setUserPrefs({...userPrefs, runtime: e.target.value})
        }
    const TMDB_MAX_TIMES = ["90 minutes", "2 hours"]

    return (
        <div>
            <h3>Approximate maximum movie length?</h3>
            <ul>
            {TMDB_MAX_TIMES.map(time => {
                    return (
                    <button className = "runtimeButton" key={time} onClick = {handleClick} value = {time}>{time}</button>
                    )
                })}
            </ul>

        </div>
    )
}

export default Runtime