import React from "react";
import { UserPrefs } from "../types/interfaces";


interface ErasProps {userPrefs: UserPrefs, setUserPrefs: React.Dispatch<React.SetStateAction<UserPrefs>>} 

const Eras = (props: ErasProps) => {
    const {userPrefs, setUserPrefs} = props
    const handleClick = (e: React.SyntheticEvent) => {
    //@ts-ignore comment
    setUserPrefs({...userPrefs, era: e.target.value})
    }

const TMDB_DECADES = ["1970s", "1980s", "1990s", "2000s", "2010s", "2020 Onward"]

    return (
        <div>
            <h3>Which decade? Click Next to skip and not specify</h3>
            <ul>

            {TMDB_DECADES.map(decade => {
                    return (
                        <button className = "eraButton" key={decade} onClick = {handleClick} value = {decade}>{decade}</button>
                    )
                })}
            </ul>
            <h4>Decade Selected {userPrefs.era}</h4>
        </div>
    )
}

export default Eras