import React from "react";
import { UserPrefs } from "../types/interfaces";


interface GenresProps {userPrefs: UserPrefs, setUserPrefs: React.Dispatch<React.SetStateAction<UserPrefs>>} 


const Genres = (props: GenresProps) => {
    const {userPrefs, setUserPrefs} = props

    const handleClick = () => setUserPrefs({...userPrefs, genre: "Action"})

    return (
        <div className = "GenreButtons">
            <h3>Genres Selected {userPrefs.genre}</h3>
            
            <ul>
                <button onClick = {handleClick}>Action</button>
            </ul>



        </div>
    )
    }
export default Genres