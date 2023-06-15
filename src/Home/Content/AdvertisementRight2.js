import React from 'react';
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
import IA8 from '../../images/ads/300-8.jpg';
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdvertisementRight2() {
   const navigate = useNavigate()
   const handleNavigation = (item, index) => {
      console.log(item);

      navigate(`/home`, { state: {item }});
   }
   const [data,setData] = useState([])
 
 useEffect(()=>{
     const url = "https://newsbackend-388608.as.r.appspot.com/api/v1/category/list"
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
        
                  
                         <div className="heading">
                           <h2 className="main-heading">Advertizement</h2>
                           <span className="heading-ping"></span>
                        </div> 
                        {data?.categories?.slice(4,5).map((item) => {
            return(
               item.advertisements.slice(2,3).map((item,index) =>{
                  console.log(item)
                         
            return(
               <div key={index}>
                        <div className="ad-div style-box">
                           <a href={item.url}>
                           <img src={item.image} className="img-responsive " alt="" style={{height:"250px",width:"330px"}}/>
                           </a>
                        </div>
                        <div className="detail">
                              <div className="caption" onClick={() => handleNavigation(item, index)}>
                                 <h5>
                                    <a href={item.url}>{item.description}</a>
                                 </h5>
                              </div>
                           </div>
                        </div>
            )}))})}
                
                     </div>
        </>
    )
}
export default AdvertisementRight2;