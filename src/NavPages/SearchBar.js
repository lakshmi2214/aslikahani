import React from 'react';
import { useState, useEffect } from 'react';
// import ArtPosts from '../ArtAndCulture/ArtPosts';
import RecentArt from '../ArtAndCulture/RecentArt';
import SliderWidgetArt from '../ArtAndCulture/SliderWidgetArt';
import ChaiTheoryAd from '../Advertisements/ChaiTheoryAd';
import SristarAd1 from '../Advertisements/SristarAd1';
import ArchivePostArt from '../ArtAndCulture/ArchivePostArt';
import FooterCategory from '../FooterCategory/FooterCategory';
import Navbar from '../Utility/Navbar';
// import BannerAd1 from '../Advertisements/BannerAd1';
// import ArtPost1 from '../ArtAndCulture/ArtPost1';
// import BannerAd2 from '../Advertisements/BannerAd2';
// import ArtPost2 from '../ArtAndCulture/ArtPost2';
import LogoColumn from '../Home/LogoColumn';
import Searching from '../Search/Searching';
import Topbar from '../Home/Topbar';
import SideAdd1 from '../Advertisements/SideAdd1';
import SidePopularArt from '../ArtAndCulture/SidePopularArt';
import SideAdd2 from '../Advertisements/SideAdd2';
import SidePostArt from '../ArtAndCulture/SidePostArt';

function SearchBar() {
  const [isMobile, setIsMobile] = useState(false);
  const [result, setResult] = useState([]);
  const [value, setvalue] = useState([]);
  // const [article, setAricle] = useState([])

  useEffect(() => {
    const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/articles/list?category=9&format=json`;
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
    <Navbar/>    
      <section className="main-content">        
                {/* <BannerAd1 addObject={value} /> */}
        <div className="col-md-12">
          <div className="row">
            <div className='col-md-1 mobile-view'></div>
            <div className="col-md-7 col-sm-12 col-xs-12">
              {/* <div className="section"> */}
              {/* <div className=''> */}
                <Searching />
              {/* </div> */}
            </div>
            <div className="col-md-3 col-sm-12 col-xs-12 mobile-view" id="sidebar" style={{padding:"0px"}}>
              {/* <aside> */}
                {/* <ChaiTheoryAd addObject={value} />
                <RecentArt dataObject={result} />
                <SristarAd1 addObject= {value}/>
                <SliderWidgetArt dataObject={result} />
                <ArchivePostArt /> */}
                {/* <div className='mobile-view'> */}
        <SideAdd1 addObject={value} />
        {/* </div>
        {isMobile ? null:(
           <div className='col-md-11'>
        <SideAdd1 addObject={value} />
        </div>
        )} */}
       
        <SidePopularArt dataObject={result} />
        <SideAdd2 addObject={value} />
        <SidePostArt dataObject={result} />
      {/* </div> */}

              {/* </aside> */}
            </div>

            {isMobile ? null:(
               <div className="col-md-3 col-sm-12 col-xs-12" id="sidebar" style={{padding:"24px"}}>
               <div className='col-md-12'>
         <SideAdd1 addObject={value} />
         <SidePopularArt dataObject={result} />
         <SideAdd2 addObject={value} />
         <SidePostArt dataObject={result} />
             </div>
             </div>
            )}
           
            <div className='col-md-1 mobile-view'></div>
          </div>
        </div>
      </section>
      <FooterCategory/>
    </>
  );
}

export default SearchBar;