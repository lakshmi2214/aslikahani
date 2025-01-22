import React, { useState, useEffect } from 'react';
// import logosmall from "../images/logo-round.png";
import logosmall from "../images/logo-small.jpg";
// import Translator from './Translator';
// import Search from '../Utility/Search';
// import { useNavigate } from 'react-router-dom';
// import BannerAd2 from "../Advertisements/BannerAd2";

function LogoColumn() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  // const navigate = useNavigate();

  // const handleNavigation = (item) => {
  //   console.log(item);
  //   // item value should be equal to the keyword being serarched.
  //   navigate(`/search/${item}`);
  // };
  // const [article, setAricle] = useState([]);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const optionsDate = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const optionsTime = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };

  const formattedDate = currentDateTime.toLocaleString(undefined, optionsDate);
  const formattedTime = currentDateTime.toLocaleString(undefined, optionsTime);

  return (
    // <div>
    //   <div className='col-md-4 dateTime'>
    //     <p className='date'>{formattedDate}</p>
    //     <p className='time'>{formattedTime} |<span className='pointer'>  Explore Trending Articles </span></p>
    //   </div>
    //   <div className='col-sm-4 logo' style={{ textAlign: "center" }}>
    //     <a href='/'>
    //       <img src={logosmall} className="navlogo" alt="logo" ></img></a>
    //   </div>
    //   <div className='col-md-4 span'>

    //     <Search onSearch={handleNavigation} />


    //   </div>
    // </div>
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
            <img className='img-fluid' src='https://media.aslikahani.com/advertisements/sristar_horizontal.jpg' />
          </div>
        </div>
      </div>
    </nav >
  );
}

export default LogoColumn;
