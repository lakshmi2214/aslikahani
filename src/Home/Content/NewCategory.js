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
import Post19 from '../../images/ads/adzone160.png';

function NewCategory() {
    return(
        <>
        <div className="category-widget">
                        <h4>New Category</h4>
                        <div className="category-widget-detail">
                           <ul>
                              <li><a href=""><i className="ti-car"></i>travel</a></li>
                              <li><a href=""><i className="ti-agenda"></i>History</a></li>
                              <li><a href=""><i className="ti-world"></i>World</a></li>
                              <li><a href="">fashion</a></li>
                              <li><a href=""><i className="ti-apple"></i>Health</a></li>
                              <li><a href=""><i className="ti-basketball"></i>Sports</a></li>
                              <li><a href=""> <i className="ti-camera"></i> Food</a></li>
                              <li><a href=""><i className="ti-bag"></i>Life Style</a></li>
                              <li><a href=""><i className="ti-crown"></i>Nature</a></li>
                              <li><a href=""><i className="ti-id-badge"></i>Technology</a></li>
                              <li><a href=""> <i className="ti-camera"></i> photography</a></li>
                           </ul>
                        </div>
                     </div>
                     <div className="ad-div text-center">
                        <a href="" target="_blank">
                            <img src={Post19} className="img-responsive" alt=""/></a>
                     </div>
        </>
    );
}
export default NewCategory;