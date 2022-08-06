import React from "react";
import { UserPrefs } from "../types/interfaces";


interface RuntimeProps {userPrefs: UserPrefs, setUserPrefs: React.Dispatch<React.SetStateAction<UserPrefs>>} 

const Runtime = (props: RuntimeProps) => {
    const {userPrefs, setUserPrefs} = props

    return (
        <div>
            <h3>Approximate maximum movie length?</h3>
            <ul>
                <button>90 minutes</button>
            </ul>

        </div>
    )
}

export default Runtime