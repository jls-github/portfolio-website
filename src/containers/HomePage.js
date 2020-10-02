import React, {useState} from 'react';
import ContactInformation from '../components/ContactInformation.js';
import ProjectContainer from './ProjectContainer.js';
import Navbar from '../components/Navbar.js';
import Carosel from './Carosel.js';


const HomePage = () => {

    const [activePage, setActivePage] = useState("HOME")

    const onSetActive = (page) => {
        setActivePage(page)
    }

    const displayPage = () => {
        switch(activePage) {
            case("HOME"):
                return <Carosel />
            case("PROJECTS"):
                return <ProjectContainer />
            case("CONTACT"):
                return <ContactInformation />
            default:
                return <div>Loading...</div>
        }
    }
    
    return (
    <div className="main">
        <Navbar activePage={activePage} onSetActive={(page) => onSetActive(page)}/>
        <Carosel />
        <ProjectContainer />
        <ContactInformation />
    </div>
    )
};

export default HomePage;