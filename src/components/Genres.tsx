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
        <div className="pink-background">
            <h3 className="pink-background">Choose any genre or subgenres.  Click Next to skip</h3>
            <ul className="pink-background">
                {TMDB_GENRES.map(genre => {
                    let genreButtonId: string = `${genre}-button`
                    return (
                        <>
                        <input type="checkbox" className="preferance-buttons btn-check" key={genre} id={genreButtonId} autoComplete="off" onClick ={e => handleClick(e, "value")} value={genre}></input>
                        <label className="preferance-buttons btn btn-primary" htmlFor={genreButtonId}>{genre}</label>
                        </>

                    )
                })} 
            </ul>
            <h4 className="pink-background">Genres Selected {userPrefs.genre}</h4>
        </div>
    )
    }
export default Genres