import React from 'react';
import ContactInformation from '../components/ContactInformation.js'
import ProjectContainer from './ProjectContainer.js'
import Navbar from '../components/Navbar.js'

const HomePage = () => {
    return <div>
        <Navbar />
        <h1>Home Page</h1>
        <ProjectContainer />
        <ContactInformation />
    </div>
};

export default HomePage;