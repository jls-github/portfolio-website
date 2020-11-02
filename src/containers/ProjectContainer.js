import React from 'react';
import ProjectData from '../data/ProjectData.js';
import Project from '../components/Project';

const ProjectContainer = () => {

    const projectDivs = () => {
        return ProjectData.map(project => {
            return <Project {...project} />
        })
    }

    return (
        <div>

        </div>
    )
}

export default ProjectContainer