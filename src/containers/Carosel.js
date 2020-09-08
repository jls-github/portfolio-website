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
        <div className="carosel-overlay" style={ backgroundProperties }>
        </div>
    </div>
};

export default Carosel;