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
import MagazinePosts from "./MagazinePosts";

function MagzinePost1(props) {

   const navigate = useNavigate()
   const handleNavigation = (item) => {
      console.log(item);

      navigate(`/emagazine/${item.url}`, { state: { item } });
   }
   return (
      <>
      {/* <div className="container"> */}
         <div className="row">
            
            <article className="col-sm-2" >
               <div className="post1 ">
                  {props.dataObject?.map((item, index) => {
                     console.log(item);
                     return (
                        <div key={index}>
                           <div className="picture" style={{width:"fit-content"}}>
                              <div className="category-image"onClick={() => handleNavigation(item, index)} >
                                 <a href={process.env.REACT_APP_DOMAIN_NAME+'/emagazine/'+item.url}>
                                    <img alt="" className="img-responsive" src={item.cover_image} style={{ height: "240px", width: "100%" }} />
                                 </a>
                              </div>
                           </div>
                           <div className="detail">
                              <div className="caption" >
                                 <h5>
                                    <a href={process.env.REACT_APP_DOMAIN_NAME+'/emagazine/'+item.url}>{item.title}</a>
                                 </h5>
                              </div>
                              <ul className="post-tools" >
                                 <li> by <a href={process.env.REACT_APP_DOMAIN_NAME+'/emagazine/'+item.url}> <strong> {item.authored_by}</strong> </a></li>
                              </ul>
                           </div>
                        </div>
                     )
                  })}
               </div>
            </article>
          
           
                     </div>
                     {/* </div> */}
                     {/* <MagazinePosts /> */}
                    
      </>
   )
}
export default MagzinePost1;