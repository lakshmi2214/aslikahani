import React from 'react';
import logosmall from "../images/Rectangle.svg";

function LogoColumn() {
  return (
    <nav>
      <div className='container'>
        <div className='header-main'>
          <div className='grid-view-card'>
            <div className='logo-img'>
              <a href='/'><img src={logosmall} className="img-fluid" alt="logo" ></img></a>
              <h2>Asli <span>Kahani</span></h2>
            </div>
          </div>
          <div className='banner-header'>
            <a href='https://stargoldcompany.com'><img className='img-fluid' src='https://media.aslikahani.com/advertisements/sristar_horizontal.jpg' alt="" /></a>
          </div>
        </div>
      </div>
    </nav >
  );
}

export default LogoColumn;
