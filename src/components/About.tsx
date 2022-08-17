import React from "react";

interface AboutProps{backToApp:  () => void}


const About = (props: AboutProps) => {




    return (
        <div className="col d-flex justify-content-center">
            <div className="about-card" style={{height: "35rem"}}>
                <div className="card preferance-cards d-flex align-items-center justify-content-center">
                    <div className="card about-paragraph">
                        <p className="transparent-background">
                        Matinee All Day is the Capstone Project for <a href="https://github.com/amelntamark" target='_blank' rel="noreferrer">Amel Ntamark</a> and <a href='https://github.com/J-J-D' target='_blank' rel="noreferrer">Jodi Denney</a>, graduates of Ada Developers Academy Cohort 17. This project was timeboxed to 3 weeks. The app was deployed through Heroku and uses a React/Typescript frontend to allow users to enter preferences for what type of movie they would like to see. The backend, utilizing a Python/Flask framework, makes a public API call to <a href='https://developers.themoviedb.org/3/getting-started/introduction' target='_blank' rel="noreferrer">TMDB</a>  and obtains up to 200 films that match the user preferences. 
                        <br/>
                        <br/>
                        Users can access a lightweight login feature by entering a username. The app will track which films the user reports as having already seen and will filter out those titles from future recommendations. User, session, and temporary movie information are held in a PostgreSQL database. Project organization and assignments were maintained on  <a href='https://trello.com/b/OZob7lcI/matinee-all-day' target='_blank' rel="noreferrer"> Trello</a>.
                        <br/>
                        <br/>
                        Ada Developers Academy is an intensive full-stack software engineering program covering :<br/>
                        Python, JavaScript, React, Git, RESTful APIs, PostgreSQL, HTML, CSS, Test Driven Development, OOP, data structures, algorithms, and design patterns.
                        <br/>
                        <br/>
                        This product uses the TMDB API but is not endorsed or certified by TMDB. <img alt="The Movie Database Logo" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" className="transparent-background tmdb-logo"></img>
                            </p>
                    </div>
                    <button className="preferance-buttons page-turn-buttons" onClick={props.backToApp}>Back to App</button>
                </div>
            </div>
        </div>
        
    )
}

export default About