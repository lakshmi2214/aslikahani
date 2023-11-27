import React from 'react'
import RelatedArticleContent from './RelatedContent/RelatedArticleContent'
import ChaiTheoryAd from '../Advertisements/ChaiTheoryAd'
import FooterCategory from '../FooterCategory/FooterCategory'
import { useState, useEffect } from 'react'
import Navbar from '../Utility/Navbar'
import SristarAd1 from '../Advertisements/SristarAd1'
import SristarAd2 from '../Advertisements/SristarAd2'
import LogoColumn from '../Home/LogoColumn'
import Topbar from '../Home/Topbar'

function ArticleContent() {
  const [result, setResult] = useState([]);
  const [value, setvalue] = useState([]);
  useEffect(() => {
    const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/articles/list?category=10&format=json`;
    fetch(url).then(response => response.json())
      .then(response => {
        setResult(response)
      })
      .catch(error => console.log(error));
    const url1 = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/category/list`;
    fetch(url1).then(response => response.json()
    )
      .then(response => {
        setvalue(response)
      })
  }, []);
  return (
    <div>
      <Topbar />
      <LogoColumn />
      <Navbar />
      <section className="main-content">
        <div className="container" >
          <div className="row">
            <RelatedArticleContent />
            <div className="col-md-5 col-sm-12 col-xs-12" id="side-bar-right-2">
              <div className="theiaStickySidebar">
                <aside>
                  <SristarAd2 addObject={value} />
                  <ChaiTheoryAd addObject={value} />
                  <SristarAd1 addObject={value} />
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterCategory/>
    </div>
  )
}

export default ArticleContent