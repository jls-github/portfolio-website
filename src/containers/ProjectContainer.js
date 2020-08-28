import React, {useState} from 'react';
import Project from '../components/Project.js';

const ProjectContainer = () => {

    const [projects, setProjects] = useState(["", ""])

    const populateProjects = () => {
        return projects.map(project => {
            return <Project />
        })
    }

    return <div className="projectContainer">
        <h2>Projects</h2>
        {projects ? populateProjects() : null}
    </div>
};

export default ProjectContainer;