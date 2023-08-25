import React from 'react';
import FooterCategory from '../FooterCategory/FooterCategory';
import { useState, useEffect } from 'react';
import EducationPosts from '../Education/EducationPosts';
import ChaiTheoryAd from '../Advertisements/ChaiTheoryAd';
import RecentEducation from '../Education/RecentEducation';
import SristarAd1 from '../Advertisements/SristarAd1';
import SliderWidgetEducation from '../Education/SliderWidgetEducation';
import ArchivePostEducation from '../Education/ArchivePostEducation';
import Navbar from '../Utility/Navbar';
import BannerAd1 from '../Advertisements/BannerAd1';
import EducationPost1 from '../Education/EducationPost1';
import BannerAd2 from '../Advertisements/BannerAd2';
import EducationPost2 from '../Education/EducationPost2';


function Education() {
  const [result, setResult] = useState([]);
  const [value, setvalue] = useState([]);
  // similar to componentDidMount
  useEffect(() => {
    const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/articles/list?category=4&format=json`;
    fetch(url).then(response => response.json())
      .then(response => {
        // console.log(response)
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
    <div>
      <Navbar/>
      <section className="main-content">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-12 col-xs-12">
              <div className="section">
                <EducationPosts dataObject={result} />
                <BannerAd1 addObject={value} />
                <EducationPost1 dataObject={result} />
                <BannerAd2 addObject={value} />
                <EducationPost2 dataObject={result} />
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12" id="sidebar">
              <aside>
                <ChaiTheoryAd addObject= {value}/>
                <RecentEducation dataObject={result} />
                <SristarAd1 addObject= {value}/>
                <SliderWidgetEducation dataObject={result} />
                <ArchivePostEducation addObject= {value}/>
              </aside>
            </div>
          </div>
        </div>
      </section>
      <FooterCategory/>
    </div>
  )
}

export default Education;