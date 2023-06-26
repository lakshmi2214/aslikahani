import React from 'react'
import FooterCategory from '../FooterCategory/FooterCategory';
import LifestylePosts from '../LifeStyle/LifestylePosts';
import ChaiTheoryAd from '../Advertisements/ChaiTheoryAd';
import RecentLifestyle from '../LifeStyle/RecentLifestyle';
import SliderWidgetLifestyle from '../LifeStyle/SliderWidgetLifestyle';
import ArchiveLifestyle from '../LifeStyle/ArchiveLifestyle';
import { useState, useEffect } from 'react';
import SristarAd1 from '../Advertisements/SristarAd1';

function LifeStyle() {
  const [result, setResult] = useState([]);
  useEffect(() => {
    const url = "https://newsbackend-388608.as.r.appspot.com/api/v1/articles/list?category=10&format=json";
    fetch(url).then(response => response.json())
      .then(response => {
        setResult(response)
      })
      .catch(error => console.log(error));
  }, []);
  return (
    <div>
      <section className="main-content">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-12 col-xs-12">
              <div className="section">
                <LifestylePosts dataObject={result} />
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12" id="sidebar">
              <aside>
                <ChaiTheoryAd />
                <RecentLifestyle dataObject={result} />
                <SristarAd1 />
                <SliderWidgetLifestyle dataObject={result} />
                <ArchiveLifestyle />
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
