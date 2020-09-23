import React, {useState} from 'react';
import Project from '../components/Project.js';

const ProjectContainer = () => {

    const [projects, setProjects] = useState([{title: "Soundside Mobile"}, {title: "Flatchat"}, {title: "Dwellingly"}])

    const populateProjects = () => {
        return projects.map(project => {
            return <Project title={project.title}/>
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