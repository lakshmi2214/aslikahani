import React from "react";
import '../css/style.css';
import '../css/animate.min.css';
import '../css/megaMenu.css';
import '../css/colors/amethyst.css';
import '../css/colors/blue.css';
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
import '../css/breakingNews.css';
import '../css/font-awesome.min.css';
import '../css/zerogrid.css';
import '../css/royal-slider/rs-default.css';
import '../css/owl.carousel.css';
import { useNavigate } from "react-router-dom";
function TechnologyPosts(props) {

   const navigate = useNavigate()
   const handleNavigation = (item) => {
      console.log(item);

      navigate(`/technology/${item.url}`, { state: { item } });
   }
   return (
      <>
         <div className="row">
            <article className="col-md-6 col-sm-6 col-xs-12">
               <div className="grid-1">
                  {props.dataObject?.locations?.SliderWidget.slice(2, 4).map((item, index) => {
                     console.log(item);
                     return (
                        <div key={index}>
                           <div className="picture">
                              <div className="category-image" onClick={() => handleNavigation(item, index)}>
                                 <a href={process.env.RECT_APP_DOMAIN_NAME+ "/technology/" +item.url}>
                                    <img alt="" className="img-responsive" src={item.image} style={{ height: "240px", widtth: "300px" }} />
                                 </a>
                              </div>
                           </div>
                           <div className="detail">
                              <div className="caption" onClick={() => handleNavigation(item, index)}>
                                 <h5>
                                    <a href={process.env.RECT_APP_DOMAIN_NAME+ "/technology/" +item.url}>{item.title}</a>
                                 </h5>
                              </div>
                              <ul className="post-tools" onClick={() => handleNavigation(item, index)}>
                                 <li> by <a href={process.env.RECT_APP_DOMAIN_NAME+ "/technology/" +item.url}> <strong> {item.authored_by}</strong> </a></li>
                              </ul>
                           </div>
                        </div>
                     )
                  })}
               </div>
            </article>
            <article className="col-md-6 col-sm-6 col-xs-12">
               <div className="grid-1">
                  {props.dataObject?.locations?.TopNews.slice(1, 3).map((item, index) => {
                     console.log(item);
                     return (
                        <div key={index}>
                           <div className="picture">
                              <div className="category-image" onClick={() => handleNavigation(item, index)}>
                                 <a href={process.env.RECT_APP_DOMAIN_NAME+ "/technology/" +item.url}>
                                    <img alt="" className="img-responsive" src={item.image} style={{ height: "240px", widtth: "300px" }} />
                                 </a>
                              </div>
                           </div>
                           <div className="detail">
                              <div className="caption" onClick={() => handleNavigation(item, index)}>
                                 <h5>
                                    <a href={process.env.RECT_APP_DOMAIN_NAME+ "/technology/" +item.url}>{item.title}</a>
                                 </h5>
                              </div>
                              <ul className="post-tools" onClick={() => handleNavigation(item, index)}>
                                 <li> by <a href={process.env.RECT_APP_DOMAIN_NAME+ "/technology/" +item.url}> <strong> {item.authored_by}</strong> </a></li>
                              </ul>
                           </div>
                        </div>
                     )
                  })}
               </div>
            </article>
         </div>
      </>
   )
}
export default TechnologyPosts;