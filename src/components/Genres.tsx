import React from "react";
// import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";
import { UserPrefs } from "../types/interfaces";


interface GenresProps {userPrefs: UserPrefs, setUserPrefs: React.Dispatch<React.SetStateAction<UserPrefs>>} 


const Genres = (props: GenresProps) => {
    const {userPrefs, setUserPrefs} = props

    const handleClick = async (e: React.SyntheticEvent, value: string) => {
        const target = e.target as HTMLButtonElement;
        let selectedGenre = target.value;

        // If genre clicked not in preferences, add it. If it is, remove it.
        if (userPrefs.genre.some((genre) => {return genre === selectedGenre})) {
            const newGenrePrefs = userPrefs.genre.filter(genre => selectedGenre !== genre);
            setUserPrefs({...userPrefs, genre: newGenrePrefs});
        } else {
            userPrefs.genre.push(selectedGenre)
            setUserPrefs({...userPrefs, genre: userPrefs.genre})
        }
    };

    const TMDB_GENRES = ["Action", "Adventure", "Animation", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "History", "Horror", "Music", "Mystery", "Romance", "SciFi", "Thriller", "War", "Western"]

       

    return (
        <div className="transparent-background container">
            <h2 className="input-title transparent-background">What genre are you in the mood for?</h2>
            <h4 className="transparent-background question-explanation">You can select multiple genres, or click Next to get a movie from any genre.</h4>
            <ul className="transparent-background button-list">
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
        </div>
    )
    }
export default Genres