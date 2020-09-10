import React, {useState} from 'react';

const Navbar = () => {

    const [active, setActive] = useState("HOME")

    return <div className="navbar">
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
    </div>
};

export default Navbar;