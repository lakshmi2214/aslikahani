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


function LatestArticles() {
   const navigate = useNavigate();
   const handleNavigation = (item, index) => {
    console.log(item);
 
     navigate(`/home/${item.url}`, { state: {item }});
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
                     <div className="row">
                        <div className="col-md-12 col-xs-12 col-sm-12">
                           <div className="heading">
                              <h2 className="main-heading">Latest Articles</h2>
                              
                              
                           </div>
                        </div>
                     </div>
                     <div className="row">
                     
      
    {data?.locations?.LatestPost.slice(0,1).map((item,index)=>{
            console.log(item);
            return(
               <div key={index}>

                        <article className="col-md-7 col-sm-7 col-xs-12">
                           <div className="grid-1">
                              <div className="picture">
                                 <div className="category-image" onClick={() => handleNavigation(item, index)}>
                                    <a href={item.url}>
                                    <img alt="" className="img-responsive" src={item.image} style={{height:"185px"}}/>
                                    </a>
                                    
                                    </div>
                              </div>
                              <div className="detail">
                                 <div className="caption">
                                    <h5 onClick={() => handleNavigation(item, index)}>
                                       <a href={item.url}>{item.title}</a>
                                    </h5>
                                 </div>
                                 <ul className="post-tools">
                                    <li onClick={() => handleNavigation(item, index)}> by <a href=""> <strong> {item.authored_by}</strong> </a></li>
                                    <li onClick={() => handleNavigation(item, index)}> {item.created_at}  </li>
                                   
                                 </ul>
                                 <p onClick={() => handleNavigation(item, index)}>{item.description}  </p>
                              </div>
                           </div>
                        </article>
                        </div>
            )})}
         
                        <div className="col-md-5 col-sm-5 col-xs-12">
                           <ul className="small-grid">
                              <li>
   {data?.locations?.LatestPost.slice(1,2).map((item,index)=>{
         
            console.log(item);
            return(
               <div key={index}>

                                 <div className="small-post">
                                    <div className="post-content">
                                       <h3 onClick={() => handleNavigation(item, index)}> <a href={item.url}>{item.title} </a> </h3>
                                       <ul className="post-tools">
               
                                          <li onClick={() => handleNavigation(item, index)}>  {item.created_at} </li>
                                       </ul>
                                    </div>
                                 </div>
                                 </div>
            )})}
                              </li>
                              <li>
      {data?.locations?.LatestPost.slice(2,3).map((item,index)=>{
            console.log(item);
            return(
               <div key={index}>

                                 <div className="small-post">
                                    <div className="post-content">
                                       <h3 onClick={() => handleNavigation(item, index)}> <a href={item.url}>{item.title}</a> </h3>
                                       <ul className="post-tools">
                                          <li onClick={() => handleNavigation(item, index)}>  {item.created_at} </li>
                                       </ul>
                                    </div>
                                 </div>
                                 </div>
            )
         })}
                              </li>
                              <li>
         {data?.locations?.LatestPost.slice(3,4).map((item,index)=>{
            console.log(item);
            return(
               <div key={index}>

                                 <div className="small-post">
                                    <div className="post-content">
                                       <h3 onClick={() => handleNavigation(item, index)}> <a href={item.url}>{item.title}</a> </h3>
                                       <ul className="post-tools">
                                          <li onClick={() => handleNavigation(item, index)}>  {item.created_at} </li>
                                       </ul>
                                    </div>
                                 </div>
                                 </div>
            )
         })}
                              </li>
                              <li>
   {data?.locations?.Slider.slice(4,5).map((item,index)=>{
            console.log(item);
            return(
               <div key={index}>

                                 <div className="small-post">
                                    <div className="post-content">
                                       <h3 onClick={() => handleNavigation(item, index)}> <a href={item.url}>{item.title}</a> </h3>
                                       <ul className="post-tools">
                                          <li onClick={() => handleNavigation(item, index)}>  {item.created_at} </li>
                                       </ul>
                                    </div>
                                 </div>
                                 </div>
            )})}
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
        </>
    )
}
export default LatestArticles;