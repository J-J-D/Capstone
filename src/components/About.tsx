import React from "react";

// interface AboutProps{backToApp:  () => void}


const About = () => {

    return (
        <div>
            <p className= 'aboutParagraph'>
        Matinee All Day is the Capstone Project for Amel Ntamark and Jodi Denney, graduates of Ada Devlopers Academy Cohort 17.  The app was deployed through Heroku and uses a React Typescript frontend to allow users to enter preferences for what type of movie they would like to see.  The backend, utilizing a Python Flask framework, makes the public API call to <a href='https://developers.themoviedb.org/3/getting-started/introduction' target='_blank' rel="noreferrer">TMDB</a>  and returns up to 200 films that match the user preferences. Users can login and the app will track which films the user reports they have already seen and filters out those titles from future recomendations.  User, session and temporary movie information are held in a postgres database. Project organization and assignments were maintained on  <a href='https://trello.com/b/OZob7lcI/matinee-all-day' target='_blank' rel="noreferrer"> Trello</a>.
        <br/>
        <br/>
        Ada Developers Academy is an intensive full-stack software engineering program covering :<br/>
        Python, JavaScript, React, Git, RESTful APIs, PostgreSQL, HTML, CSS, Test Driven Development, OOP, data structures, algorithms, and design patterns.
            </p>
        {/* <button onClick={props.backToApp}>Back to App</button> */}
            
        </div>
        
    )
}

export default About