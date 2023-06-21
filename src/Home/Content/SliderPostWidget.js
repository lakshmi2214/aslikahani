import React from "react"; 
import '../../css/style.css';
import '../../css/animate.min.css';
import '../../css/megaMenu.css';
import '../../css/colors/amethyst.css';
import '../../css/colors/carrat.css';
import '../../css/colors/defualt.css';
import '../../css/colors/golden.css';
import '../../css/colors/java-color.css';
import '../../css/colors/sea-green.css';
import '../../css/themify-icons.css';
import '../../css/royal-slider/royalslider.css';
import '../../css/tranparentmenu.css';
import '../../css/magnific-popup.css';
import '../../css/bootstrap-normal-container.min.css';
import '../../css/bootstrap.min.css';
import '../../css/owl.theme.default.css';
import '../../css/royal-slider/rs-default.png';
import '../../css/breakingNews.css';
import '../../css/font-awesome.min.css';
import '../../css/owl.carousel.css';
import '../../css/zerogrid.css';
import '../../fonts/glyphicons-halflings-regular.svg';
import '../../css/royal-slider/rs-default.css';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SliderPostWidget() {
   const navigate = useNavigate();
   const handleNavigation = (item, index) => {
    console.log(item);
 
     navigate(`/home/${item.url}`, { state: {item} });
   }
 
    const [data,setData] = useState([])
 
 useEffect(()=>{
     const url = "https://newsbackend-388608.as.r.appspot.com/api/v1/articles/list?category=10&format=json"
     fetch(url).then(res => res.json())
     .then(res => {
     console.log(res)
     setData(res)
    })
     .catch(err => setData(err))
 },[])
    return(
        <>
         <div className="heading">
                           <h2 className="main-heading">Slider Post Widget</h2>
                           <span className="heading-ping"></span>
                        </div>
                         <div className="item">
                              <div className="latest-news-grid grid-1">
                              {data?.locations?.SliderWidget.slice(0,1).map((item,index)=>{
                                       console.log(item);
                                        return(
                                        <div key={index}>
                                 <div className="picture">
                                    <div className="category-image" onClick={() => handleNavigation(item, index)}> 
                                    
                                       <a href={process.env.REACT_APP_DOMAIN_NAME+'/home/'+item.url}>
                                       <img alt="" className="img-responsive" src={item.image} style={{height:"250px", width:"400px"}} />
                                       </a>
                                    </div>
                                 </div>
                                 <div className="detail">
                                    <div className="caption" onClick={() => handleNavigation(item, index)}> 
                                       <h5>
                                          <a href={process.env.REACT_APP_DOMAIN_NAME+'/home/'+item.url}>{item.title}</a>
                                       </h5>
                                    </div>
                                    <ul className="post-tools" onClick={() => handleNavigation(item, index)}>
                                       <li> by <a href=""> <strong> {item.authored_by}</strong> </a></li>
                                       <li>  {item.created_at} </li>
                                    </ul>
                                 </div>
                                 </div>
                                 )})}
                              </div>
                           </div>
                           {/* <div className="item">
                              <div className="latest-news-grid grid-1">
                                 <div className="picture">
                                    <div className="category-image">
                                       <a href="standard-post.html">
                                       <img alt="" className="img-responsive" src={Post2}/>
                                       </a>
                                       <div className="catname">
                                          <a className="btn btn-green" href="#">
                                             <div>Travel</div>
                                          </a>
                                       </div>
                                       <div className="hover-show-div">
                                          <a href="" className="post-type">
                                          <i className="ti-music-alt"></i>
                                          </a>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="detail">
                                    <div className="caption">
                                       <h5>
                                          <a href="standard-post.html">Computer issue forces ground-stop for United Airlines in the U.S.</a>
                                       </h5>
                                    </div>
                                    <ul className="post-tools">
                                       <li> by <a href=""> <strong> Arsoo</strong> </a></li>
                                       <li>  March 10, 2017 </li>
                                       <li> <a href=""><i className="ti-thought"></i> 57 </a></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="item">
                              <div className="latest-news-grid grid-1">
                                 <div className="picture">
                                    <div className="category-image">
                                       <a href="standard-post.html">
                                       <img alt="" className="img-responsive" src={Post5}/>
                                       </a>
                                       <div className="catname">
                                          <a className="btn btn-maroon" href="#">
                                             <div>Sports</div>
                                          </a>
                                       </div>
                                       <div className="hover-show-div">
                                          <a href="" className="post-type">
                                          <i className="ti-music-alt"></i>
                                          </a>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="detail">
                                    <div className="caption">
                                       <h5>
                                          <a href="standard-post.html">Mysterious Footbal Player steps forward to lead the National Park resistance</a>
                                       </h5>
                                    </div>
                                    <ul className="post-tools">
                                       <li> by <a href=""> <strong> Arsoo</strong> </a></li>
                                       <li>  March 10, 2017 </li>
                                       <li> <a href=""><i className="ti-thought"></i> 57 </a></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="item">
                              <div className="latest-news-grid grid-1">
                                 <div className="picture">
                                    <div className="category-image">
                                       <a href="standard-post.html">
                                       <img alt="" className="img-responsive" src={Post4}/>
                                       </a>
                                       <div className="catname">
                                          <a className="btn btn-lightblue" href="#">
                                             <div>technology</div>
                                          </a>
                                       </div>
                                       <div className="hover-show-div">
                                          <a href="" className="post-type">

                                          <i className="ti-image"></i>
                                          </a>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="detail">
                                    <div className="caption">
                                       <h5>
                                          <a href="standard-post.html">Mark Zuckerberg's charity is buying a search engine for research papers</a>
                                       </h5>
                                    </div>
                                    <ul className="post-tools">
                                       <li> by <a href=""> <strong> Arsoo</strong> </a></li>
                                       <li>  March 10, 2017 </li>
                                       <li> <a href=""><i className="ti-thought"></i> 57 </a></li>
                                    </ul>
                                 </div>
                              </div>
                           </div> */}
                       
        </>
    );
}
export default SliderPostWidget;