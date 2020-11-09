import React, {useRef} from 'react';


const Project = ({title, frontPicture, backPicture, description, liveSite, github}) => {


    const projectRef = useRef(null)

    const setProjectFlipClass = (event) => {
        event.preventDefault()
        projectRef.current.classList.add("project-card-hover")
    }

    const removeProjectFlipClass = (event) => {
        event.preventDefault()
        projectRef.current.classList.remove("project-card-hover")
    }

    return <div className="project" onMouseEnter={setProjectFlipClass} onMouseLeave={removeProjectFlipClass}>
        <div className="project-card" ref={projectRef}>
            <div className="project-card-front">
                <div className="wrapper">
                    <img src={frontPicture} alt=""/>
                </div>
                <div className="project-footer">
                    <div>{title}</div>
                </div>
            </div>
            <div className="project-card-back">
                <div className="project-card-back-info">
                    <div className="wrapper card-back-image">
                        <img src={backPicture} alt="" />
                    </div>
                    <div className="project-info">
                        <div className="project-description">{description}</div>
                        <div className="project-site">{liveSite ? <a href={liveSite}>Live Site</a> : null}</div>
                        <div className="project-github"><a href={github}>Github</a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
};

export default Project;