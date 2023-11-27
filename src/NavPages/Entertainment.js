import React from 'react'
import FooterCategory from '../FooterCategory/FooterCategory'
import Navbar from '../Utility/Navbar'
import { useState, useEffect } from 'react'
import LogoColumn from '../Home/LogoColumn'
import Entertainment1 from '../Entertainment/Entertainment1'
import Entertainment2 from '../Entertainment/Entertainment2'
import Add1 from '../Advertisements/Add1'
import Add2 from '../Advertisements/Add2'
import Entertainment3 from '../Entertainment/Entertainment3'
import SideAdd1 from '../Advertisements/SideAdd1'
import SidePopularEntertainment1 from '../Entertainment/SidePopularEntertainment1'
import SideAdd2 from '../Advertisements/SideAdd2'
import SidePostEntertainment from '../Entertainment/SidePostEntertainment'
import Topbar from '../Home/Topbar'
function Entertainment() {
  const [result, setResult] = useState([]);
  const [value, setvalue] = useState([]);

  // similar to componentDidMount
  useEffect(() => {
    const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/articles/list?category=3&format=json`;
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
       <Topbar />
      <LogoColumn />
      <Navbar/>
      <br />
      <div className='col-md-12 col-xs-12 col-sm-12'>
      {/* <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        integrity="..."
        crossOrigin="anonymous"
      /> */}
      {/* <div className='col-md-1 style'></div> */}
        <div className='col-md-8'style={{paddingLeft:"4%"}}>
        <div className='mx-auto'>
          <div className='col' >
            <Entertainment1 dataObject={result} />
            <div className='col-md-12' style={{padding: "10px", textAlign: "center" }}>
              <Add1 addObject={value} />
            </div>
            <Entertainment2 dataObject={result} />
            <div className='col-md-12' style={{ padding: "10px", textAlign: "center" }}>
              <Add2 addObject={value} />
            </div>
            <Entertainment3 dataObject={result} />            
          </div>
         
        </div>
        </div>
        <div className='col-md-4'>

          <SideAdd1 addObject={value} />
          <SidePopularEntertainment1 dataObject={result} />
          <SideAdd2 addObject={value} />
          <SidePostEntertainment dataObject={result} />
        </div>
      </div>
      <FooterCategory />
    
    </div>
  )
}

export default Entertainment