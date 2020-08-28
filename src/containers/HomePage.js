import React from 'react';
import ContactInformation from '../components/ContactInformation.js';
import ProjectContainer from './ProjectContainer.js';
import Navbar from '../components/Navbar.js';
import Carosel from './Carosel.js'

const HomePage = () => {
    return <div className="main">
        <Navbar />
        <Carosel />
        <ProjectContainer />
        <ContactInformation />
    </div>
};

export default HomePage;