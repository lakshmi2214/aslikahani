import React from "react";
import IA3 from '../../images/ads/3.jpg';
import ADF728 from '../../images/ads/adforest728.jpg';
import '../../css/style.css';
import '../../css/animate.min.css';
import '../../css/megaMenu.css';
import '../../css/colors/amethyst.css';
import '../../css/colors/blue.css';
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
import '../../css/breakingNews.css';
import '../../css/font-awesome.min.css';
import '../../css/zerogrid.css';
import '../../css/royal-slider/rs-default.css';
import '../../css/owl.carousel.css';

import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import AdvertisementLeft1 from "./AdvertisementLeft1";
// import AdvertisementLeft2 from "./AdvertisementLeft2";

function EntertainmentPosts() {

   const navigate = useNavigate()
   const handleNavigation = (item, index) => {
      console.log(item);

      navigate(`/entertainment/${item.url}`, { state: {item} });
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
      <div className="row">
                     <article className="col-md-6 col-sm-6 col-xs-12">
                        <div className="grid-1">
                        {data?.locations?.TrendingNews.slice(2,3).map((item,index)=>{
                                    console.log(item);
                                     return(
                                     <div key={index}>
                           <div className="picture">
                              <div className="category-image" onClick={() => handleNavigation(item, index)}>
                                 <a href={item.url}>
                                 <img alt="" className="img-responsive" src={item.image} style={{height:"240px",widtth:"300px"}}/>
                                 </a>                                    
                              </div>
                           </div>
                           <div className="detail">
                              <div className="caption" onClick={() => handleNavigation(item, index)}>
                                 <h5>
                                    <a href={item.url}>{item.title}</a>
                                 </h5>
                              </div>
                              <ul className="post-tools" onClick={() => handleNavigation(item, index)}>
                                 <li> by <a href={item.url}> <strong> {item.authored_by}</strong> </a></li>
                              </ul>
                           </div>
                           </div>
                                     )})}
                        </div>
                     </article>
                     <article className="col-md-6 col-sm-6 col-xs-12">
                        <div className="grid-1">
                        {data?.locations?.Slider.slice(3,4).map((item,index)=>{
                                    console.log(item);
                                     return(
                                     <div key={index}>
                           <div className="picture">
                              <div className="category-image" onClick={() => handleNavigation(item, index)}> 
                                 <a href={item.url}>
                                 <img alt="" className="img-responsive" src={item.image} style={{height:"240px",widtth:"300px"}}/>
                                 </a>                                   
                              </div>
                           </div>
                           <div className="detail">
                              <div className="caption" onClick={() => handleNavigation(item, index)}>
                                 <h5>
                                    <a href={item.url}>{item.title}</a>
                                 </h5>
                              </div>
                              <ul className="post-tools" onClick={() => handleNavigation(item, index)}>
                                 <li> by <a href={item.url}> <strong> {item.authored_by}</strong> </a></li>
                              </ul>
                           </div>
                           </div>
                                     )})}
                        </div>
                     </article>
                     <article className="col-md-6 col-sm-6 col-xs-12">
                        <div className="grid-1">
                        {data?.locations?.NationalNews.slice(2,3).map((item,index)=>{
                                    console.log(item);
                                     return(
                                     <div key={index}>
                           <div className="picture">
                              <div className="category-image" onClick={() => handleNavigation(item, index)}>
                                 <a href={item.url}>
                                 <img alt="" className="img-responsive" src={item.image} style={{height:"240px",widtth:"300px"}}/>
                                 </a>
                              </div>
                           </div>
                           <div className="detail">
                              <div className="caption" onClick={() => handleNavigation(item, index)}>
                                 <h5>
                                    <a href={item.url}>{item.title}</a>
                                 </h5>
                              </div>
                              <ul className="post-tools"onClick={() => handleNavigation(item, index)}>
                                 <li> by <a href=""> <strong> {item.authored_by}</strong> </a></li>
                              </ul>
                           </div>
                           </div>
                                     )})}
                        </div>
                     </article>
                     <article className="col-md-6 col-sm-6 col-xs-12">
                        <div className="grid-1">
                        {data?.locations?.TrendingNews.slice(3,4).map((item,index)=>{
                                    console.log(item);
                                     return(
                                     <div key={index}>
                           <div className="picture">
                              <div className="category-image" onClick={() => handleNavigation(item, index)}>
                                 <a href={item.url}>
                                 <img alt="" className="img-responsive" src={item.image} style={{height:"240px",width:"370px"}}/>
                                 </a>
                              </div>
                           </div>
                           <div className="detail">
                              <div className="caption" onClick={() => handleNavigation(item, index)}>
                                 <h5>
                                    <a href={item.url}>{item.title}</a>
                                 </h5>
                              </div>
                              <ul className="post-tools" onClick={() => handleNavigation(item, index)}>
                                 <li> by <a href=""> <strong> {item.authored_by}</strong> </a></li>
                                 </ul>
                           </div>
                           </div>
                                     )})}
                        </div>
                     </article>
                  </div>
                 {/* <AdvertisementLeft1 /> */}
                  <div className="row">
                     <article className="col-md-6 col-sm-6 col-xs-12">
                        <div className="grid-1">
                        {data?.locations?.TopNews.slice(2,3).map((item,index)=>{
                                    console.log(item);
                                     return(
                                     <div key={index}>
                           <div className="picture">
                              <div className="category-image" onClick={() => handleNavigation(item, index)}>
                                 <a href={item.url}>
                                 <img alt="" className="img-responsive" src={item.image} style={{height:"240px", width:"380px"}}/>
                                 </a>
                              </div>
                           </div>
                           <div className="detail">
                              <div className="caption" onClick={() => handleNavigation(item, index)}>
                                 <h5>
                                    <a href={item.url}>{item.title}</a>
                                 </h5>
                              </div>
                              <ul className="post-tools" onClick={() => handleNavigation(item, index)}>
                                 <li> by <a href=""> <strong> {item.authored_by}</strong> </a></li>
                              </ul>
                           </div>
                           </div>   
                                     )})}
                        </div>
                     </article>
                     <article className="col-md-6 col-sm-6 col-xs-12">
                        <div className="grid-1">
                        {data?.locations?.LatestPost.slice(0,1).map((item,index)=>{
                                    console.log(item);
                                     return(
                                     <div key={index}>
                           <div className="picture">
                              <div className="category-image" onClick={() => handleNavigation(item, index)}>
                                 <a href={item.url}>
                                 <img alt="" className="img-responsive" src={item.image} style={{height:"240px", width:"380px"}}/>
                                 </a>
                              </div>
                           </div>
                           <div className="detail">
                              <div className="caption" onClick={() => handleNavigation(item, index)}>
                                 <h5>
                                    <a href={item.url}>{item.title}</a>
                                 </h5>
                              </div>
                              <ul className="post-tools" onClick={() => handleNavigation(item, index)}>
                                 <li> by <a href=""> <strong> {item.authored_by}</strong> </a></li>
                              </ul>
                           </div>
                           </div>
                                     )})}
                        </div>
                     </article>
                     <article className="col-md-6 col-sm-6 col-xs-12">
                        <div className="grid-1">
                        {data?.locations?.LatestPost.slice(3,4).map((item,index)=>{
                                    console.log(item);
                                     return(
                                     <div key={index}>
                           <div className="picture">
                              <div className="category-image" onClick={() => handleNavigation(item, index)}>
                                 <a href={item.url}>
                                 <img alt="" className="img-responsive" src={item.image} style={{height:"240px", width:"380px"}}/>
                                 </a>
                              </div>
                           </div>
                           <div className="detail">
                              <div className="caption" onClick={() => handleNavigation(item, index)}>
                                 <h5>
                                    <a href={item.url}>{item.title}</a>
                                 </h5>
                              </div>
                              <ul className="post-tools" onClick={() => handleNavigation(item, index)}>
                                 <li> by <a href={item.url}> <strong> {item.authored_by}</strong> </a></li>
                              </ul>
                           </div>
                           </div>
                                     )})}
                        </div>
                     </article>
                     <article className="col-md-6 col-sm-6 col-xs-12">
                        <div className="grid-1">
                        {data?.locations?.Slider.slice(6,7).map((item,index)=>{
                                    console.log(item);
                                     return(
                                     <div key={index}>
                           <div className="picture">
                              <div className="category-image" onClick={() => handleNavigation(item, index)}>
                                 <a href={item.url}>
                                 <img alt="" className="img-responsive" src={item.image} style={{height:"240px", width:"380px"}}/>
                                 </a>
                              </div>
                           </div>
                           <div className="detail">
                              <div className="caption" onClick={() => handleNavigation(item, index)}>
                                 <h5>
                                    <a href={item.url}>{item.title}</a>
                                 </h5>
                              </div>
                              <ul className="post-tools" onClick={() => handleNavigation(item, index)}>
                                 <li> by <a href=""> <strong>{item.authored_by}</strong> </a></li>
                              </ul>
                           </div>
                           </div>
                                     )})}
                        </div>
                     </article>
                  </div>
                  {/* <AdvertisementLeft2 /> */}
                  <div className="row">
                     <article className="col-md-6 col-sm-6 col-xs-12">
                        <div className="grid-1">
                        {data?.locations?.Slider.slice(7,8).map((item,index)=>{
                                    console.log(item);
                                     return(
                                     <div key={index}>
                           <div className="picture">
                              <div className="category-image" onClick={() => handleNavigation(item, index)}>
                                 <a href={item.url}>
                                 <img alt="" className="img-responsive" src={item.image} style={{height:"240px", width:"380px"}}/>
                                 </a>
                              </div>
                           </div>
                           <div className="detail">
                              <div className="caption" onClick={() => handleNavigation(item, index)}>
                                 <h5>
                                    <a href={item.url}>{item.title}</a>
                                 </h5>
                              </div>
                              <ul className="post-tools" onClick={() => handleNavigation(item, index)}>
                                 <li> by <a href=""> <strong> {item.authored_by}</strong> </a></li>
                              </ul>
                           </div>
                           </div>
                                     )})}
                        </div>
                     </article>
                     <article className="col-md-6 col-sm-6 col-xs-12">
                        <div className="grid-1">                              
                        {data?.locations?.AdminChoice.slice(3,4).map((item,index)=>{
                                    console.log(item);
                                     return(
                                     <div key={index}>
                           <div className="picture">
                              <div className="category-image" onClick={() => handleNavigation(item, index)}>
                                 <a href={item.url}>
                                 <img alt="" className="img-responsive" src={item.image} style={{height:"240px", width:"380px"}}/>
                                 </a>
                              </div>
                           </div>
                           <div className="detail">
                              <div className="caption" onClick={() => handleNavigation(item, index)}>
                                 <h5>
                                    <a href={item.url}>{item.title}</a>
                                 </h5>
                              </div>
                              <ul className="post-tools" onClick={() => handleNavigation(item, index)}>
                                 <li> by <a href=""> <strong> {item.authored_by}</strong> </a></li>
                              </ul>
                           </div>
                           </div>
                                     )})}
                        </div>
                     </article>
                  </div>
     </>
    )
}
export default EntertainmentPosts;