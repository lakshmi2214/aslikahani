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
import { useNavigate, Link } from "react-router-dom";

function PopularRecent(props) {
   const navigate = useNavigate();
   const handleNavigation = (item) => {
      console.log(item);

      navigate(`/${item.category}/${item.url}`, { state: { item } });
   }

   return (
      <>
         <div className="widget side-popular-widget">
            <div className="side-popular-heading">
               <h2>Most Popular</h2>
            </div>
            <div className="side-popular-list">
               {(props.relatedArticles || props.dataObject?.locations?.Popular || []).slice(0, 5).map((item, index) => {
                  return (
                     <div key={index} className="side-popular-item">
                        <div className="side-popular-thumb">
                           <Link to={'/' + item.category + '/' + item.url}>
                              <img alt="" src={item.image} />
                           </Link>
                        </div>
                        <div className="side-popular-content">
                           <h3>
                              <Link to={'/' + item.category + '/' + item.url}>{item.title}</Link>
                           </h3>
                           <span className="side-popular-date">{item.created_at}</span>
                        </div>
                     </div>
                  );
               })}
            </div>
         </div>
      </>
   );
}
export default PopularRecent;