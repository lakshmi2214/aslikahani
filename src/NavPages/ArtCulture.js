import React from 'react';
import { useState, useEffect } from 'react';
import FooterCategory from '../FooterCategory/FooterCategory';
import Navbar from '../Utility/Navbar';
import LogoColumn from '../Home/LogoColumn';
import Art1 from '../ArtAndCulture/Art1';
import Add1 from '../Advertisements/Add1';
import Art2 from '../ArtAndCulture/Art2';
import Add2 from '../Advertisements/Add2';
import Art3 from '../ArtAndCulture/Art3';
import SideAdd1 from '../Advertisements/SideAdd1';
import SideAdd2 from '../Advertisements/SideAdd2';
import SidePopularArt from '../ArtAndCulture/SidePopularArt';
import SidePostArt from '../ArtAndCulture/SidePostArt';

function ArtCulture() {

  const [result, setResult] = useState([]);
  const [value, setvalue] = useState([]);
  useEffect(() => {
    const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/articles/list?category=9&format=json`;
    fetch(url).then(response => response.json())
      .then(response => {
        setResult(response)
      })
      const url1 = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/category/list`;
      fetch(url1).then(response => response.json()
      )
        .then(response => {
          setvalue(response)
        })
  }, []);
  return (
    <div>
    <LogoColumn />
    <Navbar />
    <br />
    <div className='col-md-12 col-xs-12 col-sm-12'>
      <div className='col-md-8 col-xs-12 col-sm-12' style={{paddingLeft:"4%"}}>
        <div className='col' >
          <Art1 dataObject={result} />
          <div className='col-md-12' style={{padding: "10px", textAlign: "center" }}>
            <Add1 addObject={value} />
          </div>
          <Art2 dataObject={result} />
          <div className='col-md-12' style={{ padding: "10px", textAlign: "center" }}>
            <Add2 addObject={value} />
          </div>
          <Art3 dataObject={result} />
          
        </div>
       
      </div>
      
      <div className='col-md-4'>

        <SideAdd1 addObject={value} />
        <SidePopularArt dataObject={result} />
        <SideAdd2 addObject={value} />
        <SidePostArt dataObject={result} />
      </div>

    </div>
<FooterCategory />
  </div>
  );
}

export default ArtCulture;