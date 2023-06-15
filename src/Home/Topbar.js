import React from "react";
import '../css/style.css';
import '../css/animate.min.css';
import '../css/megaMenu.css';
import '../css/colors/amethyst.css';
// import '../css/colors/blue.css';
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
// import '../css/colors/midnight-blue.css';
import '../css/royal-slider/rs-default.png';
import '../css/breakingNews.css';
import '../css/font-awesome.min.css';
import '../css/owl.carousel.css';
import '../css/zerogrid.css';
import '../fonts/glyphicons-halflings-regular.svg';
import '../css/royal-slider/rs-default.css';



function Topbar(){
    return(
        <div>
                 <section className="topbar">
         <div className="container">
            <div className="row">
               <div className="col-md-12 col-sm-12 col-xs-12 nopadding">
                  <div className="col-md-6 col-sm-3 col-xs-12">
                     <ul className="social-media-icons-top">
                        <li><a href=" https://www.facebook.com/aslikahani.in"><i className="ti-facebook"></i> </a></li>
                        <li><a href="https://twitter.com/aslikahani_in"><i className="ti-twitter"></i></a></li>
                        <li><a href="https://www.youtube.com/@AsliKahani_in"><i className="ti-youtube"></i></a></li>
                        <li><a hre=" https://www.instagram.com/aslikahani.in/"><i className="ti-instagram"></i></a></li>
                        {/* <li><a hre=""><i className="ti-spotify"></i></a></li> */}
                        {/*<li><a href=""><i className="ti-pinterest"></i></a></li>
                         <li><a href=""><i className="ti-linkedin"></i></a></li>
                        <li><a href=""><i className="ti-google"></i></a></li> */}
                        {/* <li><a href=""><i className="ti-vimeo"></i></a></li>
                        <li><a href=""><i className="ti-themify-favicon"></i></a></li> */}
                     </ul>
                  </div>
                  <div className="col-md-6 col-sm-9 col-xs-12">
                     
                  </div>
               </div>
            </div>
         </div>
      </section>
        </div>
    );
}
export default Topbar;