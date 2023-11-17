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

function RecentTravel(props) {
   const navigate = useNavigate();
   const handleNavigation = (item) => {
      // console.log(item);

      navigate(`/${item.category}/${item.url}`, { state: { item } });
   }
   return (
      <>
         <div className="widget widget-bg">
            <div className="tabs">
               <div role="tabpanel">
                  <ul className="nav nav-tabs nav-justified" role="tablist">
                     <li className="active" role="presentation" > <a aria-controls="popularRecent" aria-expanded="true" data-toggle="tab"
                        href="#popularRecent" role="tab" style={{ color: "white" , backgroundColor:"#d32415"}}>Popular </a> </li>
                  </ul>
                  <br></br>
                  <div className="small-grid-container">
                     <ul className="small-grid">
                        <li>
                           {props.dataObject?.locations?.TravelGeneral.slice(0, 4).map((item, index) => {
                              // console.log(item);
                              return (
                                 <div key={index}>
                                    <div className="small-post">
                                       <div className="small-thumb small-img">
                                          <a href={process.env.REACT_APP_DOMAIN_NAME+'/'+item.category+'/'+item.url}>
                                             <img alt="" src={item.image} style={{ height: "85px", width: "85px" }} className="" />
                                          </a>
                                       </div>
                                       <div className="post-content post-contents">
                                          <h3> <a href={process.env.REACT_APP_DOMAIN_NAME+'/'+item.category+'/'+item.url}>{item.title}</a> </h3>
                                          <ul className="post-tools" onClick={() => handleNavigation(item, index)}>
                                             <li>  {item.created_at} </li>
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
         </div>
      </>
   );
}
export default RecentTravel;