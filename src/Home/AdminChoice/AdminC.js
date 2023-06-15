import React from "react";
import Admin1 from '../../images/posts/33.jpg';
import Admin2 from '../../images/posts/61.jpg';
import Admin3 from '../../images/posts/47.jpg';
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
import '../../css/bootstrap-normal-container.min.css';
import '../../css/bootstrap.min.css';
import '../../css/style.css';

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AdminC() {
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
        <div className="col-md-12 col-xs-12 col-sm-12 nopadding">
        <div className="heading">
        <h2 className="main-heading">Admin's Choice</h2>
        <span className="heading-ping"></span>
                    </div>
                </div>
                
                
                <div className="item"  style={{height:"300px", width:"400px",display:"inline-block"}}>
                <article className="col-md-12 col-sm-12 col-xs-12">
                {data?.locations?.AdminChoice.slice(0,1).map((item,index)=>{
                                       console.log(item);
                                        return(
                                        <div key={index}>
                <div className="picture">
                
                <div className="category-image"  onClick={() => handleNavigation(item, index)}>
                <a href={item.url}>
                <img alt="" className="img-responsive" src={item.image} style={{height:"280px",width:"380px"}}/>
                </a>
                </div>
                        </div>
                        <div className="detail">
                        <div className="caption"  onClick={() => handleNavigation(item, index)}>
                        <h5>
                            <a href={item.url}>{item.title}</a>
                                       </h5>
                        </div>
                        <ul className="post-tools"  onClick={() => handleNavigation(item, index)}>
                                       <li> by <a href={item.url}> <strong> {item.authored_by}</strong> </a></li>
                                       <li>  {item.created_at} </li>
                                    </ul>
                                   </div>
                            </div>
                                 )})}
                        </article>
                         </div>
                         <div className="item"  style={{height:"300px", width:"400px",display:"inline-block"}}>
                         <article className="col-md-12 col-sm-12 col-xs-12">
                         {data?.locations?.AdminChoice.slice(1,2).map((item,index)=>{
                                       console.log(item);
                                        return(
                                        <div key={index}>
                         <div className="picture">
                         <div className="category-image"  onClick={() => handleNavigation(item, index)}>
                         <a href={item.url}>
                         <img alt="" className="" src={item.image} style={{height:"280px",width:"380px"}}/>
                         </a>
                                    </div>
                                 </div> 
                                 <div className="detail">
                                 <div className="caption"  onClick={() => handleNavigation(item, index)}>
                                 <h5>
                                          <a href={item.url}>{item.title}</a>
                                       </h5>
                                 </div>
                                 <ul className="post-tools"  onClick={() => handleNavigation(item, index)}>
                                       <li> by <a href={item.url}> <strong> {item.authored_by}</strong> </a></li>
                                       <li>  {item.created_at} </li>
                                    </ul>
                                 </div>
                                 </div>
                                 )})}
                         </article>
                         </div>
                          <div className="item" style={{height:"300px", width:"400px",display:"inline-block"}}>
                         <article className="col-md-12 col-sm-12 col-xs-12">
                         {data?.locations?.AdminChoice.slice(2,3).map((item,index)=>{ 
                            console.log(item);
                                        return(
                                        <div key={index}>
                         <div className="picture">
                         <div className="category-image"  onClick={() => handleNavigation(item, index)}>
                         <a href={item.url}>
                         <img alt="" className="" src={item.image} style={{height:"280px",width:"380px"}}/>
                         </a>
                                     </div>
                                     </div>
                                     <div className="detail">
                                     <div className="caption"  onClick={() => handleNavigation(item, index)}>
                                     <h5>
                                          <a href={item.url}>{item.title}</a>
                                       </h5>
                                     </div>
                                     <ul className="post-tools"  onClick={() => handleNavigation(item, index)}>
                                     <li> by <a href={item.url}> <strong> {item.authored_by}</strong> </a></li>
                                       <li> {item.created_at} </li>
                                     </ul>
                                     </div>
                                     </div>
                                 )})}
                                 </article>
                             </div>
         </>
    );
}
export default AdminC;