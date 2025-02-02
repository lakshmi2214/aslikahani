// import React from "react";
// import About from "./About";
// import Instagram from './Instagram';
// import Twitter from './Twitter';

// function Footer() {
//    return (

//       <>
//          <div className="footer-white">
//             <div className="container">
//                <div className="footer-top">
//                   <div className="row">
//                      <About />
//                      <div className="col-xs-12 col-md-3 col-sm-6">
//                         <h3>Most Read Articles</h3>
//                         <ul className="tabs-posts">
//                            <li>
//                               <div className="caption1" style={{}}>
//                                  <a href={process.env.REACT_APP_DOMAIN_NAME + '/home/the-starry-night-van-goghs-enigmatic-masterpiece'} className="url"> The Starry Night: Van Gogh's Enigmatic Masterpiece
//                                  </a>
//                                  <ul className="post-tools">
//                                     <li>  01 July 2023  </li>
//                                  </ul>
//                               </div>
//                            </li>
//                            <li>
//                               <div className="caption1"><a href={process.env.REACT_APP_DOMAIN_NAME + '/home/tracing-the-stories-behind-common-phrases'} className="url">Tracing The Stories Behind Common Phrases
//                               </a>
//                                  <ul className="post-tools">
//                                     <li>  22 June 2023  </li>
//                                  </ul>
//                               </div>
//                            </li>
//                            <li>
//                               <div className="caption1"><a href={process.env.REACT_APP_DOMAIN_NAME + '/home/an-overview-of-cosmetic-surgery-and-beauty-treatments'} className="url">An Overview of Cosmetic Surgery and Beauty Treatments
//                               </a>
//                                  <ul className="post-tools">
//                                     <li>  07 June 2023  </li>
//                                  </ul>
//                               </div>
//                            </li>
//                         </ul>
//                      </div>
//                      <Twitter />
//                      <Instagram />
//                   </div>
//                </div>
//                <div className="footer-link">
//                   <div className="container">
//                      <div className="row">
//                         <div className="col-md-12 col-sm-12 col-xs-12">
//                            <ul>
//                               <li><a href="/">Privacy Policy </a></li>
//                               <li><a href="/">About Us</a></li>
//                               <li><a href="/">FAQ</a></li>
//                               <li><a href="/">Blog</a></li>
//                            </ul>
//                            <div className="copyright"> <span>&copy; 2023 All rights reserved. Aslikahani</span> </div>
//                         </div>
//                      </div>
//                   </div>
//                </div>
//             </div>
//          </div>

//       </>
//    )


// }
// export default Footer;


import React from "react";
import AslhiKahani from '../../images/logo-small.jpg'
import './footer.css'

function Footer() {
   return (

      <>
         <section className="footer-section">
               <footer class="footerInner">
            <div className="container">
                  <div class="footer-container">
                     <div class="footer-logo">
                        <img src={AslhiKahani} alt="Asli Kahani Logo"/>
                     </div>
                     <div class="footer-description">
                        <p>A captivating platform that takes you on a journey through the realms of imagination, inspiration, and cultural richness. Asli Kahani, meaning "Real Story" in Hindi, is a celebration of narratives that connect us, embracing diverse voices and bringing forth compelling tales from around the country.</p>
                     </div>
                     <div class="footer-links">
                        <a href="#"><i class="fas fa-book"></i> E-Magazine</a>
                        <a href="#"><i class="fab fa-youtube"></i> Videos</a>
                        <a href="#"><i class="fab fa-spotify"></i> Asli Kahani Podcasts</a>
                     </div>
                  </div>

                  <div class="footer-categories">
                     <a href="#">Entertainment</a>
                     <a href="#">Technology</a>
                     <a href="#">Business</a>
                     <a href="#">Travel</a>
                     <a href="#">Education</a>
                     <a href="#">Finance</a>
                     <a href="#">Lifestyle</a>
                     <a href="#">Art & Culture</a>
                  </div>

                  <hr class="footer-divider"/>

                     <div class="footer-bottom">
                        <div class="footer-contact">
                           <p>Email: <span>connect@aslikahani.com</span></p>
                           <p>Located at: <span>#280/1, Sampige Road, 18th cross, Malleshwaram.</span></p>
                        </div>
                        <div class="footer-social">
                           <a href="#"><i class="fab fa-x-twitter"></i></a>
                           <a href="#"><i class="fab fa-instagram"></i></a>
                           <a href="#"><i class="fab fa-facebook"></i></a>
                        </div>
                     </div>

                     <p class="footer-copyright">Copyright 2025 Asli Kahani. All rights reserved.</p>
            </div>
               </footer>
         </section>

      </>
   )


}
export default Footer;








