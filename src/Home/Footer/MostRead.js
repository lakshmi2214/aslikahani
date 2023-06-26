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

function MostRead(props) {
   const navigate = useNavigate()
   const handleNavigation = (item) => {
      console.log(item);

      navigate(`/home/${item.url}`, { state: {item} });
   }
  return(
        <>
        <div class="col-xs-12 col-md-3 col-sm-6 ">
                     <h2>Most Read Articles</h2>
                     <ul class="tabs-posts">
                        <br></br>
                     {props.dataObject?.locations?.Recent.slice(0,4).map((item,index)=>{
                                     console.log(item);
                                      return(
                                      <div key={index}>
                        <li>
                           <div class="caption1" onClick={() => handleNavigation(item, index)}> 
                           <a href={process.env.REACT_APP_DOMAIN_NAME+ '/home/' +item.url}>{item.title}</a> </div>
                           <ul class="post-tools" onClick={() => handleNavigation(item, index)}>
                              <li>  {item.created_at} </li>
                           </ul>
                        </li>
                        </div>
                                      )})}
                       
                     </ul>
                  </div>
        </>
    );
}
export default MostRead;