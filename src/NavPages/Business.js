import React, { useState, useEffect } from 'react';
import Footer from "../Home/Footer/Footer";
import Navbar from '../Utility/Navbar';
import LogoColumn from '../Home/LogoColumn';
import Add1 from '../Advertisements/Add1';
import Add2 from '../Advertisements/Add2';
import SideAdd1 from '../Advertisements/SideAdd1';
import SideAdd2 from '../Advertisements/SideAdd2';
import Topbar from '../Home/Topbar';
import { CategoryContent1, CategoryContent2, SidePopularGeneric } from './GenericCategoryContent';

function Business() {
  // eslint-disable-next-line no-unused-vars
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

  }, []);

  return (
    // <div>
    //   <Topbar />
    //   <LogoColumn />
    //   <Navbar />
    //   <br />
    //   <div className='col-md-12 col-xs-12 col-sm-12'>
    //     <div className='col-md-8' style={{ paddingLeft: "4%" }}>
    //       <div className='col'>
    //         <Business1 dataObject={result} />
    //         <div className='col-md-12' style={{ padding: "10px", textAlign: "center" }}>
    //           <Add1 addObject={value} /><br />
    //         </div>
    //         <Business2 dataObject={result} />
    //         <div className='col-md-12' style={{ padding: "10px", textAlign: "center" }}>
    //           <Add2 addObject={value} /><br />
    //         </div>
    //         <Business3 dataObject={result} />

    //       </div>

    //     </div>

    //     <div className='col-md-4'>
    //       <div className='mobile-view'>
    //         <SideAdd1 addObject={value} /></div>
    //       {isMobile ? null : (
    //         <div className='col-md-11'>
    //           <SideAdd1 addObject={value} /></div>
    //       )}
    //       <SidePopularBusiness dataObject={result} />
    //       <SideAdd2 addObject={value} />
    //       <SidePostBusiness dataObject={result} />
    //     </div>

    //   </div>
    //   <FooterCategory />
    // </div>
    <>
      <Topbar />
      <LogoColumn />
      <Navbar />

      <section className='inner-pages-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8' >
              <CategoryContent1 dataObject={result} categoryKey="BussGeneral" />
              <Add1 addObject={value} />
              <CategoryContent2 dataObject={result} categoryKey="BussGeneral" />
              <Add2 addObject={value} />
            </div>
            <div className='col-md-4 '>
              <div className='innerPage-side-bar'>
                <div className='mobile-view'>
                  <SideAdd1 addObject={value} />
                </div>
                <SidePopularGeneric dataObject={result} categoryKey="BussGeneral" />
                <SideAdd2 addObject={value} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </>
  )
}

export default Business;