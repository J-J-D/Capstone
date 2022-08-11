import React from "react";

interface AboutProps{backToApp:  () => void}


const About = (props: AboutProps) => {




    return (
        <div>
        This is where we will put all the info about our tech stack and a link to 
        <a href='https://trello.com/b/OZob7lcI/matinee-all-day'>Trello</a>
        <button onClick={props.backToApp}>Back to App</button>
        </div>
        
    )
}

export default About