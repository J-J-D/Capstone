import axios, {AxiosResponse} from "axios";
import React from "react";
import { Movie } from "../types/interfaces";
import { useState, useEffect} from "react";

const MovieDisplay = () => {
    const [movieTitle, setMovieTitle] = useState('');

    const getMovieData = () => {
        axios
        .get<Movie>('https://matinee-all-day.herokuapp.com/sessions/2')
        .then((response: AxiosResponse) => {
            console.log('Response: ', response.data)
            setMovieTitle(response.data.title)
        });
    };

    // const getMovieData = async () => {
    //     const movieResult: Movie = JSON.parse(await axios.get('https://matinee-all-day.herokuapp.com/sessions/2'));
    //     console.log(movieResult)
    // }

    return (
        <div className="movie-display">
            <h1 className="movie-title">
                {movieTitle}
            </h1>
            <button
            onClick={getMovieData}
            >
                show me a movie!
            </button>
        </div>
    );
};

export default MovieDisplay;


