import React from 'react';
import { useState, useEffect } from 'react';
import ArtPosts from '../ArtAndCulture/ArtPosts';
import RecentArt from '../ArtAndCulture/RecentArt';
import SliderWidgetArt from '../ArtAndCulture/SliderWidgetArt';
import ChaiTheoryAd from '../Advertisements/ChaiTheoryAd';
import SristarAd1 from '../Advertisements/SristarAd1';
import ArchivePostArt from '../ArtAndCulture/ArchivePostArt';
import FooterCategory from '../FooterCategory/FooterCategory';

function ArtCulture() {

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
    <>
      <section className="main-content">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-12 col-xs-12">
              <div className="section">
                <ArtPosts dataObject={result} />
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12" id="sidebar">
              <aside>
                <ChaiTheoryAd />
                <RecentArt dataObject={result} />
                <SristarAd1 />
                <SliderWidgetArt dataObject={result} />
                <ArchivePostArt />
              </aside>
            </div>
          </div>
        </div>
      </section>
      <FooterCategory dataObject={result} />
    </>
  );
}

export default ArtCulture;