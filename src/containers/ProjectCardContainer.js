import React, {useState} from 'react';
import Project from '../components/ProjectCard.js';
import ProjectData from '../data/ProjectData.js'

const ProjectContainer = () => {

    const [projects, setProjects] = useState(ProjectData)

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