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

function About() {
   return (
      <>
         <div className="col-md-3 col-sm-6 col-xs-12 no-padding">
            <h3>About Us</h3>
            <div className="footer-block">
               <p>A captivating platform that takes you on a journey through the realms of imagination,
                  inspiration and cultural richness. Asli Kahani, meaning "Real Story" in Hindi, is a celebration
                  of narratives that connect us, embracing diverse voices and bringing forth compelling tales from around the country.
               </p>
               <div className="footer-detail">
                  <ul className="personal-info">
                     <li><i className="fa fa-map-marker"></i> #280/1 2nd Floor, 18th Cross, Malleshwaram.</li>
                     <li><i className="fa fa-envelope"></i> aslikahani.media@gmail.com </li>
                  </ul>
               </div>
               <div className="social-media-icons">
                  <ul>
                     <li><a href=" https://www.facebook.com/aslikahani.in"><i className="ti-facebook"></i> </a></li>
                     <li><a href="https://twitter.com/kahaniasli"><i className="ti-twitter"></i></a></li>
                     <li><a href="https://www.youtube.com/@AsliKahani"><i className="ti-youtube"></i></a></li>
                     <li><a href=" https://www.instagram.com/aslikahani/"><i className="ti-instagram"></i></a></li>
                     <li><a href="https://open.spotify.com/show/3Xg7iOie2Yct06H4GyXnGj"><i className="fa fa-spotify"></i></a></li>
                     </ul>
               </div>
            </div>
         </div>
      </>
   );
}
export default About;