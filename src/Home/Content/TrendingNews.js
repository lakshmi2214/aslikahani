import React from "react";
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
import { useNavigate } from "react-router-dom";


function TrendingNews(props) {
   const navigate = useNavigate();
   const handleNavigation = (item) => {
      console.log(item);

      navigate(`/${item.category}/${item.url}`, { state: { item } });
   }

   return (
      <>
         <div className="section">
            <div className="col-md-12 col-xs-12 col-sm-12 nopadding">
               <div className="heading">
                  <h2 className="main-heading">Trending Articles</h2>
               </div>
            </div>
            <article className="col-md-12 col-sm-12 col-xs-12 nopadding">

               <div className="grid-1">
                  {props.dataObject?.locations?.TrendingNews.slice(0, 1).map((item, index) => {
                     console.log(item);
                     return (
                        <div key={index}>
                           <div className="picture">
                              <div className="category-image" onClick={() => handleNavigation(item, index)}>
                                 <a href={process.env.REACT_APP_DOMAIN_NAME+'/'+item.category+'/'+item.url}>
                                    <img alt="" className="img-responsive" src={item.image} style={{ height: "300px" }} /></a>
                              </div>
                           </div>
                           <div className="detail">
                              <div className="caption" onClick={() => handleNavigation(item, index)}>
                                 <h5><a href={process.env.REACT_APP_DOMAIN_NAME+'/'+item.category+'/'+item.url}>{item.title}</a></h5>
                                 <ul className="post-tools" onClick={() => handleNavigation(item, index)}>
                                    <li> by <a href={process.env.REACT_APP_DOMAIN_NAME+'/'+item.category+'/'+item.url}> <strong>{item.authored_by}</strong> </a></li>
                                    <li>  {item.created_at} </li>
                                 </ul>
                              </div>
                              <p onClick={() => handleNavigation(item, index)}> {item.description}
                              </p>
                           </div>

                        </div>
                     )
                  })}


               </div>
               <div className="row" style={{width:"fit-content"}}>
                  <div className="col-md-6 col-sm-6 col-xs-12">
                     <div className="small-grid-container">
                        <ul className="small-grid">
                           <li>
                              {props.dataObject?.locations?.TrendingNews.slice(1, 4).map((item, index) => {
                                 console.log(item);
                                 return (
                                    <div key={index}>
                                       <div className="small-post">
                                          <div className="small-thumb small-img"> <a href={process.env.REACT_APP_DOMAIN_NAME+'/'+item.category+'/'+item.url}>
                                             <img alt="" src={item.image} className="" style={{ height: "85px", width: "85px" }} /></a> </div>
                                          <div className="post-content posts-contents">
                                             <h3> <a href={process.env.REACT_APP_DOMAIN_NAME+'/'+item.category+'/'+item.url}>{item.title}</a> </h3>
                                             <ul className="post-tools">
                                             </ul>
                                          </div>
                                       </div>
                                    </div>
                                 )
                              })}

                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-12">
                     <div className="small-grid-container">
                        <ul className="small-grid">
                           <li>
                              {props.dataObject?.locations?.TrendingNews.slice(4, 7).map((item, index) => {
                                 console.log(item);
                                 return (
                                    <div key={index}>
                                       <div className="small-post">
                                          <div className="small-thumb small-img">
                                             <a href={process.env.REACT_APP_DOMAIN_NAME+'/'+item.category+'/'+item.url}>
                                                <img alt="" src={item.image} style={{ height: "85px", width: "85px" }} className="" />
                                             </a>
                                          </div>
                                          <div className="post-content posts-contents">
                                             <h3> <a href={process.env.REACT_APP_DOMAIN_NAME+'/'+item.category+'/'+item.url}>{item.title}</a> </h3>
                                             <ul className="post-tools">
                                             </ul>
                                          </div>
                                       </div>
                                    </div>
                                 )
                              })}

                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </article>
         </div>
      </>
   );
}
export default TrendingNews;