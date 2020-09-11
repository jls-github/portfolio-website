import React from 'react';
import CodePicture from '../images/code-picture.jpg';


const Project = () => {


    let backgroundProperties = {
        backgroundImage: `url(${CodePicture})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }

    return <div className="project">
        <div className="project-picture" style={backgroundProperties}></div>
        <div className="project-picture-overlay"></div>
        <div className="project-card-text">

            <h3>Project Name</h3>
            <p>Project description</p>
            <p>Project Link</p>
            <p>Project video demo</p>
        </div>
    </div>
};

export default Project;