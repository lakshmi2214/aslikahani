import React from 'react'
import RelatedArticleContent from './RelatedContent/RelatedArticleContent'
import SristarAd2 from '../Advertisements/SristarAd2'
import ChaiTheoryAd from '../Advertisements/ChaiTheoryAd'
import SristarAd1 from '../Advertisements/SristarAd1'
import FooterCategory from '../FooterCategory/FooterCategory'
import { useLocation } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react'

function ArticleContent() {
  const location = useLocation();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (location) {
      var tmp = location.pathname.slice(location.pathname.lastIndexOf("/"), location.pathname.length);

      tmp = tmp.substring(1, tmp.length);
    }
    const url = `https://newsbackend-388608.as.r.appspot.com/api/v1/articles/get?url=${tmp}`
    fetch(url).then(res => res.json())
      .then(res => {
        setData(res)
        console.log(res)

      })
      .catch(err => setData(err))

  }, [])
  return (
    <div>

      <section className="main-content">
        <div className="container">
          <div className="row">
            <RelatedArticleContent dataObject={data} />
            <div className="col-md-5 col-sm-12 col-xs-12" id="side-bar-right-2">
              <div className="theiaStickySidebar">
                <aside>
                  <ChaiTheoryAd />
                  <SristarAd2 />
                  <SristarAd1 />
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterCategory />
    </div>
  )
}

export default ArticleContent
