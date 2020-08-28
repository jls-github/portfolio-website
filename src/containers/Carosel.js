import React from 'react';
import SeattlePicture from '../images/SeattlePicture.jpg'

const Carosel = () => {
    return <div className="carosel">
        <div className="carosel-overlay"></div>
        <img className="carosel-image" src={SeattlePicture} alt=""/>
        
    </div>
};

export default Carosel;