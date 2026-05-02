import React, { useState, useEffect } from "react";
import '../../css/style.css';
import '../../css/animate.min.css';
import '../../css/megaMenu.css';
import '../../css/colors/amethyst.css';
import '../../css/colors/carrat.css';
import '../../css/colors/defualt.css';
import '../../css/colors/golden.css';
import '../../css/colors/java-color.css';
import '../../css/colors/sea-green.css';
import '../../css/themify-icons.css';
import '../../css/royal-slider/royalslider.css';
import '../../css/tranparentmenu.css';
import '../../css/magnific-popup.css';
import '../../css/bootstrap-normal-container.min.css';
import '../../css/bootstrap.min.css';
import '../../css/owl.theme.default.css';
import '../../css/royal-slider/rs-default.png';
import '../../css/breakingNews.css';
import '../../css/font-awesome.min.css';
import '../../css/owl.carousel.css';
import '../../css/zerogrid.css';
import '../../fonts/glyphicons-halflings-regular.svg';
import '../../css/royal-slider/rs-default.css';
import { useNavigate, Link, useLocation } from "react-router-dom";

function PopularRecent(props) {
   const navigate = useNavigate();
   const location = useLocation();
   const [fetchedArticles, setFetchedArticles] = useState([]);

   useEffect(() => {
      const pathSegments = location.pathname.split('/').filter(Boolean);
      let categoryNameFromRoute = null;

      if (pathSegments.length > 0) {
         if (pathSegments[0].toLowerCase() === 'category' && pathSegments.length > 1) {
            categoryNameFromRoute = pathSegments[1];
         } else {
            categoryNameFromRoute = pathSegments[0];
         }
      }

      if (props.currentCategory) {
         categoryNameFromRoute = props.currentCategory;
      } else if (!categoryNameFromRoute && location.state?.item?.category) {
         categoryNameFromRoute = location.state.item.category;
      }

      if (categoryNameFromRoute) {
         fetch(`${process.env.REACT_APP_BACKEND_HOST}/api/v1/category/list`)
            .then(res => res.json())
            .then(resData => {
               const categoryList = Array.isArray(resData) ? resData : resData.categories || [];
               const matchingCat = categoryList.find(c => 
                  c.name.toLowerCase() === categoryNameFromRoute.toLowerCase() || 
                  c.url.toLowerCase() === categoryNameFromRoute.toLowerCase()
               );

               if (matchingCat) {
                  return fetch(`${process.env.REACT_APP_BACKEND_HOST}/api/v1/articles/list?category=${matchingCat.id}&format=json`)
                     .then(res => res.json())
                     .then(data => {
                        let articles = [];
                        if (data.locations) {
                           Object.keys(data.locations).forEach(key => {
                              if (key !== 'trendingTags' && Array.isArray(data.locations[key])) {
                                 data.locations[key].forEach(item => {
                                     if (item && item.article_id && !articles.find(a => a.article_id === item.article_id)) {
                                        if (item.category && item.category.trim().toLowerCase() === matchingCat.name.trim().toLowerCase()) {
                                           articles.push(item);
                                        }
                                     }
                                 });
                              }
                           });
                        }

                        const slug = pathSegments.length > 1 && pathSegments[0].toLowerCase() !== 'category' ? pathSegments[1] : null;
                        if (slug) {
                           articles = articles.filter(art => art.url !== slug);
                        }

                        articles.sort((a, b) => {
                           const timeA = new Date(a.time || a.created_at || 0).getTime();
                           const timeB = new Date(b.time || b.created_at || 0).getTime();
                           if (isNaN(timeA) && isNaN(timeB)) return 0;
                           if (isNaN(timeA)) return 1;
                           if (isNaN(timeB)) return -1;
                           return timeB - timeA;
                        });

                        setFetchedArticles(articles.slice(0, 5));
                     });
               }
            })
            .catch(err => console.error("Error fetching category recent articles:", err));
      }
   }, [location.pathname, location.state, props.currentCategory]);

   const handleNavigation = (item) => {
      console.log(item);

      navigate(`/${item.category}/${item.url}`, { state: { item } });
   }

   let articlesToDisplay = fetchedArticles.length > 0
      ? fetchedArticles
      : (props.relatedArticles && props.relatedArticles.length > 0 ? props.relatedArticles : (props.dataObject?.locations?.Popular || []));
      
   let expectedCategory = props.currentCategory || 
      location.state?.item?.category || 
      (location.pathname.split('/').filter(Boolean)[0]?.toLowerCase() === 'category' ? location.pathname.split('/').filter(Boolean)[1] : location.pathname.split('/').filter(Boolean)[0]);

   const usingRelatedArticlesProp = !fetchedArticles.length && props.relatedArticles && props.relatedArticles.length > 0;

   if (!usingRelatedArticlesProp) {
      if (expectedCategory && expectedCategory.toLowerCase() !== 'home') {
         // fallback safety: if category is not resolved yet, we still strictly filter
         articlesToDisplay = articlesToDisplay.filter(item => 
            item.category && item.category.trim().toLowerCase() === expectedCategory.trim().toLowerCase()
         );
      } else if (expectedCategory) {
         // if it falls back to 'home', we shouldn't show anything until real category resolves
         articlesToDisplay = articlesToDisplay.filter(item => 
            item.category && item.category.trim().toLowerCase() === expectedCategory.trim().toLowerCase()
         );
      }
   }

   const pathSegs = location.pathname.split('/').filter(Boolean);
   const currentSlug = pathSegs.length > 1 && pathSegs[0].toLowerCase() !== 'category' ? pathSegs[1] : null;
   if (currentSlug) {
      articlesToDisplay = articlesToDisplay.filter(item => item.url !== currentSlug);
   }

   const sortedDisplayList = [...articlesToDisplay].sort((a, b) => {
      const timeA = new Date(a.time || a.created_at || 0).getTime();
      const timeB = new Date(b.time || b.created_at || 0).getTime();
      if (isNaN(timeA) && isNaN(timeB)) return 0;
      if (isNaN(timeA)) return 1;
      if (isNaN(timeB)) return -1;
      return timeB - timeA;
   }).slice(0, 5);

   return (
      <>
         <div className="widget side-popular-widget">
            <div className="side-popular-heading">
               <h2>{props.currentCategory || props.relatedArticles ? "Related Articles" : "Recent Articles"}</h2>
            </div>
            <div className="side-popular-list">
               {sortedDisplayList.map((item, index) => {
                  return (
                     <div key={index} className="side-popular-item">
                        <div className="side-popular-thumb">
                           <Link to={'/' + item.category + '/' + item.url}>
                              <img alt="" src={item.image} />
                           </Link>
                        </div>
                        <div className="side-popular-content">
                           <h3>
                              <Link to={'/' + item.category + '/' + item.url}>{item.title}</Link>
                           </h3>
                           <span className="side-popular-date">{item.created_at}</span>
                        </div>
                     </div>
                  );
               })}
            </div>
         </div>
      </>
   );
}
export default PopularRecent;