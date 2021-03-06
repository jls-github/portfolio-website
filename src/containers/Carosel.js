import React from 'react';
import PortfolioPicture from '../images/John_Souza.jpeg'

const Carosel = () => {


    return <div className="framed-wrapper">
        <div className="carosel-header">
          <div className="carosel-title">John Souza</div>
          <div className="carosel-subtitle">Creating software to build business in the Seattle Metro Area</div>
        </div>
        <div class="carosel-image"><img src={PortfolioPicture} alt=""/></div>
    </div>
};

export default Carosel;