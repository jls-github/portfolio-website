import React from 'react';
import ContactInformation from '../components/ContactInformation.js';
import ProjectContainer from './ProjectContainer.js';
import Navbar from '../components/Navbar.js';

const HomePage = () => {
    return <div className="main">
        <Navbar />
        {/* Replace this with a nice looking landing screen */}<div className="carosel">Home Page</div>
        <ProjectContainer />
        <ContactInformation />
    </div>
};

export default HomePage;