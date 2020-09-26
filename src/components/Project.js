import React from 'react';


const Project = ({title, picture}) => {

    return <div className="project">
        <div className="project-card">
            <div className="project-card-front">
                <div className="wrapper">
                    <img src={picture} alt=""/>
                </div>x`
                <div className="project-footer">
                    <div>{title}</div>
                </div>
            </div>
            <div className="project-card-back"></div>
        </div>
    </div>
};

export default Project;