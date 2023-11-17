import React from 'react'
import Education1 from './Education1'
import { useState, useEffect } from 'react';
import Education2 from './Education2';
import Add1 from './Add1';
import Add2 from './Add2';
import LogoColumn from '../Home/LogoColumn';
import Navbar from '../Utility/Navbar';
import Education3 from './Education3';
import SideAdd1 from './SideAdd1';
import SidePopular from './SidePopular';
import SideAdd2 from './SideAdd2';
import SidePost from './SidePost';
import FooterCategory from '../FooterCategory/FooterCategory';

function EducationComponent() {
  const [result, setResult] = useState([]);
  const [value, setvalue] = useState([]);
  // similar to componentDidMount
  useEffect(() => {
    const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/articles/list?category=7&format=json`;
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
            <Education1 dataObject={result} />
            <div className='col-md-12' style={{padding: "10px", textAlign: "center" }}>
              <Add1 addObject={value} />
            </div>
            <Education2 dataObject={result} />
            <div className='col-md-12' style={{ padding: "10px", textAlign: "center" }}>
              <Add2 addObject={value} />
            </div>
            <Education3 dataObject={result} />
            
          </div>
         
        </div>
        
        <div className='col-md-4'>

          <SideAdd1 addObject={value} />
          <SidePopular dataObject={result} />
          <SideAdd2 addObject={value} />
          <SidePost dataObject={result} />
        </div>

      </div>
<FooterCategory />
    </div>
  )
}

export default EducationComponent