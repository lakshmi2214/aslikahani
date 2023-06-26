import React from 'react';
import '../css/style.css';
import '../css/animate.min.css';
import '../css/megaMenu.css';
import '../css/colors/amethyst.css';
import '../css/colors/blue.css';
import '../css/colors/carrat.css';
import '../css/colors/defualt.css';
import '../css/colors/golden.css';
import '../css/colors/java-color.css';
import '../css/colors/sea-green.css';
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
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SristarAd1() {
   const navigate = useNavigate()
   const handleNavigation = (item, index) => {
      console.log(item);

      navigate(`/home`, { state: { item } });
   }
   const [data, setData] = useState([])

   useEffect(() => {
      const url = "https://newsbackend-388608.as.r.appspot.com/api/v1/category/list"
      fetch(url).then(res => res.json())
         .then(res => {
            console.log(res)
            setData(res)
         })
         .catch(err => setData(err))
   }, [])
   return (
      <>
         <div className="widget widget-bg">


            <div className="heading">
            </div>
            {data.categories?.slice(0, 1).map((item, index) => {
               return (
                  item.advertisements.TopPosterad1.slice(0, 1).map((item, index) => {
                     console.log(item)
                     return (

                        <div key={index}>
                           <div className="ad-div style-box">
                              <a href={item.url}>
                                 <img src={item.image} className="img-responsive " alt="" style={{ height: "300px", width: "300px" }} />
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
                     )
                  }))
            })}

         </div>
      </>
   )
}
export default SristarAd1;