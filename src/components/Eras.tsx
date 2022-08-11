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
        <div className="pink-background">
            <h1 className="InputTitle pink-background">Which decade do you want a movie from?</h1>
            <h3 className="pink-background question-explanation">Click Next to get a movie from any decade</h3>
            <ul className="pink-background button-list">
            {TMDB_DECADES.map(decade => {
                let erasButtonId: string = `${decade}-button`
                    return (
                        <>
                        <input type="radio" className="preferance-buttons eraButtons btn-check" name="btnradio" key={decade} id={erasButtonId} autoComplete="off" onClick={handleClick} value ={decade}></input>
                        <label className="preferance-buttons btn btn-primary" htmlFor={erasButtonId}>{decade}</label>
                        </>
                    )
                })}
            </ul>
            <h4 className="pink-background">Decade Selected {userPrefs.era}</h4>
        </div>
    )
}

export default Eras