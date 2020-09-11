import React, { useEffect, useRef } from 'react';

const Navbar = (props) => {

    const {activePage, onSetActive} = props

    const homeRef = useRef(null)
    const projectsRef = useRef(null)
    const contactRef = useRef(null)
    const ulRef = useRef(null)

    console.log(props)

    const setActive = (page) => {
        console.log(props)
        console.log(page)
        props.onSetActive(page)
    }

    const onClickHome = e => {
        setActive("HOME")
        console.log("clicked")
    }

    const onClickProjects = e => {
        console.log("clicked")
        setActive("PROJECTS")

    }

    const onClickContact = e => {
        setActive("CONTACT")
        console.log("clicked")

    }
    
    useEffect(() => {
        switch(activePage){
            case("HOME"):
                ulRef.current.classList.remove("white-style")
                ulRef.current.classList.add("black-style")
                homeRef.current.classList.add("active-li")
                projectsRef.current.classList.remove("active-li")
                contactRef.current.classList.remove("active-li")
                break
            case("PROJECTS"):
                ulRef.current.classList.remove("black-style")
                ulRef.current.classList.add("white-style")
                homeRef.current.classList.remove("active-li")
                projectsRef.current.classList.add("active-li")
                contactRef.current.classList.remove("active-li")
                break
            case("CONTACT"):
                ulRef.current.classList.remove("white-style")
                ulRef.current.classList.add("black-style")
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
        <ul className="black-style" ref={ulRef}>
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