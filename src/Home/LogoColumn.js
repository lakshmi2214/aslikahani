import React, { useState, useEffect } from 'react';
import logosmall from "../images/logo-small.jpg";

function LogoColumn() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    // Update the currentDateTime state every second
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
    <div>
        <div className='col-md-5'>
      <p>{formattedDate}</p>
      <p >{formattedTime} |<span className='pointer'>  Explore Trending Articles </span></p>
      </div>
      <div className='col-sm-5 logo'>
        <a href='/'>
     <img src={logosmall} className="navlogo" alt="logo" ></img></a>
      </div>
    </div>
  );
}

export default LogoColumn;
