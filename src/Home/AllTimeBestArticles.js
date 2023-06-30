import React from "react";
import '../css/style.css';
import '../css/animate.min.css';
import '../css/megaMenu.css';
import '../css/colors/amethyst.css';
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
import '../css/royal-slider/rs-default.png';
import '../css/breakingNews.css';
import '../css/font-awesome.min.css';
import '../css/owl.carousel.css';
import '../css/zerogrid.css';
import '../fonts/glyphicons-halflings-regular.svg';
import '../css/royal-slider/rs-default.css';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AllTimeBestArticles() {
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
        <section className="parallel-post-style">
         <div className="container">
            <div className="row">
               <div className="col-md-12 col-xs-12 col-sm-12">
                  <div className="heading">
                     <h2 className="main-heading">All time Best Articles</h2>
                     <span className="heading-ping"></span>                     
                  </div>
               </div>
               <div className="col-md-12 col-sm-12 col-xs-12">
                  <div className="row">
                     <div className="col-md-4 col-sm-6 col-xs-12">
                     {data?.locations?.AllTimeBestArticle.slice(0,1).map((item,index)=>{
                                       console.log(item);
                                        return(
                                        <div key={index}>
                        <div className="grid-box">
                           <ul>
                              <li className="col-md-5 col-sm-3 col-xs-12 nopadding">
                                 <div className="thumb" onClick={() => handleNavigation(item, index)} >
                                    <a href={process.env.REACT_APP_DOMAIN_NAME+'/home/'+item.url}>
                                    <img src={item.image} alt="" style={{height:"150px", width:"200px"}} />
                                    </a>
                                 </div>
                              </li>
                              <li className="col-md-7 col-sm-9 col-xs-12">
                                 <div className="desc post-content" onClick={() => handleNavigation(item, index)}>
                                    <h5><a href={process.env.REACT_APP_DOMAIN_NAME+'/home/'+item.url}>{item.title}</a></h5>
                                    <ul className="post-tools"><a href={process.env.REACT_APP_DOMAIN_NAME+'/home/'+item.url}>
                                       <li> {item.created_at} </li></a>
                                    </ul>
                                 </div>
                              </li>
                           </ul>
                        </div>
                        </div>
                                 )})}
                     </div>
                     <div className="col-md-4 col-sm-6 col-xs-12">
                     {data?.locations?.AllTimeBestArticle.slice(1,2).map((item,index)=>{
                                       console.log(item);
                                        return(
                                        <div key={index}>
                        <div className="grid-box">
                           <ul>
                              <li className="col-md-5 col-sm-3 col-xs-12 nopadding">
                                 <div className="thumb" onClick={() => handleNavigation(item, index)}>
                                 <a href={process.env.REACT_APP_DOMAIN_NAME+'/home/'+item.url}>
                                    <img src={item.image} alt="" style={{height:"150px", width:"200px"}}/>
                                 </a>
                                 </div>
                              </li>
                              <li className="col-md-7 col-sm-9 col-xs-12">
                                 <div className="desc post-content" onClick={() => handleNavigation(item, index)}>
                                    <h5><a href={process.env.REACT_APP_DOMAIN_NAME+'/home/'+item.url}>{item.title}</a></h5>
                                    <ul className="post-tools"><a href={process.env.REACT_APP_DOMAIN_NAME+'/home/'+item.url}>
                                       <li> {item.created_at} </li></a>                                       
                                    </ul>
                                 </div>
                              </li>
                           </ul>
                        </div>
                        </div>
                                 )})}
                     </div>
                     <div className="col-md-4 col-sm-6 col-xs-12">
                     {data?.locations?.AllTimeBestArticle.slice(2,3).map((item,index)=>{
                                       console.log(item);
                                        return(
                                        <div key={index}>
                        <div className="grid-box">
                           <ul>
                              <li className="col-md-5 col-sm-3 col-xs-12 nopadding">
                                 <div className="thumb" onClick={() => handleNavigation(item, index)}>
                                 <a href={process.env.REACT_APP_DOMAIN_NAME+'/home/'+item.url}>
                                    <img src={item.image} alt="" style={{height:"150px", width:"200px"}}/>
                                 </a>
                                 </div>
                              </li>
                              <li className="col-md-7 col-sm-9 col-xs-12">
                                 <div className="desc post-content" onClick={() => handleNavigation(item, index)}>
                                    <h5><a href={process.env.REACT_APP_DOMAIN_NAME+'/home/'+item.url}>{item.title}</a></h5>
                                    <ul className="post-tools"><a href={process.env.REACT_APP_DOMAIN_NAME+'/home/'+item.url}>
                                       <li> {item.created_at} </li></a>
                                       </ul>
                                 </div>
                              </li>
                           </ul>
                        </div>
                        </div>
                                 )})}
                     </div>
                      <div className="col-md-4 col-sm-6 col-xs-12">
                      {data?.locations?.AllTimeBestArticle.slice(3,4).map((item,index)=>{
                                       console.log(item);
                                       
                                        return(
                                        <div key={index}>
                        <div className="grid-box">
                           <ul>
                              <li className="col-md-5 col-sm-3 col-xs-12 nopadding">
                                 <div className="thumb" onClick={() => handleNavigation(item, index)}>
                                 <a href={process.env.REACT_APP_DOMAIN_NAME+'/home/'+item.url}>
                                    <img src={item.image} alt="" style={{height:"150px", width:"200px"}}/>
                                 </a>
                                 </div>
                              </li>
                              <li className="col-md-7 col-sm-9 col-xs-12">
                                 <div className="desc post-content" onClick={() => handleNavigation(item, index)}>
                                    <h5><a href={process.env.REACT_APP_DOMAIN_NAME+'/home/'+item.url}>{item.title}</a></h5>
                                    <ul className="post-tools"><a href={process.env.REACT_APP_DOMAIN_NAME+'/home/'+item.url}>
                                       <li> {item.created_at}</li></a>
                                    </ul>
                                 </div>
                              </li>
                           </ul>
                        </div>
                        </div>
                                 )})}
                              
                     </div>
                     <div className="col-md-4 col-sm-6 col-xs-12">
                     {data?.locations?.AllTimeBestArticle.slice(4,5).map((item,index)=>{
                                       console.log(item);
                                        return(
                                        <div key={index}>
                        <div className="grid-box">
                           <ul>
                              <li className="col-md-5 col-sm-3 col-xs-12 nopadding">
                                 <div className="thumb" onClick={() => handleNavigation(item, index)}>
                                 <a href={process.env.REACT_APP_DOMAIN_NAME+'/home/'+item.url}>
                                    <img src={item.image} alt="" style={{height:"150px", width:"200px"}}/>
                                 </a>
                                 </div>
                              </li>
                              <li className="col-md-7 col-sm-9 col-xs-12">
                                 <div className="desc post-content" onClick={() => handleNavigation(item, index)}>
                                    <h5><a href={process.env.REACT_APP_DOMAIN_NAME+'/home/'+item.url}>{item.title}</a></h5>
                                    <ul className="post-tools"><a href={process.env.REACT_APP_DOMAIN_NAME+'/home/'+item.url}>
                                       <li> {item.created_at} </li></a>
                                      </ul>
                                 </div>
                              </li>
                           </ul>
                        </div>
                        </div>
                                 )})}
                     </div>
                     <div className="col-md-4 col-sm-6 col-xs-12">
                     {data?.locations?.AllTimeBestArticle.slice(0,1).map((item,index)=>{
                                       console.log(item);
                                        return(
                                        <div key={index}>
                        <div className="grid-box">
                           <ul>
                              <li className="col-md-5 col-sm-3 col-xs-12 nopadding">
                                 <div className="thumb" onClick={() => handleNavigation(item, index)}>
                                 <a href={process.env.REACT_APP_DOMAIN_NAME+'/home/'+item.url}>
                                    <img src={item.image} alt="" style={{height:"150px", width:"200px"}}/>
                                 </a>
                                 </div>
                              </li>
                              <li className="col-md-7 col-sm-9 col-xs-12">
                                 <div className="desc post-content" onClick={() => handleNavigation(item, index)}>
                                    <h5><a href={process.env.REACT_APP_DOMAIN_NAME+'/home/'+item.url}>{item.title}</a></h5>
                                    <ul className="post-tools"><a href={process.env.REACT_APP_DOMAIN_NAME+'/home/'+item.url}>
                                       <li> {item.created_at} </li></a>
                                    </ul>
                                 </div>
                              </li>
                           </ul>
                        </div>
                        </div>
                                 )})}
                     </div>
                     {/* <div className="col-md-4 col-sm-6 col-xs-12"> */}
 {/* {data?.locations?.slice(8,9).map((item)=>{
                                       return(
                                       item?.articles?.slice(0,1).map((item,index)=>{
                                       console.log(item);
                                        return(
                                        <div key={index}>
                        <div className="grid-box">
                           <ul>
                              <li className="col-md-5 col-sm-3 col-xs-12 nopadding">
                                 <div className="thumb" onClick={() => handleNavigation(item, index)}>
                                 <a href={process.env.REACT_APP_DOMAIN_NAME+'/home/'+item.url}>
                                    <img src={item.image} alt="" style={{height:"150px", width:"200px"}}/>
                                 </a>
                                 </div>
                              </li>
                              <li className="col-md-7 col-sm-9 col-xs-12">
                                 <div className="desc post-content" onClick={() => handleNavigation(item, index)}>
                                    <h5><a href={process.env.REACT_APP_DOMAIN_NAME+'/home/'+item.url}>{item.title}</a></h5>
                                    <ul className="post-tools"><a href={process.env.REACT_APP_DOMAIN_NAME+'/home/'+item.url}>
                                       <li>  {item.created_at}</li></a>
                                       </ul>
                                 </div>
                              </li>
                           </ul>
                        </div>
                        </div>
                                 )}))
                                 })}
                     </div>
                     <div className="col-md-4 col-sm-6 col-xs-12">
 {data?.locations?.slice(8,9).map((item)=>{
                                       return(
                                       item?.articles?.slice(1,2).map((item,index)=>{
                                       console.log(item);
                                        return(
                                        <div key={index}>
                        <div className="grid-box">
                           <ul>
                              <li className="col-md-5 col-sm-3 col-xs-12 nopadding">
                                 <div className="thumb" onClick={() => handleNavigation(item, index)}>
                                 <a href={process.env.REACT_APP_DOMAIN_NAME+'/home/'+item.url}>
                                    <img src={item.image} alt="" style={{height:"150px", width:"200px"}}/>
                                 </a>
                                 </div>
                              </li>
                              <li className="col-md-7 col-sm-9 col-xs-12">
                                 <div className="desc post-content" onClick={() => handleNavigation(item, index)}>
                                    <h5><a href={process.env.REACT_APP_DOMAIN_NAME+'/home/'+item.url}>{item.title}</a></h5>
                                    <ul className="post-tools"><a href={process.env.REACT_APP_DOMAIN_NAME+'/home/'+item.url}>
                                       <li> {item.created_at}</li></a>
                                    </ul>
                                 </div>
                              </li>
                           </ul>
                        </div>
                        </div>
                                 )}))
                                 })}
                     </div>
                     <div className="col-md-4 col-sm-6 col-xs-12">
 {data?.locations?.slice(8,9).map((item)=>{
                                       return(
                                       item?.articles?.slice(0,1).map((item,index)=>{
                                       console.log(item);
                                        return(
                                        <div key={index}>
                        <div className="grid-box">
                           <ul>
                              <li className="col-md-5 col-sm-3 col-xs-12 nopadding">
                                 <div className="thumb" onClick={() => handleNavigation(item, index)}>
                                 <a href={process.env.REACT_APP_DOMAIN_NAME+'/home/'+item.url}>
                                    <img src={item.image} alt="" style={{height:"150px", width:"200px"}}/>
                                 </a></div>
                              </li>
                              <li className="col-md-7 col-sm-9 col-xs-12">
                                 <div className="desc post-content" onClick={() => handleNavigation(item, index)}>
                                    <h5><a href={process.env.REACT_APP_DOMAIN_NAME+'/home/'+item.url}>{item.title}</a></h5>
                                    <ul className="post-tools"><a href={process.env.REACT_APP_DOMAIN_NAME+'/home/'+item.url}>
                                       <li>{item.created_at}</li></a>
                                    </ul>
                                 </div>
                              </li>
                           </ul>
                        </div>
                        </div>
                                 )})) */}
                                 {/* })}  */}
                     {/* </div> */}
                  </div>
               </div> 
            </div>
         </div>
      </section>
        </>
    );
}
export default AllTimeBestArticles;