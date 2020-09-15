import React, {useState} from 'react';
import Project from '../components/Project.js';
import CodePicture from '../images/code-picture.jpg';

const ProjectContainer = () => {

    const [projects, setProjects] = useState(["", "", "", ""])

    const populateProjects = () => {
        let i = -1;
        return projects.map(project => {
            i++
            return <Project side={i < projects.length/2 ? "left-side-project" : "right-side-project"}/>
        })
    }

    let backgroundProperties = {
        backgroundImage: `url(${CodePicture})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }


    return <div className="projectContainer">
        <div className="project-background-left"></div>
        <div className="project-background-right"></div>

        <div className="project-header">
            <div className="project-header-text">
                <h2>Projects</h2>
            </div>
        </div>
        <div className="projectFlexBoxWrapper">
            <div className="projectFlexBox">
                {projects ? populateProjects() : null}

            </div>
        </div>
    </div>
};

export default ProjectContainer;