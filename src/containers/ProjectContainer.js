import React, {useState} from 'react';
import Project from '../components/Project.js';
import CoffeeCodingPicture from '../images/coffee-coding-picture.jpeg';

const ProjectContainer = () => {

    const [projects, setProjects] = useState(["", "", "", "", "", "", "", ""])

    const populateProjects = () => {
        return projects.map(project => {
            return <Project />
        })
    }

    return <div className="projectContainer">
        <div className="project-header">
            <div className="project-image">
                <div className="project-image-overlay"></div>
                <img src={CoffeeCodingPicture} alt=""/>
            </div>
            <h2>Projects</h2>
        </div>
        <div className="projectFlexBox">
            {projects ? populateProjects() : null}

        </div>
    </div>
};

export default ProjectContainer;