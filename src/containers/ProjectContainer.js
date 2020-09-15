import React, {useState} from 'react';
import Project from '../components/Project.js';
import CoffeeCodingPicture from '../images/coffee-coding-picture.jpeg';
import CodePicture from '../images/code-picture.jpg';

const ProjectContainer = () => {

    const [projects, setProjects] = useState(["", "", "", ""])

    const populateProjects = () => {
        return projects.map(project => {
            return <Project />
        })
    }

    let backgroundProperties = {
        backgroundImage: `url(${CodePicture})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }


    return <div className="projectContainer">
        <div className="project-background-left">
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
        <div className="project-background-right-top">
            Maybe put one project here
            Or a tech stack section
        </div>
        <div className="project-background-right-bottom">
            And another here?
            Or an About Me Section
        </div>

    </div>
};

export default ProjectContainer;