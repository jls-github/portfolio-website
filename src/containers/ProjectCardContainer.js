import React, {useState} from 'react';
import Project from '../components/ProjectCard.js';
import CoffeePicture from '../images/CoffeePicture.jpg'
import SoundsideIcon from '../images/Soundside_Mark.png'
import DwellinglyIcon from '../images/Dwellingly_Logo.png'

const ProjectContainer = () => {

    const [projects, setProjects] = useState([
        {title: "Soundside Mobile", frontPicture: CoffeePicture, backPicture: SoundsideIcon,description: "Digital worship guide and connection card allowing Soundside Church in Tacoma, WA to minimize COVID-19 spread", liveSite: "https://soundsidechurch.netlify.app", github: "https://github.com/jls-github/flatchat_frontend"},
        {title: "Flatchat", frontPicture: CoffeePicture, backPicture: DwellinglyIcon,description: "Real time chat application allowing multiple users to join a chat room and send messages without page reload", liveSite: "https://ecstatic-swartz-aca3e4.netlify.app/", github: "https://github.com/jls-github/flatchat_frontend"}, 
        {title: "Dwellingly", frontPicture: CoffeePicture, backPicture: CoffeePicture,description: "Canvas-like Ruby on Rails application that facilitates lesson management and test-taking for teachers and students.", liveSite: "", github: "https://github.com/jls-github/school_central"}
    ])

    const populateProjects = () => {
        return projects.map(project => {
            return <Project 
            title={project.title} 
            frontPicture={project.frontPicture}
            backPicture={project.backPicture}
            description={project.description}
            liveSite={project.liveSite}
            github={project.github}
            />
        })
    }



    return <div className="framed-wrapper project-wrapper">
        <div className="wrapper">
            <h2>My Work</h2>
        </div>
        <div className="project-container">
            {populateProjects()}
        </div>

    </div>
};

export default ProjectContainer;