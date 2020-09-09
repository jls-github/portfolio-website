import React, {useState} from 'react';
import Project from '../components/Project.js';
import CoffeeCodingPicture from '../images/coffee-coding-picture.jpeg';

const ProjectContainer = () => {

    const [projects, setProjects] = useState(["", "", "", ""])

    const populateProjects = () => {
        return projects.map(project => {
            return <Project />
        })
    }

    let backgroundProperties = {
        backgroundImage: `url(${CoffeeCodingPicture})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }

    return <div className="projectContainer">
        <div className="project-header">
            <div className="project-image" style={backgroundProperties}></div>
            <div className="project-header-text">
                <h2>Projects</h2>
            </div>
        </div>
        <div className="projectFlexBox">
            {projects ? populateProjects() : null}

        </div>
    </div>
};

export default ProjectContainer;