import React from 'react';
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

function ConnectEntertainment(props) {
   const navigate = useNavigate()
   const handleNavigation = (item) => {
      console.log(item);

      navigate(`/home/${item.url}`, { state: item });
   }
   return (
      <>
         <div className="widget widget-bg">
            {props.dataObject?.categories?.slice(0, 1).map((item) => {
               return (
                  item.advertisements.slice(1, 2).map((item, index) => {
                     console.log(item)

                     return (
                        <div key={index}>
                           <div className="ad-div style-box">
                              <a href={process.env.REACT_APP_DOMAIN_NAME + '/art-and-culture' + item.url}>
                                 <img src={item.image} className="img-responsive " alt="" />
                              </a>
                           </div>
                           <div className="detail">
                              <div className="caption" onClick={() => handleNavigation(item, index)}>
                                 <h5>
                                    <a href={process.env.REACT_APP_DOMAIN_NAME + '/art-and-culture' + item.url}>{item.description}</a>
                                 </h5>
                              </div>
                           </div>
                        </div>
                     )
                  }))
            })}

         </div>
      </>
   )
}
export default ConnectEntertainment;