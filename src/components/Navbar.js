import React, { useEffect } from 'react';

const Navbar = (props) => {

    const {activePage, onSetActive} = props

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

    let navBarDisplay = () => {return <ul className="black-style">
        <li className="active-li">Home</li>
        <li onClick={(e) => onClickProjects(e)}>Projects</li>
        <li onClick={(e) => onClickContact(e)}>Contact</li>
        {/* add the following in as buttons
        <li>Blog</li>
        <li>Github</li>
        <li>LinkedIn</li>
        <li>Resume</li> */}
        </ul>
    }

    useEffect(() => {
        switch(activePage){
            case("HOME"):
                navBarDisplay = (
                    <ul className="black-style">
                        <li className="active-li">Home</li>
                        <li onClick={(e) => onClickProjects(e)}>Projects</li>
                        <li onClick={(e) => onClickContact(e)}>Contact</li>
                        {/* add the following in as buttons
                        <li>Blog</li>
                        <li>Github</li>
                        <li>LinkedIn</li>
                        <li>Resume</li> */}
                  </ul>
                )
            case("PROJECTS"):
                navBarDisplay = (
                    <ul className="white-style">
                        <li onClick={(e) => onClickHome(e)}>Home</li>
                        <li className="active-li">Projects</li>
                        <li onClick={(e) => onClickContact(e)}>Contact</li>
                        {/* add the following in as buttons
                        <li>Blog</li>
                        <li>Github</li>
                        <li>LinkedIn</li>
                        <li>Resume</li> */}
                    </ul>
                )
            case("CONTACT"):
                navBarDisplay = (
                    <ul className="black-style">
                        <li onClick={(e) => onClickHome(e)}>Home</li>
                        <li onClick={(e) => onClickProjects(e)}>Projects</li>
                        <li className="active-li">Contact</li>
                        {/* add the following in as buttons
                        <li>Blog</li>
                        <li>Github</li>
                        <li>LinkedIn</li>
                        <li>Resume</li> */}
                      </ul>
                )
            default:
                navBarDisplay = (
                    <ul>
                        <li>Home</li>
                        <li>Projects</li>
                        <li>Contact</li>
                        {/* add the following in as buttons
                        <li>Blog</li>
                        <li>Github</li>
                        <li>LinkedIn</li>
                        <li>Resume</li> */}
                    </ul>
                )
            }
        }, [activePage]
    )

    return <div className="navbar">
        {navBarDisplay()}
    </div>
};

export default Navbar;