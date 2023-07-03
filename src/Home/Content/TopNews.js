import React from "react";
import { useNavigate } from "react-router-dom";
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

function TopNews(props) {
   const navigate = useNavigate();
   const handleNavigation = (item) => {
      console.log(item);

      navigate(`/${item.category}/${item.url}`, { state: { item } });
   }

   return (
      <>
         <div className="category-widget">
            <h4>Top Articles</h4>

            <div className="grid-1">
               {props.dataObject?.locations?.TopNews.slice(0, 6).map((item, index) => {
                  console.log(item);
                  return (
                     <div key={index}>
                        <div className="picture">

                           <div className="category-image" onClick={() => handleNavigation(item, index)}>
                              <a href={process.env.REACT_APP_DOMAIN_NAME + '/home/' + item.url}>
                                 <img alt="" className="img-responsive" src={item.image} />
                              </a>
                           </div>
                        </div>
                        <div className="detail">
                           <div className="caption">
                              <h5 onClick={() => handleNavigation(item, index)}>
                                 <a href={process.env.REACT_APP_DOMAIN_NAME + '/home/' + item.url}>{item.title}</a>
                              </h5>
                           </div>
                        </div>
                     </div>
                  )
               })}
            </div>
         </div>
      </>
   );
}
export default TopNews;