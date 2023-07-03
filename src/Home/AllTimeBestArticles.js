import React from "react";
import '../css/style.css';
import '../css/animate.min.css';
import '../css/megaMenu.css';
import '../css/colors/amethyst.css';
import '../css/colors/carrat.css';
import '../css/colors/defualt.css';
import '../css/colors/golden.css';
import '../css/colors/java-color.css';
import '../css/colors/sea-green.css';
import '../css/themify-icons.css';
import '../css/royal-slider/royalslider.css';
import '../css/tranparentmenu.css';
import '../css/magnific-popup.css';
import '../css/bootstrap-normal-container.min.css';
import '../css/bootstrap.min.css';
import '../css/owl.theme.default.css';
import '../css/royal-slider/rs-default.png';
import '../css/breakingNews.css';
import '../css/font-awesome.min.css';
import '../css/owl.carousel.css';
import '../css/zerogrid.css';
import '../fonts/glyphicons-halflings-regular.svg';
import '../css/royal-slider/rs-default.css';
import { useNavigate } from "react-router-dom";

function AllTimeBestArticles(props) {
   const navigate = useNavigate();
   const handleNavigation = (item) => {
      console.log(item);

      navigate(`/${item.category}/${item.url}`, { state: { item } });
   }
   return (
      <>
         <section className="parallel-post-style">
            <div className="container">
               <div className="row">
                  <div className="col-md-12 col-xs-12 col-sm-12">
                     <div className="heading">
                        <h2 className="main-heading">All time Best Articles</h2>
                        <span className="heading-ping"></span>
                     </div>
                  </div>
                  <div className="col-md-12 col-sm-12 col-xs-12">
                     <div className="row">
                        <div className="col-md-4 col-sm-6 col-xs-12">
                           {props.dataObject?.locations?.AllTimeBestArticle.slice(0, 2).map((item, index) => {
                              console.log(item);
                              return (
                                 <div key={index}>
                                    <div className="grid-box">
                                       <ul>
                                          <li className="col-md-5 col-sm-3 col-xs-12 nopadding">
                                             <div className="thumb" onClick={() => handleNavigation(item, index)} >
                                                <a href={process.env.REACT_APP_DOMAIN_NAME+'/'+item.category+'/'+item.url}>
                                                   <img src={item.image} alt=""   />
                                                </a>
                                             </div>
                                          </li>
                                          <li className="col-md-7 col-sm-9 col-xs-12">
                                             <div className="desc post-content" onClick={() => handleNavigation(item, index)}>
                                                <h5><a href={process.env.REACT_APP_DOMAIN_NAME+'/'+item.category+'/'+item.url}>{item.title}</a></h5>
                                                <ul className="post-tools"><a href={process.env.REACT_APP_DOMAIN_NAME+'/'+item.category+'/'+item.url}>
                                                   <li> {item.created_at} </li></a>
                                                </ul>
                                             </div>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              )
                           })}
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                           {props.dataObject?.locations?.AllTimeBestArticle.slice(2, 4).map((item, index) => {
                              console.log(item);
                              return (
                                 <div key={index}>
                                    <div className="grid-box">
                                       <ul>
                                          <li className="col-md-5 col-sm-3 col-xs-12 nopadding">
                                             <div className="thumb" onClick={() => handleNavigation(item, index)}>
                                                <a href={process.env.REACT_APP_DOMAIN_NAME+'/'+item.category+'/'+item.url}>
                                                   <img src={item.image} alt=""  />
                                                </a>
                                             </div>
                                          </li>
                                          <li className="col-md-7 col-sm-9 col-xs-12">
                                             <div className="desc post-content" onClick={() => handleNavigation(item, index)}>
                                                <h5><a href={process.env.REACT_APP_DOMAIN_NAME+'/'+item.category+'/'+item.url}>{item.title}</a></h5>
                                                <ul className="post-tools"><a href={process.env.REACT_APP_DOMAIN_NAME+'/'+item.category+'/'+item.url}>
                                                   <li> {item.created_at} </li></a>
                                                </ul>
                                             </div>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              )
                           })}
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                           {props.dataObject?.locations?.AllTimeBestArticle.slice(3, 5).map((item, index) => {
                              console.log(item);
                              return (
                                 <div key={index}>
                                    <div className="grid-box">
                                       <ul>
                                          <li className="col-md-5 col-sm-3 col-xs-12 nopadding">
                                             <div className="thumb" onClick={() => handleNavigation(item, index)}>
                                                <a href={process.env.REACT_APP_DOMAIN_NAME+'/'+item.category+'/'+item.url}>
                                                   <img src={item.image} alt=""  />
                                                </a>
                                             </div>
                                          </li>
                                          <li className="col-md-7 col-sm-9 col-xs-12">
                                             <div className="desc post-content" onClick={() => handleNavigation(item, index)}>
                                                <h5><a href={process.env.REACT_APP_DOMAIN_NAME+'/'+item.category+'/'+item.url}>{item.title}</a></h5>
                                                <ul className="post-tools"><a href={process.env.REACT_APP_DOMAIN_NAME+'/'+item.category+'/'+item.url}>
                                                   <li> {item.created_at} </li></a>
                                                </ul>
                                             </div>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              )
                           })}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
}
export default AllTimeBestArticles;