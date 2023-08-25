import React from "react";
import About from "./About";
import Instagram from './Instagram';
import Twitter from './Twitter';
import { useNavigate } from "react-router-dom";

function Footer(props) {
   const navigate = useNavigate()
   const handleNavigation = (item) => {
      console.log(item);

      navigate(`/home/${item.url}`, { state: { item } });
   }
   return 
   (
      <>
         <footer class="footer-white">
            <div class="footer-top">
               <div class="container">
                  <div class="row">
                     <About />
                     <div class="col-xs-12 col-md-3 col-sm-6 ">
              <h2>Most Read Articles</h2>
                     <ul class="tabs-posts">
                        <li>
                           <div class="caption1" style={{paddingTop:"15px"}}>
                            <a href={process.env.REACT_APP_DOMAIN_NAME + '/home/the-starry-night-van-goghs-enigmatic-masterpiece'} class="url"> The Starry Night: Van Gogh's Enigmatic Masterpiece 
                              </a>
                              <ul class="post-tools">
                                          <li>  01 July 2023  </li>
                                       </ul>
                           </div>
                        </li>
                        <li>
                        <div class="caption1"><a href={process.env.REACT_APP_DOMAIN_NAME + '/home/tracing-the-stories-behind-common-phrases'} class="url">Tracing The Stories Behind Common Phrases
                           </a>
                           <ul class="post-tools">
                                          <li>  22 June 2023  </li>
                                       </ul>
                           </div>
                        </li>
                        <li>
                        <div class="caption1"><a href= {process.env.REACT_APP_DOMAIN_NAME + '/home/an-overview-of-cosmetic-surgery-and-beauty-treatments'} class="url">An Overview of Cosmetic Surgery and Beauty Treatments
                           </a>
                           <ul class="post-tools">
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
            <div class="footer-link bg-white">
               <div class="container">
                  <div class="row">
                     <div class="col-md-12 col-sm-12 col-xs-12">
                        <ul>
                           <li><a href="#">Privacy Policy </a></li>
                           <li><a href="#">About Us</a></li>
                           <li><a href="#">FAQ</a></li>
                           <li><a href="#">Blog</a></li>
                        </ul>
                        <div class="copyright"> <span>&copy; 2023 All rights reserved. Aslikahani</span> </div>
                     </div>
                  </div>  
               </div>
            </div>
         </footer>
      </>
   );
}
export default Footer;