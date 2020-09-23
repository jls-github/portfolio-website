import React, {useState} from 'react';
import Project from '../components/Project.js';
import CoffeePicture from '../images/CoffeePicture.jpg'

const ProjectContainer = () => {

    const [projects, setProjects] = useState([
        {title: "Soundside Mobile", picture: CoffeePicture}, 
        {title: "Flatchat", picture: CoffeePicture}, 
        {title: "Dwellingly", picture: CoffeePicture}
    ])

    const populateProjects = () => {
        return projects.map(project => {
            return <Project title={project.title} picture={project.picture}/>
        })
    }



    return <div className="framed-wrapper project-wrapper">
        <h2>My Work</h2>
        <div className="project-container">
            {populateProjects()}
        </div>

    </div>
};

export default ProjectContainer;