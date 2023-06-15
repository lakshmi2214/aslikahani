import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AdvertisementLeft1() {
    const navigate = useNavigate()
   const handleNavigation = (item, index) => {
      console.log(item);

      navigate(`/technology`, { state: {item} });
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
        <div className="ad-div text-center" style={{border:"1px solid black"}}>
            <div>Advertisement</div>
        {data?.categories?.slice(7,8).map((item) => {
            return(
               item.advertisements.slice(3,4).map((item,index) =>{
                  console.log(item)
                         
            return(
               <div key={index}>
                     <a href={item.url} target="_blank" onClick={() => handleNavigation(item, index)}>
                         <img src={item.image} className="img-responsive" alt=""/>
                         </a>
                         
                        </div>
            )}))})}
                  </div>
        </>
    )
}
export default AdvertisementLeft1;