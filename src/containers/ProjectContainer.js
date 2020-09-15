import React, {useState} from 'react';
import Project from '../components/Project.js';
import CoffeeCodingPicture from '../images/coffee-coding-picture.jpeg';
import CodePicture from '../images/code-picture.jpg';
import SeattlePicture from '../images/SeattlePicture.jpg';
import CoffeePicture from '../images/CoffeePicture.jpg';


const ProjectContainer = () => {

    const [projects, setProjects] = useState(["", "", "", ""])

    const populateProjects = () => {
        return projects.map(project => {
            return <Project />
        })
    }

    const backgroundProperties = (picture) => {
        return {       
            backgroundImage: `url(${picture})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }
      }


    return <div className="projectContainer">
        <div className="project-background-left">
            <div className="project-section-picture" style={ backgroundProperties(CoffeePicture)}></div>
            <div className="project-header">
                <div className="project-header-text">
                    <h2>See My Work</h2>
                </div>
            </div>
            <div className="projectFlexBoxWrapper">
                <div className="projectFlexBox">
                    {projects ? populateProjects() : null}

                </div>
            </div>

        </div>
        <div className="project-background-right-top">
            <div className="project-section-picture" style={ backgroundProperties(CodePicture)}></div>
            Maybe put one project here
            Or a tech stack section
        </div>
        <div className="project-background-right-bottom">
            <div className="project-section-picture" style={ backgroundProperties(SeattlePicture)}></div>
            And another here?
            Or an About Me Section
        </div>

    </div>
};

export default ProjectContainer;