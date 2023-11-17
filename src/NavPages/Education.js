import React from 'react';
import { useState, useEffect } from 'react';
import LogoColumn from '../Home/LogoColumn';
import Navbar from '../Utility/Navbar';
import Education1 from '../Education/Education1';
import Education2 from '../Education/Education2';
import Education3 from '../Education/Education3';
import Add1 from '../Advertisements/Add1';
import Add2 from '../Advertisements/Add2';
import SideAdd1 from '../Advertisements/SideAdd1';
import SideAdd2 from '../Advertisements/SideAdd2';
import SidePost from '../Education/SidePost';
import SidePopular from '../Education/SidePopular';
import FooterCategory from '../FooterCategory/FooterCategory';
// import EducationComponent from '../Education/EducationComponent';


function Education() {
  const [result, setResult] = useState([]);
  const [value, setvalue] = useState([]);
  // similar to componentDidMount
  useEffect(() => {
    const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/articles/list?category=4&format=json`;
    fetch(url).then(response => response.json())
      .then(response => {
        // console.log(response)
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
    {/* <EducationComponent /> */}
    <LogoColumn />
      <Navbar />
      <br />
      <div className='col-md-12 col-xs-12 col-sm-12'>
        <div className='col-md-8' style={{paddingLeft:"4%"}}>
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

export default Education;