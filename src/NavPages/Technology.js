import React from 'react';
import FooterCategory from '../FooterCategory/FooterCategory';
import TechnologyPosts from '../Technology/TechnologyPosts';
import ChaiTheoryAd from '../Advertisements/ChaiTheoryAd';
import RecentTechnology from '../Technology/RecentTechnology';
import SristarAd1 from '../Advertisements/SristarAd1';
import SliderWidgetTechnology from '../Technology/SliderWidgetTechnology';
import ArchivePostTechnology from '../Technology/ArchivePostTechnology';
import { useState, useEffect } from 'react';
import Navbar from '../Utility/Navbar';
import BannerAd1 from '../Advertisements/BannerAd1';
import TechnologyPost1 from '../Technology/TechnologyPost1';
import BannerAd2 from '../Advertisements/BannerAd2';
import TechnologyPost2 from '../Technology/TechnologyPost2';
function Technology() {
  const [result, setResult] = useState([]);
  const [value, setvalue] = useState([]);
  // similar to componentDidMount
  useEffect(() => {
    const url = "https://newsbackend-388608.as.r.appspot.com/api/v1/articles/list?category=5&format=json";
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
      <Navbar/>
      <section className="main-content">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-12 col-xs-12">
              <div className="section">
                <TechnologyPosts dataObject={result} />
                <BannerAd1 addObject={value} />
                <TechnologyPost1 dataObject={result} />
                <BannerAd2 addObject={value} />
                <TechnologyPost2 dataObject={result} />
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12" id="sidebar">
              <aside>
                <ChaiTheoryAd addObject={value}/>
                <RecentTechnology dataObject={result} />
                <SristarAd1 addObject={value}/>
                <SliderWidgetTechnology dataObject={result} />
                <ArchivePostTechnology />
              </aside>
            </div>
          </div>
        </div>
      </section>
      <FooterCategory />
    </div>
  )
}

export default Technology