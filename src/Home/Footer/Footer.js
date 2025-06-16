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
import { Link } from "react-router-dom";

function Footer() {
   return (

      <>
         <section className="footer-section">
               <footer className="footerInner">
            <div className="container">
                  <div className="footer-container">
                     <div className="footer-logo">
                        <img src={AslhiKahani} alt="Asli Kahani Logo"/>
                     </div>
                     <div className="footer-description">
                        <p>A captivating platform that takes you on a journey through the realms of imagination, inspiration, and cultural richness. Asli Kahani, meaning "Real Story" in Hindi, is a celebration of narratives that connect us, embracing diverse voices and bringing forth compelling tales from around the country.</p>
                     </div>
                     <div className="footer-links">
                        <Link to="/emagazine"><i className="fas fa-book"></i> E-Magazine</Link>
                        <a href="https://www.youtube.com/@AsliKahani" target="blank"><i className="fab fa-youtube"></i> Videos</a>
                        <a href="https://www.linkedin.com/company/aslikahani/posts/?feedView=all" target="blank"><i className="fab fa-linkedin"></i> Asli Kahani LinkedIn</a>
                        <a href="https://open.spotify.com/show/3Xg7iOie2Yct06H4GyXnGj" target="blank"><i className="fab fa-spotify"></i> Asli Kahani Podcasts</a>
                     </div>
                  </div>

                  <div className="footer-categories">
                     <Link to="/Entertainment">Entertainment</Link>
                     <Link to="/Technology">Technology</Link>
                     <Link to="/Business">Business</Link>
                     <Link to="/Travel">Travel</Link>
                     <Link to="/Education">Education</Link>
                     <Link to="/Lifestyle">Lifestyle</Link>
                     <Link to="/Art-and-Culture">Art & Culture</Link>
                  </div>

                  <hr className="footer-divider"/>

                     <div className="footer-bottom">
                        <div className="footer-contact">
                           <p>Email: <span>connect@aslikahani.com</span></p>
                           <p>Located at: <span>#280/1, Sampige Road, 18th cross, Malleshwaram.</span></p>
                        </div>
                        <div className="footer-social">
                           <a href="https://x.com/kahaniasli" target="blank"><i className="fab fa-x-twitter"></i></a>
                           <a href="http://instagram.com/aslikahani/" target="blank"><i className="fab fa-instagram"></i></a>
                           <a href="https://www.facebook.com/kahaniasli" target="blank"><i className="fab fa-facebook"></i></a>
                        </div>
                     </div>

                     <p className="footer-copyright">Copyright 2025 Asli Kahani. All rights reserved.</p>
            </div>
               </footer>
         </section>

      </>
   )


}
export default Footer;








