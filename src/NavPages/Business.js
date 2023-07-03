import React from 'react';
import FooterCategory from '../FooterCategory/FooterCategory';
import { useState, useEffect } from 'react';
import BusinessPosts from '../Business/BusinessPosts';
import ChaiTheoryAd from '../Advertisements/ChaiTheoryAd';
import RecentBusiness from '../Business/RecentBusiness';
import SliderWidgetBusiness from '../Business/SliderWidgetBusiness';
import SristarAd1 from '../Advertisements/SristarAd1';
import BannerAd1 from '../Advertisements/BannerAd1';
import BusinessPost1 from '../Business/BusinessPost1';
import BannerAd2 from '../Advertisements/BannerAd2';
import BusinessPost2 from '../Business/BusinessPost2';


function Business() {
  const [result, setResult] = useState([]);
  const [value, setvalue] = useState([]);
  useEffect(() => {
    const url = "https://newsbackend-388608.as.r.appspot.com/api/v1/articles/list?category=6&format=json";
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
      <Navbar/>
      <section className="main-content">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-12 col-xs-12">
              <div className="section">
                <BusinessPosts dataObject={result} />
                <BannerAd1 addObject={value} />
                <BusinessPost1 dataObject={result} />
                <BannerAd2 addObject={value} />
                <BusinessPost2 dataObject ={result} />
              </div> 
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12" id="sidebar">
              <aside>
                <ChaiTheoryAd addObject={value} />
                <RecentBusiness dataObject={result} />
                <SristarAd1 addObject={value} />
                <SliderWidgetBusiness dataObject={result} />
              </aside>
            </div>
          </div>
        </div>
      </section>
       {/* <FooterCategory  />  */}
    </div>
  )
}

export default Business;