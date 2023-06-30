import React from 'react'
import FooterCategory from '../FooterCategory/FooterCategory'
import EntertainmentPosts from '../Entertainment/EntertainmentPosts'
import ChaiTheoryAd from '../Advertisements/ChaiTheoryAd'
import RecentEntertainment from '../Entertainment/RecentEntertainment'
import SristarAd1 from '../Advertisements/SristarAd1'
import ArchivePostEnetrtainment from '../Entertainment/ArchivePostEntertainment'
import Navbar from '../Utility/Navbar'
import { useState, useEffect } from 'react'
import BannerAd1 from '../Advertisements/BannerAd1'
import EntertainmentPost1 from '../Entertainment/EntertainmentPost1'
import BannerAd2 from '../Advertisements/BannerAd2'
import EntertainmentPost2 from '../Entertainment/EntertainmentPost2'
function Entertainment() {
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
      <Navbar addObject={value}/>
      <section className="main-content">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-12 col-xs-12">
              <div className="section">
                <EntertainmentPosts dataObject={result} />
                <BannerAd1 addObject={result} />
                <EntertainmentPost1 dataObject={result} />
                <BannerAd2 addObject={result} />
                <EntertainmentPost2 dataObject={result} />
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12" id="sidebar">
              <aside>
                <ChaiTheoryAd addObject= {value} />
                <RecentEntertainment dataObject={result} />
                <SristarAd1 addObject= {value} />
                <ArchivePostEnetrtainment />
              </aside>
            </div>
          </div>
        </div>
      </section>
      <FooterCategory dataObject={result} />
    </div>
  )
}

export default Entertainment