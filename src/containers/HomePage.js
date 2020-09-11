import React, {useState} from 'react';
import ContactInformation from '../components/ContactInformation.js';
import ProjectContainer from './ProjectContainer.js';
import Navbar from '../components/Navbar.js';
import Carosel from './Carosel.js'

const HomePage = () => {

    const [activePage, setActivePage] = useState("HOME")

    const onSetActive = (page) => {
        setActivePage(page)
    }
    
    return <div className="main">
        <Navbar activePage={activePage} onSetActive={(page) => onSetActive(page)}/>
        <Carosel />
        <ProjectContainer />
        <ContactInformation />
    </div>
};

export default HomePage;