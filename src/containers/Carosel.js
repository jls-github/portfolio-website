import React from 'react';
import SeattlePicture from '../images/SeattlePicture.jpg';

const Carosel = () => {

    let backgroundProperties = {
      backgroundImage: `url(${SeattlePicture})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }

    return <div className="carosel">
        <div className="carosel-image" style={ backgroundProperties }></div>
        <div className="carosel-header">
          <div className="carosel-title">John Souza</div>
          <div className="carosel-subtitle">Creating software to build business in the Seattle Metro Area</div>
        </div>
    </div>
};

export default Carosel;