import React from 'react';
import FooterCategory from '../FooterCategory/FooterCategory';
import { useState, useEffect } from 'react';
import TravelPosts from '../Travel/TravelPosts';
import ChaiTheoryAd from '../Advertisements/ChaiTheoryAd';
import RecentTravel from '../Travel/RecentTravel';
import SristarAd1 from '../Advertisements/SristarAd1';
import SliderWidgetTravel from '../Travel/SliderWidgetTravel';
import ArchivePostTravel from '../Travel/ArchivePostTravel';
import BannerAd1 from '../Advertisements/BannerAd1';
import TravelPost1 from '../Travel/TravelPost1';
import BannerAd2 from '../Advertisements/BannerAd2';
import TravelPost2 from '../Travel/TravelPost2';
function Travel() {
  const [result, setResult] = useState([]);
  const [value, setvalue] = useState([]);
  // similar to componentDidMount
  useEffect(() => {
    const url = "https://newsbackend-388608.as.r.appspot.com/api/v1/articles/list?category=10&format=json";
    fetch(url).then(response => response.json())
      .then(response => {
        // console.log(response)
        setResult(response)
      })
      const url1 = "https://newsbackend-388608.as.r.appspot.com/api/v1/category/list";
      fetch(url1).then(response => response.json()
      )
        .then(response => {
          setvalue(response)
        })
  }, []);
  return (
    <div>
      {/* <Navbar addObject={value} /> */}
      <section className="main-content">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-12 col-xs-12">
              <div className="section">
                <TravelPosts dataObject={result} />
                <BannerAd1 addObject ={value} />
                <TravelPost1 dataObject ={result} />
                <BannerAd2 addObject ={value} />
                <TravelPost2 dataObject ={result} />
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12" id="sidebar">
              <aside>
                <ChaiTheoryAd addObject={value} />
                <RecentTravel dataObject={result} />
                <SristarAd1 addObject={value} />
                <SliderWidgetTravel dataObject={result} />
                <ArchivePostTravel />
              </aside>
            </div>
          </div>
        </div>
      </section>
      <FooterCategory dataObject={result} />
    </div>
  )
}

export default Travel
