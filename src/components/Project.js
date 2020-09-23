import React from 'react';


const Project = ({title, picture}) => {

    return <div className="project">
        <div className="wrapper">
            <img src={picture} alt=""/>
        </div>

        <div className="project-footer">
            <div>{title}</div>
        </div>
    </div>
};

export default Project;