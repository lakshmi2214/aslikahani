import React from "react";
// import logosmall from '../images/logo-small.jpg';
import logosmall from "../images/logo-round.png";

import I8 from '../images/posts/Fashion_Transformed.jpg';
import I1 from '../images/posts/KATHAL.jpg';
import '../css/style.css'
function FooterCategory() {
 

    return(
        <div>            
 <footer>
 <div className="footer-top bg-dark" style={{paddingTop:"45px"}}>
 {/* <div className="container"> */}
 <div className='' style={{paddingLeft:"7%", paddingRight:"7%"}}>
 <div className="row">
 <div className="col-md-3 col-sm-6 col-xs-12">
 <div className="footer-block" style={{bottom:"10px"}}>
 <img src={ logosmall } style={{height:"125px",paddingRight:"50px",paddingTop:"5px"}} alt="footerImg"/>
 <p style={{margin:"auto"}}>A captivating platform that takes you on a journey through the realms of imagination, inspiration and cultural richness. Asli Kahani, meaning "Real Story" in Hindi, is a celebration of narratives that connect us, embracing diverse voices and bringing forth compelling tales from around the country.</p>
 </div>
 </div>

                 <div className="col-md-3 col-sm-6 col-xs-12 no-padding">
                <h2>Recent Posts</h2>
                <ul className="tabs-posts">
                <li>
                          <div className="pic">
                            <a href={process.env.REACT_APP_DOMAIN_NAME + '/home/kathal-a-jackfruit-mystery-an-enlightening-satire'}>
                              <img alt="aslikahaniimage" className="img-responsive" src={I1} /></a> </div>
                          <div className="caption1"> <a href={process.env.REACT_APP_DOMAIN_NAME + '/home/kathal-a-jackfruit-mystery-an-enlightening-satire'}>Kathal: A Jackfruit Mystery: An Enlightening Satire</a>
                          </div>
                          <ul className="post-tools">
                          <li> 3 Hours Ago </li>
                          </ul>
                        </li>
                        <li>
                          <div className="pic">
                            <a href={process.env.REACT_APP_DOMAIN_NAME + '/home/navigating-job-mobility-in-the-economy'}>
                              <img alt="aslikahaniimage" className="img-responsive" src={I8} /></a> </div>
                          <div className="caption1"> <a href={process.env.REACT_APP_DOMAIN_NAME + '/home/navigating-job-mobility-in-the-economy'}>Navigating Job Mobility In The Economy</a>
                          </div>
                          <ul className="post-tools">
                          <li> 8 Hours Ago </li>
                          </ul>
                        </li>
                  <br></br>
                </ul>
              </div>
              <div className="col-xs-12 col-md-3 col-sm-6 ">
              <h2>Most Read Articles</h2>
                     <ul className="tabs-posts twitter-widget">
                        <li>
                           <div className="caption1">
                            <a href={process.env.REACT_APP_DOMAIN_NAME + '/home/a-beginners-guide-to-books'} className="url"> A Beginners' Guide To Books 
                              </a>
                           </div>
                        </li>
                        <li>
                           <div className="caption1"><a href= {process.env.REACT_APP_DOMAIN_NAME + '/home/nurturing-maternal-mental-health'} className="url">Nurturing Maternal Mental Health
                           </a>
                           </div>
                        </li>
                        <li>
                           <div className="caption1"><a href={process.env.REACT_APP_DOMAIN_NAME + '/home/tracing-the-stories-behind-common-phrases'} className="url">Tracing The Stories Behind Common Phrases
                           </a>
                           </div>
                        </li>
                     </ul>
                  </div>
                <div className="col-md-3 col-sm-6 col-xs-12 no-padding">
                <h2>Contact Detail</h2>
                <div className="footer-detail">
                <ul className="personal-info">
                           <li><i className="fa fa-map-marker"></i>#280/1, Sampige Road, 18th cross, Malleshwaram.</li>
                           <li><i className="fa fa-envelope"></i> connect@aslikahani.com </li>
                           {/* <li><i className="fa fa-phone"></i> +99 333 1234567 </li> */}
                        </ul>
                </div>
                <div className="social-media-icons">
                <ul>
                <li><a href=" https://www.facebook.com/aslikahani.in"><i className="ti-facebook"></i> </a></li>
                        <li><a href="https://twitter.com/aslikahani_in"><i className="ti-twitter"></i></a></li>
                        <li><a href="https://www.youtube.com/@AsliKahani"><i className="ti-youtube"></i></a></li>
                        <li><a href=" https://www.instagram.com/aslikahani.in/"><i className="ti-instagram"></i></a></li>
                        <li><a href="https://open.spotify.com/show/3Xg7iOie2Yct06H4GyXnGj"><i className="fa fa-spotify"></i></a></li>
                        
                          </ul>
                    </div>
                </div>
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
 </footer>
        </div>
    );
}
export default FooterCategory;