import React, {useState} from 'react';
import Project from '../components/Project.js';

const ProjectContainer = () => {

    const [projects, setProjects] = useState(["", "", ""])

    const populateProjects = () => {
        return projects.map(project => {
            return <Project />
        })
    }



    return <div className="framed-wrapper project-wrapper">
        <h2>My Work</h2>
        {populateProjects()}

    </div>
};

export default ProjectContainer;