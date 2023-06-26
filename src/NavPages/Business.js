import React from 'react';
import FooterCategory from '../FooterCategory/FooterCategory';
import { useState, useEffect } from 'react';
import BusinessPosts from '../Business/BusinessPosts';
import ChaiTheoryAd from '../Advertisements/ChaiTheoryAd';
import RecentBusiness from '../Business/RecentBusiness';
import SliderWidgetBusiness from '../Business/SliderWidgetBusiness';
import SristarAd1 from '../Advertisements/SristarAd1';

function Business() {
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
                <BusinessPosts dataObject={result} />
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12" id="sidebar">
              <aside>
                <ChaiTheoryAd />
                <RecentBusiness dataObject={result} />
                <SristarAd1 />
                <SliderWidgetBusiness dataObject={result} />
              </aside>
            </div>
          </div>
        </div>
      </section>
      <FooterCategory dataObject={result} />
    </div>
  )
}

export default Business
