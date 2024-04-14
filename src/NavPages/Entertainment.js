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
    <>
      <Topbar />
      <LogoColumn />
      <Navbar />

      <section className='inner-pages-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8' >
              <Entertainment1 dataObject={result} />
              <Add1 addObject={value} />
              <Entertainment2 dataObject={result} />
              <Add2 addObject={value} />
              <Entertainment3 dataObject={result} />
            </div>
            <div className='col-md-4 '>
              <div className='innerPage-side-bar'>
                <div className='mobile-view'>
                  <SideAdd1 addObject={value} />
                </div>
                <SidePopularEntertainment1 dataObject={result} />
                <SideAdd2 addObject={value} />
                <SidePostEntertainment dataObject={result} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterCategory />

    </>
  )
}

export default Entertainment