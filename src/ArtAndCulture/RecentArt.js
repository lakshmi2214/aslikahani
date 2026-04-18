import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RecentArt(props) {
   const [isMobile, setIsMobile] = useState(false);
   const navigate = useNavigate();

   useEffect(() =>{

    })


   return (
      <>
         {/* <div className="widget widget-bg">
            <div className="tabs">
               <div role="tabpanel">
                  <ul className="nav nav-tabs nav-justified" role="tablist">
                     <li className="active" role="presentation" > <a aria-controls="popularRecent" aria-expanded="true" data-toggle="tab"
                        href="#popularRecent" role="tab" style={{ color: "white", backgroundColor:"#d32415"}}>Popular </a> </li>
                  </ul>
                  <br></br>
                  <div className="small-grid-container">
                     <ul className="small-grid">
                        <li>
                           {props.dataObject?.locations?.ArtCultureGeneral.slice(0, 4).map((item, index) => {
                              // console.log(item);
                              return (
                                 <div key={index}>
                                    <div className="small-post">
                                       <div className="small-thumb small-img">
                                          <a href={process.env.REACT_APP_DOMAIN_NAME+'/Art-and-Culture/'+item.url}>
                                             <img alt="" src={item.image} style={{ height: "85px", width: "85px" }} className="" />
                                          </a>
                                       </div>
                                       <div className="post-content post-contents">
                                          <h3> <a href={process.env.REACT_APP_DOMAIN_NAME+'/Art-and-Culture/'+item.url}>{item.title}</a> </h3>
                                          <ul className="post-tools" onClick={() => handleNavigation(item, index)}>
                                             <li>  {item.created_at} </li>
                                          </ul>
                                       </div>
                                    </div>
                                 </div>
                              )
                           })}

                        </li>

                     </ul>
                  </div>

               </div>
            </div>
         </div> */}
          <div className='col-md-12 mobile-view' style={{padding:"0px"}}>
        <div className='text-center' style={{ height: "35px", padding: "8px", backgroundColor: "#d32415", color: "white", cursor: "default" }}>POPULAR</div>
       {props.dataObject?.locations?.ArtCultureGeneral.slice(0, 5).map((item, index) => {

          return (
            <div key={index}>
              <div className='col-md-12' style={{padding:"0px"}}>
              <div className='col-md-4' style={{ padding: "initial" }}>
                <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>
                  <img src={item.image} style={{ width: "100%", height: "90px", padding: "5px" }} alt='popular-img' />
                </a>
              </div>
              <div className='col-md-8' style={{ padding:"0px" }}>
                <div className='article-desc' style={{ padding: "5px" }}>
                  <h5 className='text-left' > <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>  {item.title}</a></h5>
                  <h5> {item.created_at}</h5>
                </div>
              </div>
            </div>
            </div>
          )
        })}
      </div>
      {isMobile ? null:(
         <div className='col-md-12'>
         <div className='text-center' style={{ height: "35px", padding: "8px", backgroundColor: "#d32415", color: "white", cursor: "default" }}>POPULAR</div>
        {props.dataObject?.locations?.ArtCultureGeneral.slice(0, 5).map((item, index) => {
 
           return (
             <div key={index}>
               <div className='col-md-12'style={{padding:"0px"}}>
               <div className='col-md-4' style={{ padding: "initial" }}>
                 <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>
                   <img src={item.image} style={{ width: "100%", padding: "5px" }} alt='popular-img' />
                 </a>
               </div>
               <div className='col-md-8' style={{ padding:"0px" }}>
                 <div className='article-desc' style={{ padding: "5px" }}>
                   <h5 className='text-left' > <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>  {item.title}</a></h5>
                   <h5> {item.created_at}</h5>
                 </div>
               </div>
             </div>
             </div>
           )
         })}
       </div>
      )}
      </>
   );
}
export default RecentArt;