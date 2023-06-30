import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SliderWidgetEducation() {
   const navigate = useNavigate()
   const handleNavigation = (item, index) => {
      console.log(item);

      navigate(`/education/${item.url}`, { state: {item} });
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
                                    <div className="category-image" onClick={() => handleNavigation(item, index)}>
                                       <a href={process.env.REACT_APP_DOMAIN_NAME+'/education/'+item.url}>
                                       <img alt="" className="img-responsive" src={item.image} style={{height:"250px", width:"330px"}}/>
                                       </a>
                                    </div>
                                 </div>
                                 <div className="detail">
                                    <div className="caption" onClick={() => handleNavigation(item, index)}>
                                       <h5>
                                          <a href={process.env.REACT_APP_DOMAIN_NAME+'/education/'+item.url}>{item.title}</a>
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
                          
                        </div>
                     {/* </div> */}
        </>
    )
}
export default SliderWidgetEducation;