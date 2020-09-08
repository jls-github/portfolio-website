import React from 'react';
import SeattlePicture from '../images/SeattlePicture.jpg';

const Carosel = () => {

    let backgroundProperties = {
      backgroundImage: `url(${SeattlePicture})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }

    return <div className="carosel">
        <div className="carosel-image" style={ backgroundProperties }>
          <div className="carosel-image-overlay"></div>
        </div>
    </div>
};

export default Carosel;