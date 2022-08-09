import React from "react";
import { UserPrefs } from "../types/interfaces";


interface GenresProps {userPrefs: UserPrefs, setUserPrefs: React.Dispatch<React.SetStateAction<UserPrefs>>} 


const Genres = (props: GenresProps) => {
    const {userPrefs, setUserPrefs} = props

    const handleClick = (e: React.SyntheticEvent, value: string) => {
        // Sets genre to button clicked or concatenates if one already there
        if (userPrefs.genre){
         //@ts-ignore comment   
            setUserPrefs({...userPrefs, genre: userPrefs.genre + " " + e.target.value})
        }else{
         //@ts-ignore comment   
            setUserPrefs({...userPrefs, genre: e.target.value})
        }};

    const TMDB_GENRES = ["Action", "Adventure", "Animation", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "History", "Horror", "Music", "Mystery", "Romance", "SciFi", "Thriller", "War", "Western"]

       

    return (
        <div className = "GenreButtons">
            <h3>Choose any genre or subgenres.  Click Next to skip</h3>
            <ul>
                {TMDB_GENRES.map(genre => {
                    return (
                        <button className="genreButtons" key={genre} onClick = {e => handleClick(e, "value")} value = {genre}>{genre}</button>
                    )
                })}
                
            </ul>

            <h4>Genres Selected {userPrefs.genre}</h4>


        </div>
    )
    }
export default Genres