import React, {useState} from 'react';
import ContactInformation from '../components/ContactInformation.js';
import ProjectCardContainer from './ProjectCardContainer.js';
import Navbar from '../components/Navbar.js';
import Carosel from './Carosel.js';
import WallPicture from '../images/wall.jpg';
import ProjectData from '../data/ProjectData.js';

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
                return <ProjectCardContainer />
            case("CONTACT"):
                return <ContactInformation />
            default:
                return <div>Loading...</div>
        }
    }
    
    return (
    <div className="main">
        <img className="background-picture" src={WallPicture} alt=""/>
        <Navbar activePage={activePage} onSetActive={(page) => onSetActive(page)}/>
        <div className="frame">
            {displayPage()}
        </div>
    </div>
    )
};

export default HomePage;