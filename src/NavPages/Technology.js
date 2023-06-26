import React from 'react';
import FooterCategory from '../FooterCategory/FooterCategory';
import TechnologyPosts from '../Technology/TechnologyPosts';
import ChaiTheoryAd from '../Advertisements/ChaiTheoryAd';
import RecentTechnology from '../Technology/RecentTechnology';
import SristarAd1 from '../Advertisements/SristarAd1';
import SliderWidgetTechnology from '../Technology/SliderWidgetTechnology';
import ArchivePostTechnology from '../Technology/ArchivePostTechnology';
import { useState, useEffect } from 'react';
function Technology() {
  const [result, setResult] = useState([]);

  // similar to componentDidMount
  useEffect(() => {
    const url = "https://newsbackend-388608.as.r.appspot.com/api/v1/articles/list?category=10&format=json";
    fetch(url).then(response => response.json())
      .then(response => {
        // console.log(response)
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
                <TechnologyPosts dataObject={result} />
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12" id="sidebar">
              <aside>
                <ChaiTheoryAd />
                <RecentTechnology dataObject={result} />
                <SristarAd1 />
                <SliderWidgetTechnology dataObject={result} />
                <ArchivePostTechnology />
              </aside>
            </div>
          </div>
        </div>
      </section>
      <FooterCategory dataObject={result} />
    </div>
  )
}

export default Technology
