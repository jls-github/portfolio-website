import React from 'react';
import SeattlePicture from '../images/SeattlePicture.jpg';
import CoffeeCodePicture from '../images/coffee-coding-picture.jpeg'

const Carosel = () => {

    return <div className="carosel">
      <div className="carosel-image-wrapper">
        <img src={ CoffeeCodePicture } alt="" className="carosel-image"></img>

      </div>
        <div className="carosel-header">
          <div className="carosel-title">John Souza</div>
          <div className="carosel-subtitle">Creating software to build business in the Seattle Metro Area</div>
        </div>
    </div>
};

export default Carosel;