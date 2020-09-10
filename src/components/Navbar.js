import React, {useState} from 'react';

const Navbar = () => {

    const [active, setActive] = useState("HOME")

    const onClickHome = e => {
        setActive("HOME")
    }

    const onClickProjects = e => {
        setActive("PROJECTS")
    }

    const onClickContact = e => {
        setActive("CONTACT")
    }


    const activeSwitch = () => {
        switch(active){
            case("HOME"):
                return(
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
                return(
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
                return(
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
                return(
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
    }

    return <div className="navbar">
        {activeSwitch()}
    </div>
};

export default Navbar;