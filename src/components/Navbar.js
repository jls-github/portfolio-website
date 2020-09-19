import React, { useEffect, useRef } from 'react';

const Navbar = (props) => {

    const {activePage, onSetActive} = props

    const homeRef = useRef(null)
    const projectsRef = useRef(null)
    const contactRef = useRef(null)

    const setActive = (page) => {
        onSetActive(page)
    }

    const onClickHome = e => {
        setActive("HOME")
    }

    const onClickProjects = e => {
        setActive("PROJECTS")
    }

    const onClickContact = e => {
        setActive("CONTACT")
    }
    
    useEffect(() => {
        switch(activePage){
            case("HOME"):
                homeRef.current.classList.add("active-li")
                projectsRef.current.classList.remove("active-li")
                contactRef.current.classList.remove("active-li")
                break
            case("PROJECTS"):
                homeRef.current.classList.remove("active-li")
                projectsRef.current.classList.add("active-li")
                contactRef.current.classList.remove("active-li")
                break
            case("CONTACT"):
                homeRef.current.classList.remove("active-li")
                projectsRef.current.classList.remove("active-li")
                contactRef.current.classList.add("active-li")
                break
            default:
                break
        }
        }, [activePage]
    )

    return <div className="navbar">
        <ul>
            <li ref={homeRef} onClick={(e) => onClickHome(e)} className="active-li">Home</li>
            <li ref={projectsRef} onClick={(e) => onClickProjects(e)}>Projects</li>
            <li ref={contactRef} onClick={(e) => onClickContact(e)}>Contact</li>
            {/* add the following in as buttons
            <li>Blog</li>
            <li>Github</li>
            <li>LinkedIn</li>
            <li>Resume</li> */}
        </ul>
    </div>
};

export default Navbar;