import React from "react";
import Post7 from '../../images/small-posts/small-4.jpg';
import Post8 from '../../images/small-posts/small-5.jpg';
import Post10 from '../../images/small-posts/small-1.jpg';
import Post11 from '../../images/small-posts/small-2.jpg';
import Post12 from '../../images/small-posts/small-3.jpg'; 
import Post5 from '../../images/posts/19.jpg';

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

function PopularRecent() {
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
        <div className="widget widget-bg">
                        <div className="tabs">
                           <div role="tabpanel">
                              
                              <ul className="nav nav-tabs nav-justified" role="tablist">
                                 <li className="active" role="presentation"> <a aria-controls="popularRecent" aria-expanded="true" data-toggle="tab"
                                    href="#popularRecent" role="tab" style={{color:"white"}}>Popular / Recent</a> </li>
                                 {/* <li className="" role="presentation"> <a aria-controls="comments-count-count" aria-expanded="false"
                                    data-toggle="tab" href="#comments-count-count" role=
                                    "tab">recent</a> </li> */}
                              </ul>
                              <div className="tab-content">
                                 <div className="tab-pane active" id="popularRecent" role="tabpanel">
                                    <ul className="tabs-posts">
                                       <li>
                                       {data?.locations?.Popular.slice(0,1).map((item,index)=>{
                                       console.log(item);
                                        return(
                                        <div key={index}>
                                          <div className="pic" onClick={() => handleNavigation(item, index)}> <a href={item.url}>
                                            <img alt="" className="img-responsive" src={item.image} style={{height:"83px",width:"83px"}}/></a> 
                                          </div>
                                          <div className="caption" onClick={() => handleNavigation(item, index)}> <a href={item.url}>
                                             {item.title}</a> 
                                          </div>
                                          <ul className="post-tools" onClick={() => handleNavigation(item, index)}>
                                             <li>  {item.created_at} </li>
                                          </ul>
                                          </div>
                                           )})}
                                       </li>
                                       <li>
                                       {data?.locations?.Popular.slice(1,2).map((item,index)=>{
                                       console.log(item);
                                        return(
                                        <div key={index}>
                                          <div className="pic" onClick={() => handleNavigation(item, index)}>  <a href={item.url}>
                                            <img alt="" className="img-responsive" src={item.image} style={{height:"83px",width:"83px"}}/></a> </div>
                                          <div className="caption" onClick={() => handleNavigation(item, index)}> <a href={item.url}>
                                             {item.title}</a> </div>
                                          <ul className="post-tools" onClick={() => handleNavigation(item, index)}>
                                             <li>  {item.created_at} </li>
                                          </ul>
                                          </div>
                                           )})}
                                       </li>
                                       <li>
                                       {data?.locations?.Recent.slice(0,1).map((item,index)=>{
                                       console.log(item);
                                        return(
                                        <div key={index}>
                                          <div className="pic" onClick={() => handleNavigation(item, index)}> <a href={item.url}>
                                            <img alt="" className="img-responsive" src={item.image} style={{height:"83px",width:"83px"}}/></a> </div>
                                          <div className="caption" onClick={() => handleNavigation(item, index)}> <a href={item.url}>
                                             {item.title}</a> </div>
                                          <ul className="post-tools" onClick={() => handleNavigation(item, index)}>
                                             <li>  {item.created_at} </li>
                                          </ul>
                                          </div>
                                           )})}
                                       </li>
                                       <li>
                                       {data?.locations?.Recent.slice(1,2).map((item,index)=>{
                                       console.log(item);
                                        return(
                                        <div key={index}>
                                          <div className="pic" onClick={() => handleNavigation(item, index)}> <a href={item.url}>
                                            <img alt="" className="img-responsive" src={item.image} style={{height:"83px",width:"83px"}}/></a> </div>
                                          <div className="caption" onClick={() => handleNavigation(item, index)}> <a href={item.url}>{item.title}</a> </div>
                                          <ul className="post-tools" onClick={() => handleNavigation(item, index)}>
                                             <li>  {item.created_at} </li>
                                          </ul>
                                          </div>
                                           )})}
                                       </li>
                                    </ul>
                                 </div>
                                 {/* <div className="tab-pane" id="comments-count-count" role="tabpanel">
                                    <ul className="tabs-posts">
                                       <li>
                                       {data?.locations?.slice(1,2).map((item)=>{
                                       return(
                                       item?.articles?.slice(0,1).map((item,index)=>{
                                       console.log(item);
                                        return(
                                        <div key={index}>
                                          <div className="pic"> <a href={item.url}>
                                            <img alt="" className="img-responsive" src={Post11}/></a> </div>
                                          <div className="caption"> <a href={item.url}>The assault on federally supported </a> </div>
                                          <ul className="post-tools">
                                             <li title="Comments"> <i className="ti-thought"></i> 105 </li>
                                          </ul>
                                          </div>
                                           )}))
                                          })}
                                       </li>
                                       <li>
                                          {data?.locations?.slice(1,2).map((item)=>{
                                       return(
                                       item?.articles?.slice(0,1).map((item,index)=>{
                                       console.log(item);
                                        return(
                                        <div key={index}>
                                          <div className="pic"> <a href={item.url}>
                                            <img alt="" className="img-responsive" src={Post8} /></a> </div>
                                          <div className="caption"> <a href={item.url}>Taco Bell's newest creation may be the grossest fast food invention yet</a> </div>
                                          <ul className="post-tools">
                                             <li title="Comments"><a href=""> <i className="ti-thought"></i> 35</a> </li>
                                          </ul>
                                          </div>
                                          )}))
                                         })}
                                       </li>
                                       <li>
                                          {data?.locations?.slice(1,2).map((item)=>{
                                       return(
                                       item?.articles?.slice(0,1).map((item,index)=>{
                                       console.log(item);
                                        return(
                                        <div key={index}>
                                          <div className="pic"> <a href={item.url}>       
                                            <img alt="" className="img-responsive" src={Post5} /></a> </div>
                                          <div className="caption"> <a href={item.url}>MBD just hired a big shot to run its virtual reality division</a> </div>
                                          <ul className="post-tools">
                                             <li title="Comments"> <a href=""><i className="ti-thought"></i> 163</a> </li>
                                          </ul>
                                          </div>
                                           )}))
                                          })}
                                       </li>
                                       <li>
                                          {data?.locations?.slice(1,2).map((item)=>{
                                       return(
                                       item?.articles?.slice(0,1).map((item,index)=>{
                                       console.log(item);
                                        return(
                                        <div key={index}>
                                          <div className="pic"> <a href={item.url}>
                                            <img alt="" className="img-responsive" src={item.image}/></a> </div>
                                          <div className="caption"> <a href={item.url}>Get a stern talking-to from your parents with Kit Kat's Lunar</a> </div>
                                          <ul className="post-tools">
                                             <li title="Comments"> <a href=""><i className="ti-thought"></i> 953</a> </li>
                                          </ul>
                                          </div>
                                           )}))
                                          })}
                                       </li>
                                       <li>
                                          {data?.locations?.slice(1,2).map((item)=>{
                                       return(
                                       item?.articles?.slice(0,1).map((item,index)=>{
                                       console.log(item);
                                        return(
                                        <div key={index}>
                                          <div className="pic"> <a href={item.url}>
                                            <img alt="" className="img-responsive" src={Post12}/></a> </div>
                                          <div className="caption"> <a href={item.url}>Presidential campaigns is too odd</a> </div>
                                          <ul className="post-tools">
                                             <li title="Comments"> <a href=""><i className="ti-thought"></i> 305 </a></li>
                                          </ul>
                                            </div>
                                            )}))
                                           })} 
                                        </li>
                                    </ul>
                                 </div>  */}
                              </div>
                           </div>
                        </div>
                     </div>
        </>
    );
}
export default PopularRecent;