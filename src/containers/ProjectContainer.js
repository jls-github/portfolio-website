import React, {useState} from 'react';
import Project from '../components/Project.js';
import CoffeePicture from '../images/CoffeePicture.jpg'

const ProjectContainer = () => {

    const [projects, setProjects] = useState([
        {title: "Soundside Mobile", picture: CoffeePicture, description: "Digital worship guide and connection card allowing Soundside Church in Tacoma, WA to minimize COVID-19 spread", liveSite: "https://soundsidechurch.netlify.app", github: "https://github.com/jls-github/flatchat_frontend"}, 
        {title: "Flatchat", picture: CoffeePicture, description: "Real time chat application allowing multiple users to join a chat room and send messages without page reload", liveSite: "https://ecstatic-swartz-aca3e4.netlify.app/", github: "https://github.com/jls-github/flatchat_frontend"}, 
        {title: "Dwellingly", picture: CoffeePicture, description: "Canvas-like Ruby on Rails application that facilitates lesson management and test-taking for teachers and students.", liveSite: "", github: "https://github.com/jls-github/school_central"}
    ])

    const populateProjects = () => {
        return projects.map(project => {
            return <Project 
            title={project.title} 
            picture={project.picture}
            description={project.description}
            liveSite={project.liveSite}
            github={project.github}
            />
        })
    }



    return <div className="project-wrapper">
        <h2>My Work</h2>
        <div className="project-container">
            {populateProjects()}
        </div>

    </div>
};

export default ProjectContainer;