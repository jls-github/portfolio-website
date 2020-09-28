import React from 'react';


const Project = ({title, picture, description, liveSite, github}) => {

    return <div className="project">
        <div className="project-card">
            <div className="project-card-front">
                <div className="wrapper">
                    <img src={picture} alt=""/>
                </div>
                <div className="project-footer">
                    <div>{title}</div>
                </div>
            </div>
            <div className="project-card-back">
                <div>{description}</div>
                <div>{liveSite ? <a href={liveSite}>Live Site</a> : null}</div>
                <div><a href={github}>View on Github</a></div>
            </div>
        </div>
    </div>
};

export default Project;