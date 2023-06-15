import React from "react";
// import P12 from '../images/posts/12.jpg'; 
// import P11 from '../images/posts/11.jpg'; 
// import P10 from '../images/posts/10.jpg'; 
// import P13 from '../images/posts/13.jpg'; 
// import P8 from '../images/posts/8.jpg'; 
import P7 from '../images/posts/7.jpg'; 
import P5 from '../images/posts/5.jpg'; 
import P4 from '../images/posts/4.jpg';
import P3 from '../images/posts/3.jpg'; 
import P2 from '../images/posts/2.jpg';
import P1 from '../images/posts/1.jpg';

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
import '../css/royal-slider/rs-default.png';
import '../css/breakingNews.css';
import '../css/font-awesome.min.css';
import '../css/owl.carousel.css';
import '../css/zerogrid.css';
import '../fonts/glyphicons-halflings-regular.svg';
import '../css/royal-slider/rs-default.css';

function Gallery() {
    return(
        <>
        <section class="photo-gallery-section">
         <div class="container-flude">
            <div class="row">
               <div class="col-md-12 col-xs-4 col-sm-4">
                  {/* <div class="photo-gallery-slider owl-carousel owl-theme"> */}
                     <div class="item" style={{height:"150px", width:"224px",display:"inline",float:"left",}}>
                        <a href={P1} class="tt-lightbox"> 
                        <img class="img-responsive center-block" alt="" src={P1}/> </a>
                     </div>
                     <div class="item" style={{height:"150px", width:"224px",display:"inline", float:"left"}}>
                        <a href="images/posts/2.jpg" class="tt-lightbox"> 
                        <img class="img-responsive center-block" alt="" src={P2}/> </a>
                     </div>
                     <div class="item" style={{height:"150px", width:"224px",display:"inline", float:"left"}}>
                        <a href="images/posts/3.jpg" class="tt-lightbox"> 
                        <img class="img-responsive center-block" alt="" src={P3}/> </a>
                     </div>
                     <div class="item" style={{height:"150px", width:"224px",display:"inline", float:"left"}}>
                        <a href="images/posts/4.jpg" class="tt-lightbox"> 
                        <img class="img-responsive center-block" alt="" src={P4}/> </a>
                     </div>
                     <div class="item" style={{height:"150px", width:"224px",display:"inline",float:"left"}}>
                        <a href="images/posts/5.jpg" class="tt-lightbox">
                             <img class="img-responsive center-block" alt="" src={P5}/> </a>
                     </div>
                     <div class="item" style={{height:"150px", width:"224px",display:"inline",float:"left"}}>
                        <a href="images/posts/7.jpg" class="tt-lightbox"> 
                        <img class="img-responsive center-block" alt="" src={P7}/> </a>
                     </div>
                     {/* <div class="item">
                        <a href="images/posts/8.jpg" class="tt-lightbox"> 
                        <img class="img-responsive center-block" alt="" src={P8}/> </a>
                     </div>
                     <div class="item">
                        <a href="images/posts/13.jpg" class="tt-lightbox"> 
                        <img class="img-responsive center-block" alt="" src={P13}/> </a>
                     </div>
                     <div class="item">
                        <a href="images/posts/10.jpg" class="tt-lightbox"> 
                        <img class="img-responsive center-block" alt="" src={P10}/> </a>
                     </div>
                     <div class="item">
                        <a href="images/posts/11.jpg" class="tt-lightbox"> 
                        <img class="img-responsive center-block" alt="" src={P11}/> </a>
                     </div>
                     <div class="item">
                        <a href="images/posts/12.jpg" class="tt-lightbox"> 
                        <img class="img-responsive center-block" alt="" src={P12}/> </a>
                     </div> */}
                  </div>
               </div>
            </div>
         {/* </div> */}
      </section>
        </>
    );
}
export default Gallery;