import React from 'react';
import Footer from "../Home/Footer/Footer";
import { useState, useEffect } from 'react';
import Navbar from '../Utility/Navbar';
import LogoColumn from '../Home/LogoColumn';
import Travel1 from '../Travel/Travel1';
import Add1 from '../Advertisements/Add1';
import Travel2 from '../Travel/Travel2';
import Add2 from '../Advertisements/Add2';
import Travel3 from '../Travel/Travel3';
import SideAdd1 from '../Advertisements/SideAdd1';
import SidePopularTravel from '../Travel/SidePopularTravel';
import SideAdd2 from '../Advertisements/SideAdd2';
import SidePostTravel from '../Travel/SidePostTravel';
import Topbar from '../Home/Topbar';


function Travel() {
  const [isMobile, setIsMobile] = useState(false);
  const [result, setResult] = useState([]);
  const [value, setvalue] = useState([]);
  // similar to componentDidMount
  useEffect(() => {
    const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/articles/list?category=7&format=json`;
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
    const checkMobile = () => {
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
    //     <div>
    //       <Topbar />
    //       <LogoColumn />
    //       <Navbar />
    //       <br />
    //       <div className='col-md-12 col-xs-12 col-sm-12'>
    //         <div className='col-md-8' style={{paddingLeft:"4%"}}>
    //           <div className='col' >
    //             <Travel1 dataObject={result} />
    //             <div className='col-md-12' style={{padding: "10px", textAlign: "center" }}>
    //               <Add1 addObject={value} /><br/>
    //             </div>
    //             <Travel2 dataObject={result} />
    //             <div className='col-md-12' style={{ padding: "10px", textAlign: "center" }}>
    //               <Add2 addObject={value} /><br/>
    //             </div>
    //             <Travel3 dataObject={result} />

    //           </div>

    //         </div>

    //         <div className='col-md-4'>
    // <div className='mobile-view'>
    //           <SideAdd1 addObject={value} /></div>
    //           {isMobile? null:(
    //             <div className='col-md-11'>
    //               <SideAdd1 addObject={value} /></div>
    //           )}
    //           <SidePopularTravel dataObject={result} />
    //           <SideAdd2 addObject={value} />
    //           <SidePostTravel dataObject={result} />
    //         </div>

    //       </div>
    // <FooterCategory />
    //     </div>
    <>
      <Topbar />
      <LogoColumn />
      <Navbar />

      <section className='inner-pages-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8' >
              <Travel1 dataObject={result} />
              <Add1 addObject={value} />
              <Travel2 dataObject={result} />
              <Add2 addObject={value} />
              <Travel3 dataObject={result} />
            </div>
            <div className='col-md-4 '>
              <div className='innerPage-side-bar'>
                <div className='mobile-view'>
                  <SideAdd1 addObject={value} />
                </div>
                <SidePopularTravel dataObject={result} />
                <SideAdd2 addObject={value} />
                <SidePostTravel dataObject={result} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </>
  )
}

export default Travel