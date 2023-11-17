import React from 'react'
import FooterCategory from '../FooterCategory/FooterCategory';
import { useState, useEffect } from 'react';
import Navbar from '../Utility/Navbar';
import LogoColumn from '../Home/LogoColumn';
import Lifestyle1 from '../LifeStyle/Lifestyle1';
import Add1 from '../Advertisements/Add1';
import Lifestyle2 from '../LifeStyle/Lifestyle2';
import Add2 from '../Advertisements/Add2';
import Lifestyle3 from '../LifeStyle/Lifestyle3';
import SideAdd1 from '../Advertisements/SideAdd1';
import SideAdd2 from '../Advertisements/SideAdd2';
import SidePopularLifestyle from '../LifeStyle/SidePopularLifestyle';
import SidePostLifestyle from '../LifeStyle/SidePostLifestyle';

function LifeStyle() {
  const [result, setResult] = useState([]);
  const [value, setvalue] = useState([]);
  useEffect(() => {
    const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/articles/list?category=8&format=json`;
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
      <div className='col-md-8'>
        <div className='col' >
          <Lifestyle1 dataObject={result} />
          <div className='col-md-12' style={{padding: "10px", textAlign: "center" }}>
            <Add1 addObject={value} />
          </div>
          <Lifestyle2 dataObject={result} />
          <div className='col-md-12' style={{ padding: "10px", textAlign: "center" }}>
            <Add2 addObject={value} />
          </div>
          <Lifestyle3 dataObject={result} />
          
        </div>
       
      </div>
      
      <div className='col-md-4'>

        <SideAdd1 addObject={value} />
        <SidePopularLifestyle dataObject={result} />
        <SideAdd2 addObject={value} />
        <SidePostLifestyle dataObject={result} />
      </div>

    </div>
<FooterCategory />
  </div>
  )
}

export default LifeStyle