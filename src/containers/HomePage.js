import React from 'react';
import ContactInformation from '../components/ContactInformation.js'
import ProjectContainer from './ProjectContainer.js'

const HomePage = () => {
    return <div>
        <h1>Home Page</h1>
        <ProjectContainer />
        <ContactInformation />
    </div>
};

export default HomePage;