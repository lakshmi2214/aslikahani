import React from 'react';
import '../css/style.css';
import '../css/animate.min.css';
import '../css/megaMenu.css';
import '../css/colors/amethyst.css';
// import '../css/colors/blue.css';
import '../css/colors/carrat.css';
import '../css/colors/defualt.css';
import '../css/colors/golden.css';
import '../css/colors/java-color.css';
// import '../css/colors/sea-green.css';
import '../css/themify-icons.css';
import '../css/royal-slider/royalslider.css';
import '../css/tranparentmenu.css';
import '../css/magnific-popup.css';
import '../css/bootstrap-normal-container.min.css';
import '../css/bootstrap.min.css';
import '../css/owl.theme.default.css';
import '../css/breakingNews.css';
import '../css/font-awesome.min.css';
import '../css/zerogrid.css';
import '../css/royal-slider/rs-default.css';
import '../css/owl.carousel.css';
import Pic11 from '../images/small-posts/recent-1.jpg';
import Pic12 from '../images/small-posts/recent-2.jpg';
import Pic13 from '../images/small-posts/recent-3.jpg';
import Pic14 from '../images/small-posts/recent-8.jpg';
import Pic15 from '../images/small-posts/small-4.jpg';

function MostReadPost() {
    return(
        <>
        <div className="widget widget-bg">
                        <div className="heading">
                        <h2 className="main-heading">Most Read Posts</h2>
                              <span className="heading-ping"></span>
                        </div>
                        <ul className="tabs-posts">
                            <li>
                            <div className="pic">
                            <a href="standard-post.html">
                            <img alt="" className="img-responsive" src={ Pic11 }/>
                            </a>
                            </div>
                            <div className="caption"> <a href="standard-post.html">In their own words: What 'Invasion Day' means to a rural Indigenous</a> </div>
                            <ul className="post-tools">
                            <li>  June 22, 2017 </li>
                            <li> <i className="ti-eye"></i> 558 </li>
                            </ul>
                            </li>
<li>
<div className="pic"> <a href="standard-post.html">
    <img alt="" className="img-responsive" src={ Pic12 }/></a> </div>
        <div className="caption"> 
        <a href="standard-post.html">The assault on federally supported </a> </div>
            <ul className="post-tools">
            <li>  May 10, 2014 </li>
            <li> <i className="ti-eye"></i> 1558 </li>
            </ul>
        </li>
        <li>
            <div className="pic"> <a href="standard-post.html">
            <img alt="" className="img-responsive" src={ Pic12 }/></a> </div>
            <div className="caption"> <a href="standard-post.html">The assault on federally supported </a> </div>
            <ul className="post-tools">
          <li>  May 10, 2014 </li>
         <li> <i className="ti-eye"></i> 1558 </li>
                                 </ul>
                              </li>
<li>
<div className="pic"> <a href="standard-post.html">
		<img alt="" className="img-responsive" src={ Pic13 }/></a> </div>
                                 <div className="caption"> <a href="standard-post.html">Presidential campaigns is too odd</a> </div>
                                 <ul className="post-tools">
                                    <li>  June 30, 2014 </li>
                                    <li> <i className="ti-eye"></i> 2653 </li>
                                    </ul>
                        </li>
                        <li>
                                 <div className="pic"> <a href="standard-post.html">
                    <img alt="" className="img-responsive" src={ Pic14 }/></a> </div>
                                 <div className="caption"> <a href="standard-post.html">PWhy people 'breadcrumb' each other on Tinder </a> </div>
                                 <ul className="post-tools">
                                    <li>  Aug 30, 2016 </li>
                                    <li> <i className="ti-eye"></i> 6541 </li>
                                 </ul>
                              </li>
                              <li>
                                 <div className="pic"> <a href="standard-post.html">
                                    <img alt="" className="img-responsive" src={ Pic15 } /></a> </div>
                                 <div className="caption"> <a href="standard-post.html">Don't believe the gruesome rumors about this MLB pitcher's death</a> </div>
                                 <ul className="post-tools">
                                    <li>  April 01, 2016 </li>
                                    <li> <i className="ti-eye"></i> 9874 </li>
                                 </ul>
                              </li>
                           </ul>
                          </div>
        </>
    )
}
export default MostReadPost;