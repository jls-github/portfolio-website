import React from 'react';
import PortfolioPicture from '../images/John_Souza.jpeg'
import WallPicture from '../images/wall.jpg';
import PaperTexture from '../images/paper_texture_5.jpg';

const Carosel = () => {


    return <div className="carosel-container">

        <img className="background-picture" src={WallPicture} alt=""/>
        <div className="frame">
            <img className="paper-texture-image" src={PaperTexture} alt=""/>
          <div className="framed-wrapper">
              <div className="carosel-header">
                <div className="carosel-title">John Souza</div>
                <div className="carosel-subtitle">Creating software to build business in the Seattle Metro Area</div>
              </div>
              <div class="carosel-image"><img src={PortfolioPicture} alt=""/></div>
          </div>
        </div>
      </div>
    
};

export default Carosel;