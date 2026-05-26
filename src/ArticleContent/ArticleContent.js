import React from 'react'
import { Helmet } from 'react-helmet'
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

  // 1. Determine current slug and category from route
  let slug = "";
  let categoryFromRoute = null;
  if (location) {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    if (pathSegments.length > 0) {
      slug = pathSegments[0].toLowerCase() === 'category' && pathSegments.length > 1 
         ? pathSegments[2] || "" 
         : pathSegments[1] || "";
      if (!slug) {
         slug = location.pathname.slice(location.pathname.lastIndexOf("/") + 1);
      }
      categoryFromRoute = pathSegments[0].toLowerCase() === 'category' && pathSegments.length > 1 
         ? pathSegments[1] 
         : pathSegments[0];
    }
  }

  // 2. Fetch Category List
  useEffect(() => {
    const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/category/list`;
    fetch(url).then(response => response.json())
      .then(response => {
        setCategories(Array.isArray(response) ? response : response.categories || []);
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
      const activeCategory = categoryFromRoute || currentArticle.category;

      // Find category ID
      const matchingCat = categories.find(cat => 
        cat.name && activeCategory && cat.name.toLowerCase() === activeCategory.toLowerCase()
      );
      const catId = matchingCat ? matchingCat.id : 10; // Fallback to 10 if not found

      const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/articles/list?category=${catId}&format=json`;
      fetch(url).then(response => response.json())
        .then(response => {
          if (response && response.locations) {
            let allArticles = [];
            Object.keys(response.locations).forEach(key => {
              if (key !== 'trendingTags' && Array.isArray(response.locations[key])) {
                allArticles = [...allArticles, ...response.locations[key]];
              }
            });
            // Ensure uniqueness based on article_id
            const uniqueArticles = Array.from(new Map(allArticles.map(item => [item.article_id, item])).values());
            
            // Strictly filter by current category
            const categoryFiltered = uniqueArticles.filter(art => 
               !activeCategory || 
               (art.category && art.category.trim().toLowerCase() === activeCategory.trim().toLowerCase())
            );

            // Helper to get tags/keywords
            const getTags = (article) => {
              let tags = [];
              if (article.tags) {
                if (Array.isArray(article.tags)) tags = [...tags, ...article.tags];
                else if (typeof article.tags === 'string') tags = [...tags, ...article.tags.split(',')];
              }
              if (article.keywords) {
                if (Array.isArray(article.keywords)) tags = [...tags, ...article.keywords];
                else if (typeof article.keywords === 'string') tags = [...tags, ...article.keywords.split(',')];
              }
              return tags.map(t => t.trim().toLowerCase()).filter(t => t);
            };

            const currentTags = getTags(currentArticle);

            const calculateScore = (article) => {
              let score = 0;
              const articleTags = getTags(article);
              articleTags.forEach(tag => {
                if (currentTags.includes(tag)) {
                  score += 1;
                }
              });
              return score;
            };

            // Filter out current article and score matching articles
            const validArticles = categoryFiltered.filter(art => art.url !== slug);

            const scoredArticles = validArticles.map(art => {
              const score = calculateScore(art);
              const timeVal = new Date(art.time || art.created_at || 0).getTime();
              return { ...art, _matchScore: score, _timeVal: timeVal };
            });

            // Sort by tag match score (descending), then by date (descending)
            scoredArticles.sort((a, b) => {
              if (b._matchScore !== a._matchScore) {
                return b._matchScore - a._matchScore; // Most relevant tags first
              }
              if (isNaN(a._timeVal) && isNaN(b._timeVal)) return 0;
              if (isNaN(a._timeVal)) return 1;
              if (isNaN(b._timeVal)) return -1;
              return b._timeVal - a._timeVal; // Latest first
            });

            // Limit to 6 (4-6 requirement)
            const filtered = scoredArticles.slice(0, 6).map(art => {
              const { _matchScore, _timeVal, ...rest } = art;
              return rest;
            });
            
            setRelatedArticles(filtered);
          }
        })
        .catch(error => console.log(error));
    }
  }, [currentArticle, categories, slug]);

  return (
    <div>
      {currentArticle && (
        <Helmet>
          <title>{currentArticle.title} - Aslikahani</title>
          <meta property="og:title" content={currentArticle.title} />
          <meta property="og:description" content={currentArticle.description ? currentArticle.description.replace(/<[^>]+>/g, '') : "Read this article on Aslikahani"} />
          <meta property="og:image" content={currentArticle.image} />
          <meta property="og:url" content={window.location.href} />
          <meta property="og:type" content="article" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={currentArticle.title} />
          <meta name="twitter:description" content={currentArticle.description ? currentArticle.description.replace(/<[^>]+>/g, '') : "Read this article on Aslikahani"} />
          <meta name="twitter:image" content={currentArticle.image} />
        </Helmet>
      )}
      <Topbar />
      <LogoColumn />
      <Navbar />
      <section className='inner-pages-section'>

        <div className='container-fluid px-5'>
          <div className="row">
            <div className="col-md-3 col-sm-12 col-xs-12">
              <div className="theiaStickySidebar">
                <aside>
                  <ChaiTheoryAd addObject={{ categories }} />
                  <div style={{ height: "20px" }}></div>
                  <SristarAd2 addObject={{ categories }} />
                  <div style={{ height: "20px" }}></div>
                  <SristarAd1 addObject={{ categories }} />
                </aside>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12">
              <RelatedArticleContent articleData={currentArticle} />
            </div>
            <div className="col-md-3 col-sm-12 col-xs-12">
              <PopularRecent relatedArticles={relatedArticles} currentCategory={categoryFromRoute || currentArticle?.category} />
            </div>
          </div>
        </div>

      </section>
      <Footer />
    </div>
  )
}

export default ArticleContent