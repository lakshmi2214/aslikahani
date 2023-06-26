import React from "react";
import logosmall from '../images/logo-small.jpg';
// css files
import '../css/style.css'
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function FooterCategory() {
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
        <div>            
 <footer>
 <div className="footer-top bg-dark">
 <div className="container">
 <div className="row">
 <div className="col-md-3 col-sm-6 col-xs-12">
 <div className="footer-block">
 <img src={ logosmall } style={{height:"50px",width:"300px",paddingRight:"50px",paddingTop:"5px"}}/>
 <p>A captivating platform that takes you on a journey through the realms of imagination, inspiration and cultural richness. Asli Kahani, meaning "Real Story" in Hindi, is a celebration of narratives that connect us, embracing diverse voices and bringing forth compelling tales from around the country.</p>
 </div>
 </div>
 <div className="col-md-3 col-sm-6 col-xs-12 no-padding">
 <h2>Recent Posts</h2>
                     <ul className="tabs-posts">
                     {data?.locations?.Popular.slice(1,2).map((item,index)=>{
                                     console.log(item);
                                      return(
                                      <div key={index}>
                     <li>                     
                           <div className="pic">
                           
                             <a href={process.env.REACT_APP_DOMAIN_NAME+ '/home/' +item.url}>
                            <img alt="" className="img-responsive" src={ item.image }/></a> </div>
                           <div className="caption"> <a href={process.env.REACT_APP_DOMAIN_NAME+ '/home/' +item.url}>{item.title}</a> </div>
                           <ul className="post-tools">
                           </ul>
                        </li>
 </div>
 )})}
  {data?.locations?.Popular.slice(2,3).map((item,index)=>{
                                     console.log(item);
                                      return(
                                      <div key={index}>
                         <li>                     
                           <div className="pic">
                           
                             <a href={process.env.REACT_APP_DOMAIN_NAME+ '/home/' +item.url}>
                            <img alt="" className="img-responsive" src={ item.image }/></a> </div>
                           <div className="caption"> <a href={process.env.REACT_APP_DOMAIN_NAME+ '/home/' +item.url}>{item.title}</a> </div>
                           <ul className="post-tools">
                           </ul>
                        </li>
                        </div>
                         )})}
                     </ul>
                </div>
                <div className="col-xs-12 col-md-3 col-sm-6 ">
                <h2>Most Read Articles</h2>
                {data?.locations?.Popular.slice(2,3).map((item,index)=>{
                                     console.log(item);
                                      return(
                                      <div key={index}>
                     <ul class="tabs-posts">
                     {data?.locations?.Recent.slice(0,1).map((item,index)=>{
                                     console.log(item);
                                      return(
                                      <div key={index}>
                        <li>
                           <div class="caption1" onClick={() => handleNavigation(item, index)}> 
                           <a href={process.env.REACT_APP_DOMAIN_NAME+ '/home/' +item.url}>{item.title}</a> </div>
                           <ul class="post-tools" onClick={() => handleNavigation(item, index)}>
                              <li>  {item.created_at} </li>
                           </ul>
                        </li>
                        </div>
                                      )})}
                        {data?.locations?.Recent.slice(1,2).map((item,index)=>{
                         console.log(item);
                         return(
                           <div key={index}>
                        <li>
                           <div class="caption1" onClick={() => handleNavigation(item, index)}> 
                           <a href={process.env.REACT_APP_DOMAIN_NAME+ '/home/' +item.url}>{item.title}</a> </div>
                           <ul class="post-tools" onClick={() => handleNavigation(item, index)}>
                              <li>  {item.created_at} </li>
                           </ul>
                        </li>
                        </div>
                                      )})}
                                      {data?.locations?.Recent.slice(1,2).map((item,index)=>{
                         console.log(item);
                         return(
                           <div key={index}>
                        <li>
                           <div class="caption1" onClick={() => handleNavigation(item, index)}> 
                           <a href={process.env.REACT_APP_DOMAIN_NAME+ '/home/' +item.url}>{item.title}</a> </div>
                           <ul class="post-tools" onClick={() => handleNavigation(item, index)}>
                              <li>  {item.created_at} </li>
                           </ul>
                        </li>
                        </div>
                        )})}
                     </ul>
                </div>
                         )})}
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12 no-padding">
                <h2>Contact Detail</h2>
                <div className="footer-detail">
                <ul className="personal-info">
                           <li><i className="fa fa-map-marker"></i>#280/1, Sampige Road, 18th cross, Malleshwaram.</li>
                           <li><i className="fa fa-envelope"></i> aslikahani.media@gmail.com </li>
                           {/* <li><i className="fa fa-phone"></i> +99 333 1234567 </li> */}
                        </ul>
                </div>
                <div className="social-media-icons">
                <ul>
                <li><a href=" https://www.facebook.com/aslikahani.in"><i className="ti-facebook"></i> </a></li>
                        <li><a href="https://twitter.com/aslikahani_in"><i className="ti-twitter"></i></a></li>
                        <li><a href="https://www.youtube.com/@AsliKahani_in"><i className="ti-youtube"></i></a></li>
                        <li><a href=" https://www.instagram.com/aslikahani.in/"><i className="ti-instagram"></i></a></li>
                        <li><a href="https://open.spotify.com/show/3Xg7iOie2Yct06H4GyXnGj"><i class="fa fa-spotify"></i></a></li>
                        
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