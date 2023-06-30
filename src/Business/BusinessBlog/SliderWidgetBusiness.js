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
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function SliderWidgetBusiness() {
   const navigate = useNavigate()
   const handleNavigation = (item, index) => {
      console.log(item);

      navigate(`/business/${item.url}`, { state: {item} });
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
        <div className="widget widget-bg ">
                        <div className="heading">
                           <h2 className="main-heading">Slider Post Widget</h2>
                           <span className="heading-ping"></span>
                        </div>
                        {/* <div className="featured-post-slider-single-post owl-carousel owl-theme"> */}
                           <div className="item">
                              <div className="latest-news-grid grid-1">
                              {data?.locations?.SliderWidget.slice(0,1).map((item,index)=>{
                                    console.log(item);
                                     return(
                                     <div key={index}>
                                 <div className="picture">
                                    <div className="category-image">
                                       <a href={item.url}>
                                       <img alt="" className="img-responsive" src={item.image} style={{height:"250px", width:"330px"}}/>
                                       </a>
                                    </div>
                                 </div>
                                 <div className="detail">
                                    <div className="caption">
                                       <h5>
                                          <a href={item.url}>{item.title}</a>
                                       </h5>
                                    </div>
                                    <ul className="post-tools">
                                       <li> by <a href=""> <strong> {item.authored_by}</strong> </a></li>
                                       <li>  {item.created_at} </li>
                                       </ul>
                                 </div>
                                 </div>
                                     )})}
                              </div>
                           </div>
                          
                        </div>
                     {/* </div> */}
        </>
    )
}
export default SliderWidgetBusiness;