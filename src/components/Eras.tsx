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
        <div className="eras-container">
            <h3 className="eras-details">Which decade? Click Next to skip and not specify</h3>
            <ul className="eras-details">
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
            <h4 className="eras-details">Decade Selected {userPrefs.era}</h4>
        </div>
    )
}

export default Eras