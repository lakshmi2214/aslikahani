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

function SearchBar() {

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
      //   const url2 = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/articles/search?param=${keyword}`;
      // fetch(url2).then(response => response.json()
      // )
      //   .then(response => {
      //     setAricle(response)
      //   })
  }, []);
  return (
    <>
    <Topbar />
    <LogoColumn />
    <Navbar/>    
      <section className="main-content">        
                {/* <BannerAd1 addObject={value} /> */}
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-12 col-xs-12">
              {/* <div className="section"> */}
              {/* <div className=''> */}
                <Searching />
              {/* </div> */}
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12" id="sidebar">
              <aside>
                <ChaiTheoryAd addObject={value} />
                <RecentArt dataObject={result} />
                <SristarAd1 addObject= {value}/>
                <SliderWidgetArt dataObject={result} />
                <ArchivePostArt />
              </aside>
            </div>
          </div>
        </div>
      </section>
      <FooterCategory/>
    </>
  );
}

export default SearchBar;