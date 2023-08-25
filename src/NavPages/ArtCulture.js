import React from 'react';
import { useState, useEffect } from 'react';
import ArtPosts from '../ArtAndCulture/ArtPosts';
import RecentArt from '../ArtAndCulture/RecentArt';
import SliderWidgetArt from '../ArtAndCulture/SliderWidgetArt';
import ChaiTheoryAd from '../Advertisements/ChaiTheoryAd';
import SristarAd1 from '../Advertisements/SristarAd1';
import ArchivePostArt from '../ArtAndCulture/ArchivePostArt';
import FooterCategory from '../FooterCategory/FooterCategory';
import Navbar from '../Utility/Navbar';
import BannerAd1 from '../Advertisements/BannerAd1';
import ArtPost1 from '../ArtAndCulture/ArtPost1';
import BannerAd2 from '../Advertisements/BannerAd2';
import ArtPost2 from '../ArtAndCulture/ArtPost2';

function ArtCulture() {

  const [result, setResult] = useState([]);
  const [value, setvalue] = useState([]);
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
  }, []);
  return (
    <>
    <Navbar/>
      <section className="main-content">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-12 col-xs-12">
              <div className="section">
                <ArtPosts dataObject={result} />
                <BannerAd1 addObject={value} />
                <ArtPost1 dataObject={result} />
                <BannerAd2 addObject={value} />
                <ArtPost2 dataObject={result} />
              </div>
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

export default ArtCulture;