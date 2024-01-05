import React from 'react';
import FooterCategory from '../FooterCategory/FooterCategory';
import { useState, useEffect } from 'react';
import Navbar from '../Utility/Navbar';
import LogoColumn from '../Home/LogoColumn';
import Business1 from '../Business/Business1';
import Add1 from '../Advertisements/Add1';
import Business2 from '../Business/Business2';
import Add2 from '../Advertisements/Add2';
import Business3 from '../Business/Business3';
import SideAdd1 from '../Advertisements/SideAdd1';
import SidePopularBusiness from '../Business/SidePopularBusiness';
import SideAdd2 from '../Advertisements/SideAdd2';
import SidePostBusiness from '../Business/SidePostBusiness';
import Topbar from '../Home/Topbar';


function Business() {
  const [isMobile, setIsMobile] = useState(false);
  const [result, setResult] = useState([]);
  const [value, setvalue] = useState([]);
  useEffect(() => {
    const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/articles/list?category=6&format=json`;
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
        const checkMobile = () =>{
          const isMobile = window.innerWidth >= 767;
          setIsMobile(isMobile);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => {
          window.removeEventListener('resize', checkMobile);
        };
  }, []);

  return (
    <div>
      <Topbar />
      <LogoColumn />
      <Navbar/>
      <br/>
      <div className='col-md-12 col-xs-12 col-sm-12'>
        <div className='col-md-8' style={{paddingLeft:"4%"}}>
          <div className='col'>
            <Business1 dataObject={result} />
            <div className='col-md-12' style={{padding: "10px", textAlign: "center" }}>
              <Add1 addObject={value} />
            </div>
            <Business2 dataObject={result} />
            <div className='col-md-12' style={{ padding: "10px", textAlign: "center" }}>
              <Add2 addObject={value} />
            </div>
            <Business3 dataObject={result} />
            
          </div>
         
        </div>
        
        <div className='col-md-4'>
<div className='mobile-view'>
          <SideAdd1 addObject={value} /></div>
          {isMobile ? null:(
            <div className='col-md-11'>
              <SideAdd1 addObject={value} /></div>
          )}
          <SidePopularBusiness dataObject={result} />
          <SideAdd2 addObject={value} />
          <SidePostBusiness dataObject={result} />
        </div>

      </div>
        <FooterCategory  /> 
    </div>
  )
}

export default Business;