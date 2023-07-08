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


function SliderWidgetEntertainment(props) {
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
                  <h2 className="main-heading">Post Widget</h2>

               </div>
            </div>
            <div className="row">
               <article className="col-md-6 col-sm-6 col-xs-12">
                  <div className="grid-1">

                  {props.dataObject?.locations?.General.slice(4,5).map((item, index) => {
                     console.log(item);
                     return (
                           <div key={index}>
                              <div className="picture">
                                 <div className="category-image" onClick={() => handleNavigation(item, index)}>
                                    <a href={process.env.REACT_APP_DOMAIN_NAME+'/'+item.category+'/'+item.url}>
                                       <img alt="" className="img-responsive" src={item.image}
                                          style={{ height: "190px" }} />
                                    </a>
                                 </div>
                              </div>
                              <div className="detail" >
                                 <div className="caption">
                                    <h5 onClick={() => handleNavigation(item, index)} style={{width:"300px",fontSize: "18px",fontweight: "500",color:"black"}}>
                                       <a href={process.env.REACT_APP_DOMAIN_NAME+'/'+item.category+'/'+item.url}>{item.title}</a>
                                    </h5>
                                 </div>
                                 <ul className="post-tools" onClick={() => handleNavigation(item, index)}>
                                    <li> by <a href={process.env.REACT_APP_DOMAIN_NAME+'/'+item.category+'/'+item.url}> <strong> {item.authored_by}</strong> </a></li>
                                 </ul>
                              </div>
                           </div>
                        )
                     })}


                  </div>
               </article>
               
              </div>
         </div>
      </>
   );
}
export default SliderWidgetEntertainment;