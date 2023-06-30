import React from "react";
import Post7 from '../../images/small-posts/small-4.jpg';
import Post8 from '../../images/small-posts/small-5.jpg';
import Post10 from '../../images/small-posts/small-1.jpg';
import Post11 from '../../images/small-posts/small-2.jpg';
import Post12 from '../../images/small-posts/small-3.jpg'; 
import Post5 from '../../images/posts/19.jpg';

function Popular() {
    return(
        <>
        <div className="widget widget-bg">
                        <div className="tabs">
                           <div role="tabpanel">
                              
                              <ul className="nav nav-tabs nav-justified" role="tablist">
                                 <li className="active" role="presentation"> <a aria-controls="popular" aria-expanded="true" data-toggle="tab"
                                    href="#popular" role="tab">Popular</a> </li>
                                 <li className="" role="presentation"> <a aria-controls="comments-count-count" aria-expanded="false"
                                    data-toggle="tab" href="#comments-count-count" role=
                                    "tab">recent</a> </li>
                              </ul>
                              <div className="tab-content">
                                 <div className="tab-pane active" id="popular" role="tabpanel">
                                    <ul className="tabs-posts">
                                       <li>
                                          <div className="pic"> <a href="standard-post.html">
                                            <img alt="" className="img-responsive" src={Post10}/></a> </div>
                                          <div className="caption"> <a href="standard-post.html">Get a stern talking-to from your parents with Kit Kat's Lunar</a> </div>
                                          <ul className="post-tools">
                                             <li>  January 21, 2016 </li>
                                             <li title="Comments"> <i className="ti-thought"></i> 953 </li>
                                          </ul>
                                       </li>
                                       <li>
                                          <div className="pic"> <a href="standard-post.html">
                                            <img alt="" className="img-responsive" src={Post11}/></a> </div>
                                          <div className="caption"> <a href="standard-post.html">The assault on federally supported </a> </div>
                                          <ul className="post-tools">
                                             <li>  February 28, 2016 </li>
                                             <li title="Comments"> <i className="ti-thought"></i> 105 </li>
                                          </ul>
                                       </li>
                                       <li>
                                          <div className="pic"> <a href="standard-post.html">
                                            <img alt="" className="img-responsive" src={Post12}/></a> </div>
                                          <div className="caption"> <a href="standard-post.html">Presidential campaigns is too odd</a> </div>
                                          <ul className="post-tools">
                                             <li>  March 01, 2016 </li>
                                             <li title="Comments"> <i className="ti-thought"></i> 305 </li>
                                          </ul>
                                       </li>
                                       <li>
                                          <div className="pic"> <a href="standard-post.html">
                                            <img alt="" className="img-responsive" src={Post7}/></a> </div>
                                          <div className="caption"> <a href="standard-post.html">MBD just hired a big shot to run its virtual reality division</a> </div>
                                          <ul className="post-tools">
                                             <li>  April 05, 2016 </li>
                                             <li title="Comments"> <i className="ti-thought"></i> 163 </li>
                                          </ul>
                                       </li>
                                    </ul>
                                 </div>
                                 <div className="tab-pane" id="comments-count-count" role="tabpanel">
                                    <ul className="tabs-posts">
                                       <li>
                                          <div className="pic"> <a href="standard-post.html">
                                            <img alt="" className="img-responsive" src={Post11}/></a> </div>
                                          <div className="caption"> <a href="standard-post.html">The assault on federally supported </a> </div>
                                          <ul className="post-tools">
                                             <li title="Comments"> <i className="ti-thought"></i> 105 </li>
                                          </ul>
                                       </li>
                                       <li>
                                          <div className="pic"> <a href="standard-post.html">
                                            <img alt="" className="img-responsive" src={Post8} /></a> </div>
                                          <div className="caption"> <a href="standard-post.html">Taco Bell's newest creation may be the grossest fast food invention yet</a> </div>
                                          <ul className="post-tools">
                                             <li title="Comments"><a href=""> <i className="ti-thought"></i> 35</a> </li>
                                          </ul>
                                       </li>
                                       <li>
                                          <div className="pic"> <a href="standard-post.html">       
                                            <img alt="" className="img-responsive" src={Post5} /></a> </div>
                                          <div className="caption"> <a href="standard-post.html">MBD just hired a big shot to run its virtual reality division</a> </div>
                                          <ul className="post-tools">
                                             <li title="Comments"> <a href=""><i className="ti-thought"></i> 163</a> </li>
                                          </ul>
                                       </li>
                                       <li>
                                          <div className="pic"> <a href="standard-post.html">
                                            <img alt="" className="img-responsive" src={Post10}/></a> </div>
                                          <div className="caption"> <a href="standard-post.html">Get a stern talking-to from your parents with Kit Kat's Lunar</a> </div>
                                          <ul className="post-tools">
                                             <li title="Comments"> <a href=""><i className="ti-thought"></i> 953</a> </li>
                                          </ul>
                                       </li>
                                       <li>
                                          <div className="pic"> <a href="standard-post.html">
                                            <img alt="" className="img-responsive" src={Post12}/></a> </div>
                                          <div className="caption"> <a href="standard-post.html">Presidential campaigns is too odd</a> </div>
                                          <ul className="post-tools">
                                             <li title="Comments"> <a href=""><i className="ti-thought"></i> 305 </a></li>
                                          </ul>
                                       </li>

                                       <li>
                                          <div className="pic"> <a href="standard-post.html">
                                            <img alt="" className="img-responsive" src={Post12}/></a> </div>
                                          <div className="caption"> <a href="standard-post.html">Presidential campaigns is too odd</a> </div>
                                          <ul className="post-tools">
                                             <li title="Comments"> <a href=""><i className="ti-thought"></i> 305 </a></li>
                                          </ul>
                                       </li>
                                       
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
        </>
    );
}
export default Popular;