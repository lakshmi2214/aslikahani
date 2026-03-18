import React, { useState, useEffect } from 'react';
import Footer from "../Home/Footer/Footer";
import Navbar from '../Utility/Navbar';
import LogoColumn from '../Home/LogoColumn';
import Topbar from '../Home/Topbar';
import Add1 from '../Advertisements/Add1';
import Add2 from '../Advertisements/Add2';
import SideAdd1 from '../Advertisements/SideAdd1';
import SideAdd2 from '../Advertisements/SideAdd2';
import { CategoryContent1, CategoryContent2, SidePopularGeneric } from './GenericCategoryContent';

function Health() {
  const [result, setResult] = useState([]);
  const [value, setvalue] = useState([]);

  useEffect(() => {
    // Health category ID = ?
    const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/articles/list?category=Health&format=json`;
    fetch(url).then(response => response.json())
      .then(response => {
        setResult(response)
      })
    const url1 = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/category/list`;
    fetch(url1).then(response => response.json())
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
              <CategoryContent1 dataObject={result} categoryKey="HealthGeneral" />
              <Add1 addObject={value} />
              <CategoryContent2 dataObject={result} categoryKey="HealthGeneral" />
              <Add2 addObject={value} />
            </div>
            <div className='col-md-4 '>
              <div className='innerPage-side-bar'>
                <div className='mobile-view'>
                  <SideAdd1 addObject={value} />
                </div>
                <SidePopularGeneric dataObject={result} categoryKey="HealthGeneral" />
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

export default Health;
