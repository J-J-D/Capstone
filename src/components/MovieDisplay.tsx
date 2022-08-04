import axios, {AxiosResponse} from "axios";
import React from "react";
import { Movie } from "../types/interfaces";
import { useState, useEffect} from "react";

// TODO: return poster; create button for user to add movie to seen list
// Should this be broken into smaller components? 

const MovieDisplay = () => {
    const [movieDetails, setMovieDetails] = useState<Movie>();
    const [overviewVisibility, setOverviewVisibility] = useState(false);

    // Make call to MAD backend for a random movie recommendation
    const getMovieData = () => {
        axios
        .get<Movie>('https://matinee-all-day.herokuapp.com/sessions/2')
        .then((response: AxiosResponse) => {
            setMovieDetails(response.data)
            console.log(movieDetails?.poster)
        })
        .catch((error => {
            console.log(`an error occured. details: ${error}`)
        }));
    };

    // Hide or reveal overview of the plot
    const toggleOverviewVisibility = () => {
        setOverviewVisibility(!overviewVisibility)
    };


    if (movieDetails === undefined) { 
        // No movie rec has been received yet
        return (
            <div className="movie-display">
                <button
                onClick={getMovieData}
                >
                    show me a movie!
                </button>
            </div>
        );
    } else if (movieDetails !== undefined && overviewVisibility === false) {
        // Movie rec has been received and the plot description is hidden
        return (
            <div className="movie-display">
                <h1 className="movie-title">
                    {movieDetails?.title}
                </h1>
                <img
                src={`https://image.tmdb.org/t/p/w185${movieDetails.poster}`}
                alt={`Movie poster for ${movieDetails.title} retrieved from The Movie Database`}
                ></img>
                <p>
                    {movieDetails?.release_date.slice(0, 4)}
                </p>
                <button
                onClick={toggleOverviewVisibility}
                >
                    reveal plot description
                </button>
                <br></br>
                <button
                onClick={getMovieData}
                >
                    show me a different movie!
                </button>
            </div>
        );
    } else {
        // Movie rec has been received and the plot description is visible
        return (
            <div className="movie-display">
                <h1 className="movie-title">
                    {movieDetails?.title}
                </h1>
                <p>
                    {movieDetails?.release_date.slice(0, 4)}
                </p>
                <img
                src={`https://image.tmdb.org/t/p/w185${movieDetails.poster}`}
                alt={`Movie poster for ${movieDetails.title} retrieved from The Movie Database`}
                ></img>
                <p>
                    {movieDetails.overview}
                </p>
                <button
                onClick={toggleOverviewVisibility}
                >
                    hide plot description
                </button>
                <br></br>
                <button
                onClick={getMovieData}
                >
                    show me a different movie!
                </button>
            </div>
        );
    }
};

export default MovieDisplay;


