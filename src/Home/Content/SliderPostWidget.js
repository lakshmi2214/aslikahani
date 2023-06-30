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

function SliderPostWidget(props) {
   const navigate = useNavigate();
   const handleNavigation = (item, index) => {
      console.log(item);

      navigate(`/home/${item.url}`, { state: { item } });
   }
   return (
      <>
         <div className="heading">
            <h2 className="main-heading"> Post Widget</h2>
            <span className="heading-ping"></span>
         </div>
         <div className="item">
            <div className="latest-news-grid grid-1">
               {props.dataObject?.locations?.SliderWidget.slice(0, 2).map((item, index) => {
                  console.log(item);
                  return (
                     <div key={index}>
                        <div className="picture">
                           <div className="category-image" onClick={() => handleNavigation(item, index)}>

                              <a href={process.env.REACT_APP_DOMAIN_NAME + '/home/' + item.url}>
                                 <img alt="" className="img-responsive" src={item.image} style={{ height: "250px", width: "400px" }} />
                              </a>
                           </div>
                        </div>
                        <div className="detail">
                           <div className="caption" onClick={() => handleNavigation(item, index)}>
                              <h5>
                                 <a href={process.env.REACT_APP_DOMAIN_NAME + '/home/' + item.url}>{item.title}</a>
                              </h5>
                           </div>
                           <ul className="post-tools" onClick={() => handleNavigation(item, index)}>
                              <li> by <a href=""> <strong> {item.authored_by}</strong> </a></li>
                              <li>  {item.created_at} </li>
                           </ul>
                        </div>
                     </div>
                  )
               })}
            </div>
         </div>
      </>
   );
}
export default SliderPostWidget;