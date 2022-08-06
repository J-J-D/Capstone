import React from "react";
import { UserPrefs } from "../types/interfaces";


interface GenresProps {userPrefs: UserPrefs, setUserPrefs: React.Dispatch<React.SetStateAction<UserPrefs>>} 


const Genres = (props: GenresProps) => {
    const {userPrefs, setUserPrefs} = props

    const handleClick = (e: React.SyntheticEvent) => {
        setUserPrefs({...userPrefs, genre: e.currentTarget.innerHTML});
    };

    return (
        <div className = "GenreButtons">
            <h3>Genres Selected {userPrefs.genre}</h3>
            
            <ul>
                <button id = "genre-action" onClick = {handleClick}>Action</button>
            </ul>



        </div>
    )
    }
export default Genres