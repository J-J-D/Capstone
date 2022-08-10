import axios, {AxiosResponse} from "axios";
import React from "react";
import { Movie } from "../types/interfaces";
import { useState, useEffect} from "react";

interface MovieDisplayProps {
    sessionId: number,
    movieRec: Movie,
    setMovieRec: React.Dispatch<React.SetStateAction<{
        id: number;
        overview: string;
        poster: string;
        release_date: string;
        title: string}
        >>,
};

const MovieDisplay = (props: MovieDisplayProps) => {
    // const [movieDetails, setMovieDetails] = useState<Movie>(props.movieRec);
    const movieDetails = props.movieRec
    console.log("This is the movieDeatils in Movie Display " + movieDetails)
    const [overviewVisibility, setOverviewVisibility] = useState(false);
    // console.log("The movie rec is " + props.movieRec)
    console.log(`Movie details: ${movieDetails.title}, ${movieDetails.poster}`)

    // Make call to MAD backend for a random movie recommendation
    const getMovieData = () => {
        axios
        .get<Movie>(`https://matinee-all-day.herokuapp.com/sessions/${props.sessionId}`)
        .then((response: AxiosResponse) => {
            props.setMovieRec(response.data)
        })
        .catch((error => {
            console.log(`an error occured. details: ${error}`)
        }));
        console.log(movieDetails)
    };

    // Hide or reveal overview of the plot
    const toggleOverviewVisibility = () => {
        setOverviewVisibility(!overviewVisibility)
    };

    const backToInput = () =>
    props.setMovieRec({id: 0, overview: "",
        poster: "",
        release_date: "",
        title: ""})


    if (movieDetails.id !== undefined && overviewVisibility === false) {
        // Movie rec has been received and the plot description is hidden
        return (
            <div className="movie-display align-items-center container">
                <h1 className="movie-details">
                    {movieDetails?.title}
                </h1>
                <p className="movie-details">
                    {movieDetails?.release_date.slice(0, 4)}
                </p>
                <img
                src={`https://image.tmdb.org/t/p/w185${movieDetails.poster}`}
                alt={`Movie poster for ${movieDetails.title} retrieved from The Movie Database`}
                ></img>
                <br></br>
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
                <button onClick = {backToInput}>
                    Start Your Search Over
                </button>
            </div>
        );
    } else if (movieDetails !== undefined && overviewVisibility === true) {
        // Movie rec has been received and the plot description is visible
        return (
            <div className="movie-display align-items-center container">
                <h1 className="movie-details">
                    {movieDetails?.title}
                </h1>
                <p className="movie-details">
                    {movieDetails?.release_date.slice(0, 4)}
                </p>
                <img
                src={`https://image.tmdb.org/t/p/w185${movieDetails.poster}`}
                alt={`Movie poster for ${movieDetails.title} retrieved from The Movie Database`}
                ></img>
                <p className="movie-details">
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
                <button onClick = {backToInput}>
                    Start Your Search Over
                </button>
            </div>
        );
    } else {
        // If movie details are not defined
        return (
            <>
                <div className="Error-Message">
                    <p>woops! something went wrong :/</p>
                </div>
            </>
        )
    }

};

export default MovieDisplay;


