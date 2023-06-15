import React from "react";
import About from "./About";
import MostRead from "./MostRead";
import Instagram from './Instagram';
import Twitter from './Twitter';

function Footer() {
    return(
        <>
              <footer class="footer-white">
         <div class="footer-top">
            <div class="container">
               <div class="row">
                  <About />
                  <MostRead />
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
                     <div class="copyright"> <span>&copy; 2017 All rights reserved. NewsForest</span> </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
        </>
    );
}
export default Footer;