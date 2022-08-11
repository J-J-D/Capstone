import axios, {AxiosResponse} from "axios";
import React from "react";
import { Movie } from "../types/interfaces";
import { useState, useEffect} from "react";
import "./MovieDisplay.scss"

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
            <div className="col d-flex justify-content-center">
                <div className="movie-display align-items-center card w-75">
                    <h1 className="pink-background">{movieDetails?.title} </h1>
                    <p className="pink-background">({movieDetails?.release_date.slice(0, 4)})</p>
                    <img
                    src={`https://image.tmdb.org/t/p/w185${movieDetails.poster}`}
                    alt={`Movie poster for ${movieDetails.title} retrieved from The Movie Database`}
                    ></img>
                    <br></br>
                    <button
                    className="preferance-buttons page-turn-buttons"
                    onClick={toggleOverviewVisibility}
                    >
                        Reveal plot description
                    </button>
                    <br></br>
                    <button
                    className="preferance-buttons page-turn-buttons"
                    onClick={getMovieData}
                    >
                        Show me a different movie!
                    </button>
                    <button 
                    className="preferance-buttons page-turn-buttons"
                    onClick = {backToInput}>
                        Start your search over
                    </button>
                </div>
            </div>
        );
    } else if (movieDetails !== undefined && overviewVisibility === true) {
        // Movie rec has been received and the plot description is visible
        return (
            <div className="col d-flex justify-content-center">
                <div className="movie-display align-items-center card w-75">
                    <h1 className="pink-background">{movieDetails?.title} </h1>
                    <p className="pink-background">({movieDetails?.release_date.slice(0, 4)})</p>
                    <img
                    src={`https://image.tmdb.org/t/p/w185${movieDetails.poster}`}
                    alt={`Movie poster for ${movieDetails.title} retrieved from The Movie Database`}
                    ></img>
                    <p className="pink-background overview align-items-center">
                        {movieDetails.overview}
                    </p>
                    <button
                    className="preferance-buttons page-turn-buttons"
                    onClick={toggleOverviewVisibility}
                    >
                        Hide plot description
                    </button>
                    <br></br>
                    <button
                    className="preferance-buttons page-turn-buttons"
                    onClick={getMovieData}
                    >
                        Show me a different movie!
                    </button>
                    <button 
                    className="preferance-buttons page-turn-buttons"
                    onClick = {backToInput}>
                        Start your search over
                    </button>
                </div>
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


