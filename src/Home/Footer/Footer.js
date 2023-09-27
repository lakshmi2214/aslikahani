import React from "react";
import About from "./About";
import Instagram from './Instagram';
import Twitter from './Twitter';

function Footer() {
   return (

      <div>
         <section className="footer-white">
            <div className="footer-top">
               <div className="container">
                  <div className="row">
                     <About />
                     <div className="col-xs-12 col-md-3 col-sm-6 ">
                        <h2>Most Read Articles</h2>
                        <ul className="tabs-posts">
                           <li>
                              <div className="caption1" style={{ paddingTop: "15px" }}>
                                 <a href={process.env.REACT_APP_DOMAIN_NAME + '/home/the-starry-night-van-goghs-enigmatic-masterpiece'} className="url"> The Starry Night: Van Gogh's Enigmatic Masterpiece
                                 </a>
                                 <ul className="post-tools">
                                    <li>  01 July 2023  </li>
                                 </ul>
                              </div>
                           </li>
                           <li>
                              <div className="caption1"><a href={process.env.REACT_APP_DOMAIN_NAME + '/home/tracing-the-stories-behind-common-phrases'} className="url">Tracing The Stories Behind Common Phrases
                              </a>
                                 <ul className="post-tools">
                                    <li>  22 June 2023  </li>
                                 </ul>
                              </div>
                           </li>
                           <li>
                              <div className="caption1"><a href={process.env.REACT_APP_DOMAIN_NAME + '/home/an-overview-of-cosmetic-surgery-and-beauty-treatments'} className="url">An Overview of Cosmetic Surgery and Beauty Treatments
                              </a>
                                 <ul className="post-tools">
                                    <li>  07 June 2023  </li>
                                 </ul>
                              </div>
                           </li>
                        </ul>
                     </div>
                     <Twitter />
                     <Instagram />
                  </div>
               </div>
            </div>
            <div className="footer-link bg-white">
               <div className="container">
                  <div className="row">
                     <div className="col-md-12 col-sm-12 col-xs-12">
                        <ul>
                           <li><a href="/">Privacy Policy </a></li>
                           <li><a href="/">About Us</a></li>
                           <li><a href="/">FAQ</a></li>
                           <li><a href="/">Blog</a></li>
                        </ul>
                        <div className="copyright"> <span>&copy; 2023 All rights reserved. Aslikahani</span> </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

      </div>
   )


}
export default Footer;

