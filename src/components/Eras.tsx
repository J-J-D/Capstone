import React from "react";
import { UserPrefs } from "../types/interfaces";


interface ErasProps {userPrefs: UserPrefs, setUserPrefs: React.Dispatch<React.SetStateAction<UserPrefs>>} 

const Eras = (props: ErasProps) => {
    const {userPrefs, setUserPrefs} = props
    const handleClick = () => setUserPrefs({...userPrefs, era: "1970s"})


    return (
        <div>
            <ul>
            <h3>Era Selected {userPrefs.era}</h3>

                <button onClick = {handleClick}>1970s</button>
            </ul>
        </div>
    )
}

export default Eras