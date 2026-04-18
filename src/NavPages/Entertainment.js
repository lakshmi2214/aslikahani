import React, { useState, useEffect } from 'react';
import Navbar from '../Utility/Navbar';
import LogoColumn from '../Home/LogoColumn';
import Add1 from '../Advertisements/Add1';
import Add2 from '../Advertisements/Add2';
import SideAdd1 from '../Advertisements/SideAdd1';
import SideAdd2 from '../Advertisements/SideAdd2';
import Topbar from '../Home/Topbar';
import Footer from "../Home/Footer/Footer";
import { CategoryContent1, CategoryContent2, SidePopularGeneric } from './GenericCategoryContent';

function Entertainment() {
  // eslint-disable-next-line no-unused-vars
  const [isMobile, setIsMobile] = useState(false);
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
    <>
      <Topbar />
      <LogoColumn />
      <Navbar />

      <section className='inner-pages-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8' >
              <CategoryContent1 dataObject={result} categoryKey="General" />
              <Add1 addObject={value} />
              <CategoryContent2 dataObject={result} categoryKey="General" />
              <Add2 addObject={value} />
            </div>
            <div className='col-md-4 '>
              <div className='innerPage-side-bar'>
                <div className='mobile-view'>
                  <SideAdd1 addObject={value} />
                </div>
                <SidePopularGeneric dataObject={result} categoryKey="General" />
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

export default Entertainment