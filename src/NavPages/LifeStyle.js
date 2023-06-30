import React from 'react'
import FooterCategory from '../FooterCategory/FooterCategory';
import LifestylePosts from '../LifeStyle/LifestylePosts';
import ChaiTheoryAd from '../Advertisements/ChaiTheoryAd';
import RecentLifestyle from '../LifeStyle/RecentLifestyle';
import SliderWidgetLifestyle from '../LifeStyle/SliderWidgetLifestyle';
import ArchiveLifestyle from '../LifeStyle/ArchiveLifestyle';
import { useState, useEffect } from 'react';
import SristarAd1 from '../Advertisements/SristarAd1';
import Navbar from '../Utility/Navbar';
import LifestylePost1 from '../LifeStyle/LifestylePost1';
import BannerAd1 from '../Advertisements/BannerAd1';
import BannerAd2 from '../Advertisements/BannerAd2';
import LifestylePost2 from '../LifeStyle/LifestylePost2';

function LifeStyle() {
  const [result, setResult] = useState([]);
  const [value, setvalue] = useState([]);
  useEffect(() => {
    const url = "https://newsbackend-388608.as.r.appspot.com/api/v1/articles/list?category=10&format=json";
    fetch(url).then(response => response.json())
      .then(response => {
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
      <Navbar addObject= {value} />
      <section className="main-content">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-12 col-xs-12">
              <div className="section">
                <LifestylePosts dataObject={result} />
                <BannerAd1 addObject={value} />
                <LifestylePost1 dataObject={result} />
                <BannerAd2 addObject={value} />
                <LifestylePost2 dataObject={result} />
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12" id="sidebar">
              <aside>
                <ChaiTheoryAd addObject={value}/>
                <RecentLifestyle dataObject={result} />
                <SristarAd1 addObject={value} />
                <SliderWidgetLifestyle dataObject={result} />
                <ArchiveLifestyle addObject={value} />
              </aside>
            </div>
          </div>
        </div>
      </section>
      <FooterCategory dataObject={result} />
    </div>
  )
}

export default LifeStyle