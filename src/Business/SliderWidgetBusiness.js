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
import React from "react";
import { useNavigate } from "react-router-dom";


function SliderWidgetBusiness(props) {
   const navigate = useNavigate()
   const handleNavigation = (item) => {
      console.log(item);

      navigate(`/${item.category}/${item.url}`, { state: { item } });
   }
   return (
      <>
         <div className="widget widget-bg ">
            <div className="heading">
               <h2 className="main-heading">Post Widget</h2>
               <span className="heading-ping"></span>
            </div>
            <div className="item">
               <div className="latest-news-grid grid-1">
                  {props.dataObject?.locations?.BussGeneral.slice(0, 1).map((item, index) => {
                     console.log(item);
                     return (
                        <div key={index}>
                           <div className="picture">
                              <div className="category-image">
                                 <a href={process.env.REACT_APP_DOMAIN_NAME+'/'+item.category+'/'+item.url}>
                                    <img alt="" className="img-responsive" src={item.image} style={{ height: "250px", width: "330px" }} />
                                 </a>
                              </div>
                           </div>
                           <div className="detail">
                              <div className="caption">
                                 <h5>
                                    <a href={process.env.REACT_APP_DOMAIN_NAME+'/'+item.category+'/'+item.url}>{item.title}</a>
                                 </h5>
                              </div>
                              <ul className="post-tools">
                                 <li> by <a href=""> <strong> {item.authored_by}</strong> </a></li>
                                 <li>  {item.created_at} </li>
                              </ul>
                           </div>
                        </div>
                     )
                  })}
               </div>
            </div>

         </div>
      </>
   )
}
export default SliderWidgetBusiness;