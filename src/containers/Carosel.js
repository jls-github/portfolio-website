import React from 'react';
import SeattlePicture from '../images/SeattlePicture.jpg'

const Carosel = () => {
    return <div className="carosel">
        <div className="carosel-overlay">
          <img className="carosel-image" src={SeattlePicture} alt=""/>
        </div>
        
    </div>
};

export default Carosel;