import React from "react";
import Post6 from '../../images/posts/21.jpg';
import Post7 from '../../images/small-posts/small-4.jpg';
import Post8 from '../../images/small-posts/small-5.jpg';
import Post9 from '../../images/small-posts/small-6.jpg';
import Post10 from '../../images/small-posts/small-1.jpg';
import Post11 from '../../images/small-posts/small-2.jpg';
import Post12 from '../../images/small-posts/small-3.jpg';
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


function TrendingNews() {
   const navigate = useNavigate();
  const handleNavigation = (item, index) => {
   console.log(item);

    navigate(`/home/${item.url}`, { state: {item}});
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
         <div className="section">
                     <div className="col-md-12 col-xs-12 col-sm-12 nopadding">
                        <div className="heading">
                           <h2 className="main-heading">Trending News</h2>
                        </div>
                     </div>
                     <article className="col-md-12 col-sm-12 col-xs-12 nopadding">
                        
                        <div className="grid-1">
                        {data?.locations?.TrendingNews.slice(0,1).map((item,index)=>{
                         console.log(item);
                         return(
                        <div key={index}> 
                           <div className="picture">
                              <div className="category-image" onClick={() => handleNavigation(item, index)}>
                                 <a href={item.url}>
                                    <img alt="" className="img-responsive" src={item.image} style={{height:"300px"}} /></a>
                                 </div>
                           </div>
                           <div className="detail">
                              <div className="caption" onClick={() => handleNavigation(item, index)}>
                                 <h5><a href={item.url}>{item.title}</a></h5>
                                 <ul className="post-tools" onClick={() => handleNavigation(item, index)}>
                                    <li> by <a href={item.url}> <strong>{item.authored_by}</strong> </a></li>
                                    <li>  {item.created_at} </li>
                                 </ul>
                              </div>
                              <p onClick={() => handleNavigation(item, index)}> {item.description} 
                              </p>
                           </div>

                           </div>
                           )})}
                           

                        </div>
                         <div className="row">
                           <div className="col-md-6 col-sm-6 col-xs-12">
                              <div className="small-grid-container">
                                 <ul className="small-grid">
                                    <li>
                                    {data?.locations?.TrendingNews.slice(1,2).map((item,index)=>{
                                    console.log(item);
                                    return(
                                   <div key={index}>
                                       <div className="small-post">
                                          <div className="small-thumb"> <a href={item.url}>
                                            <img alt="" src={item.image} className="" style={{height:"85px",width:"85px"}}/></a> </div>
                                          <div className="post-content">
                                             <h3> <a href={item.url}>{item.title}</a> </h3>
                                             <ul className="post-tools">
                                             </ul>
                                          </div>
                                       </div>
                                       </div>
                                       )})}
                                    
                                    </li>
                                    <li>
                                    {data?.locations?.TrendingNews.slice(2,3).map((item,index)=>{
                                       console.log(item);
                                       return(
                                       <div key={index}>
                                       <div className="small-post">
                                          <div className="small-thumb"> <a href={item.url}>
                                          <img alt="" src={item.image} className="" style={{height:"85px",width:"85px"}}/></a></div>
                                          <div className="post-content">
                                             <h3> <a href={item.url}>{item.title}</a> </h3>
                                             <ul className="post-tools">
                                             </ul>
                                          </div>
                                       </div>
                                         </div>
                                         )})}
   
                                    </li>
                                    <li>
                                    {data?.locations?.TrendingNews.slice(3,4).map((item,index)=>{
                                          console.log(item);
                                          return(
                                         <div key={index}>
                                       <div className="small-post">
                                          <div className="small-thumb"> <a href={item.url}>
                                            <img alt="" src={item.image} className="" style={{height:"85px",width:"85px"}}/></a> </div>
                                          <div className="post-content">
                                             <h3> <a href={item.url}>{item.title}</a> </h3>
                                             <ul className="post-tools">
                                             </ul>
                                          </div>
                                       </div>
                                       </div>
                                        )})}
                                        
                                    </li>
                                 </ul>
                              </div>
                           </div>
                           <div className="col-md-6 col-sm-6 col-xs-12">
                              <div className="small-grid-container">
                                 <ul className="small-grid">
                                    <li>
                                    {data?.locations?.TrendingNews.slice(4,5).map((item,index)=>{
                                   console.log(item);
                                   return(
                                   <div key={index}>
                                       <div className="small-post">
                                          <div className="small-thumb">
                                             <a href={item.url}>
                                             <img alt="" src={item.image} style={{height:"85px",width:"85px"}} className=""/>
                                             </a>
                                          </div>
                                          <div className="post-content">
                                             <h3> <a href={item.url}>{item.title}</a> </h3>
                                             <ul className="post-tools">
                                             </ul>
                                          </div>
                                       </div>
                                       </div>
                                        )})}
                                        
                                    </li>
                                    <li>
                                    {data?.locations?.Slider.slice(0,1).map((item,index)=>{
                                       console.log(item);
                                       return(
                                       <div key={index}>
                                       <div className="small-post">
                                          <div className="small-thumb"> <a href={item.url}>
                                            <img alt="" src={item.image} className="" style={{height:"85px",width:"85px"}}/></a> </div>
                                          <div className="post-content">
                                             <h3> <a href={item.url}>{item.title}</a> </h3>
                                             
                                          </div>
                                       </div>
                                        </div>
                                        )})}
                                        
                                    </li>
                                    <li>
                                    {data?.locations?.TrendingNews.slice(2,3).map((item,index)=>{
                                      console.log(item);
                                      return(
                                      <div key={index}>
                                       <div className="small-post">
                                          <div className="small-thumb"> <a href={item.url}>
                                            <img alt="" src={item.image} className="" style={{height:"85px",width:"85px"}}/></a> </div>
                                          <div className="post-content">
                                             <h3> <a href={item.url}>{item.title}</a> </h3>
                                            
                                             
                                          </div>
                                       </div>
                                           </div>
                                           )})} 
                                          
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div> 
                     </article>
                  </div>
        </>
    );
}
export default TrendingNews;