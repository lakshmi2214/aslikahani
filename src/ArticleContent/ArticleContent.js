import React from 'react'
import RelatedArticleContent from './RelatedContent/RelatedArticleContent'
import ChaiTheoryAd from '../Advertisements/ChaiTheoryAd'

import { useState, useEffect } from 'react'
import Footer from "../Home/Footer/Footer";

import Navbar from '../Utility/Navbar'
import SristarAd1 from '../Advertisements/SristarAd1'
import SristarAd2 from '../Advertisements/SristarAd2'
import LogoColumn from '../Home/LogoColumn'
import Topbar from '../Home/Topbar'
import PopularRecent from '../Home/Content/PopularRecent'
import { useLocation } from 'react-router-dom'

function ArticleContent() {
  const location = useLocation();
  const [categories, setCategories] = useState([]);
  const [currentArticle, setCurrentArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);

  // 1. Determine current slug
  let slug = "";
  if (location) {
    slug = location.pathname.slice(location.pathname.lastIndexOf("/"), location.pathname.length);
    slug = slug.substring(1, slug.length);
  }

  // 2. Fetch Category List
  useEffect(() => {
    const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/category/list`;
    fetch(url).then(response => response.json())
      .then(response => {
        setCategories(response);
      });
  }, []);

  // 3. Fetch Current Article
  useEffect(() => {
    if (!slug) return;
    const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/articles/get?url=${slug}`;
    fetch(url).then(res => res.json())
      .then(res => {
        setCurrentArticle(res);
      });
  }, [slug]);

  // 4. Fetch Related Articles based on category
  useEffect(() => {
    if (currentArticle && categories.length > 0) {
      // Find category ID
      const matchingCat = categories.find(cat => cat.name === currentArticle.category);
      const catId = matchingCat ? matchingCat.id : 10; // Fallback to 10 if not found

      const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/articles/list?category=${catId}&format=json`;
      fetch(url).then(response => response.json())
        .then(response => {
          if (response && response.locations && response.locations.Popular) {
            // Filter out current article and limit to 5
            const filtered = response.locations.Popular
              .filter(art => art.url !== slug)
              .slice(0, 5);
            setRelatedArticles(filtered);
          }
        })
        .catch(error => console.log(error));
    }
  }, [currentArticle, categories, slug]);

  return (
    <div>
      <Topbar />
      <LogoColumn />
      <Navbar />
      <section className='inner-pages-section'>

        <div className='container-fluid px-5'>
          <div className="row">
            <div className="col-md-2 col-sm-12 col-xs-12">
              <div className="theiaStickySidebar">
                <aside>
                  <ChaiTheoryAd addObject={categories} />
                  <div style={{ height: "20px" }}></div>
                  <SristarAd2 addObject={categories} />
                  <div style={{ height: "20px" }}></div>
                  <SristarAd1 addObject={categories} />
                </aside>
              </div>
            </div>
            <div className="col-md-7 col-sm-12 col-xs-12">
              <RelatedArticleContent articleData={currentArticle} />
            </div>
            <div className="col-md-3 col-sm-12 col-xs-12">
              <PopularRecent relatedArticles={relatedArticles} />
            </div>
          </div>
        </div>

      </section>
      <Footer />
    </div>
  )
}

export default ArticleContent