import React, {useState} from 'react';
import ContactInformation from '../components/ContactInformation.js';
import ProjectContainer from './ProjectContainer.js';
import Navbar from '../components/Navbar.js';
import Carosel from './Carosel.js';
import WallPicture from '../images/wall.jpg';
import PaperTexture from '../images/paper_texture_5.jpg';

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
        <img className="background-picture" src={WallPicture} alt=""/>
        <Navbar activePage={activePage} onSetActive={(page) => onSetActive(page)}/>
        <div className="frame">
            <img className="paper-texture-image" src={PaperTexture} alt=""/>

            {displayPage()}
        </div>
    </div>
    )
};

export default HomePage;