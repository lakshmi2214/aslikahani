import React from "react";
import logosmall from '../images/logo-small.jpg';
import Posts1 from '../images/small-posts/small-1.jpg';
import Posts2 from '../images/small-posts/small-2.jpg';
// css files
import '../css/style.css'


function FooterBusiness() {
    return(
        <div>            
 <footer>
 <div className="footer-top bg-dark">
 <div className="container">
 <div className="row">
 <div className="col-md-3 col-sm-6 col-xs-12">
 <div className="footer-block">
 <img src={ logosmall } style={{height:"50px",width:"300px",paddingRight:"50px",paddingTop:"5px"}}/>
 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
     labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation .</p>
 </div>
 </div>
 <div className="col-md-3 col-sm-6 col-xs-12 no-padding">
 <h2>Recent Posts</h2>
                     <ul className="tabs-posts">
                     <li>
                           <div className="pic">
                             <a href="standard-post.html">
                            <img alt="" className="img-responsive" src={ Posts1 }/></a> </div>
                           <div className="caption"> <a href="standard-post.html">Stern talking-to from your parents</a> </div>
                           <ul className="post-tools">
                              <li> Jan 21, 2016 </li>
                              <li title="Comments"> <a href=""><i className="ti-thought"></i> 953 </a></li>
                           </ul>
                        </li>
                        <li>
                           <div className="pic"> 
                           <a href="standard-post.html">
                            <img alt="" className="img-responsive" src={ Posts2 }/></a> </div>
                           <div className="caption"> <a href="standard-post.html">The assault on federally supported </a> </div>
                           <ul className="post-tools">
                              <li> Feb 28, 2016 </li>
                              <li title="Comments"> <a href=""><i className="ti-thought"></i> 105</a> </li>
                           </ul>
                        </li>
                     </ul>
                </div>
                <div className="col-xs-12 col-md-3 col-sm-6 ">
                <h2>Most Recent Tags</h2>
                <div className="tag-list">
                <a href="#">design</a> <a href="#">posts</a> <a href="#">graphics</a> <a href="#">magazine</a> <a href="#">html5</a>
				<a href="#">html</a> <a href="#">newspaper</a> <a href="#">template</a> <a href="#">blog</a> <a href="#">html5</a> <a href="#">wordpress</a>
                </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12 no-padding">
                <h2>Contact Detail</h2>
                <div className="footer-detail">
                <ul className="personal-info">
                           <li><i className="fa fa-map-marker"></i> 3rd Floor,Link Arcade BBL, USA.</li>
                           <li><i className="fa fa-envelope"></i> Support@domain.com </li>
                           <li><i className="fa fa-phone"></i> +99 333 1234567 </li>
                        </ul>
                </div>
                <div className="social-media-icons">
                <ul>
                           <li> <a href=""><i className="ti-facebook"></i></a></li>
                           <li> <a href=""><i className="ti-twitter"></i></a></li>
                           <li> <a href=""><i className="ti-instagram"></i></a></li>
                           <li> <a href=""><i className="ti-linkedin"></i></a></li>
                           <li> <a href=""><i className="ti-google"></i></a></li>
                           <li> <a href=""><i className="ti-vimeo"></i></a></li>
                           <li> <a href=""><i className="ti-pinterest"></i></a></li>
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
                        <li><a href="#">Privacy Policy </a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Blog</a></li>
                     </ul>
                     <div className="copyright"> <span>&copy; 2017 All rights reserved. NewsForest</span> </div>
    </div>
    </div>
    </div>
    </div>
 </footer>
        </div>
    );
}
export default FooterBusiness;