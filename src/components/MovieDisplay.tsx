import axios, {AxiosResponse} from "axios";
import React from "react";
import { Movie } from "../types/interfaces";
import { useState, useEffect} from "react";

const MovieDisplay = () => {
    // const [movieTitle, setMovieTitle] = useState('');
    const [movieDetails, setMovieDetails] = useState<Movie>();

    const getMovieData = () => {
        axios
        .get<Movie>('https://matinee-all-day.herokuapp.com/sessions/2')
        .then((response: AxiosResponse) => {
            console.log(response.data)
            setMovieDetails(response.data)
        })
        .catch((error => {
            console.log(`an error occured. details: ${error}`)
        }));
    };

    return (
        <div className="movie-display">
            <h1 className="movie-title">
                {/* {movieDetails} */}
                {movieDetails?.title}
            </h1>
            <p>
                {movieDetails?.release_date.slice(0, 4)}
            </p>
            <p>
                {movieDetails?.overview}
            </p>
            <button
            onClick={getMovieData}
            >
                show me a movie!
            </button>
        </div>
    );
};

export default MovieDisplay;


