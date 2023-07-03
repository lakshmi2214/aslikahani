import React from "react";
import { useNavigate } from "react-router-dom";

function SliderWidgetEducation(props) {
   const navigate = useNavigate()
   const handleNavigation = (item) => {
      console.log(item);

      navigate(`/${item.category}/${item.url}`, { state: { item } });
   }
   return (
      <>
         <div className="widget widget-bg ">
            <div className="heading">
               <h2 className="main-heading">Post Widget</h2>
               <span className="heading-ping"></span>
            </div>
            <div className="item">
               <div className="latest-news-grid grid-1">
                  {props.dataObject?.locations?.EduGeneral.slice(10,11).map((item, index) => {
                     console.log(item);
                     return (
                        <div key={index}>
                           <div className="picture">
                              <div className="category-image" onClick={() => handleNavigation(item, index)}>
                                 <a href={process.env.REACT_APP_DOMAIN_NAME+'/'+item.category+'/'+item.url}>
                                    <img alt="" className="img-responsive" src={item.image} style={{ height: "250px", width: "330px" }} />
                                 </a>
                              </div>
                           </div>
                           <div className="detail">
                              <div className="caption" onClick={() => handleNavigation(item, index)}>
                                 <h5>
                                    <a href={process.env.REACT_APP_DOMAIN_NAME+'/'+item.category+'/'+item.url}>{item.title}</a>
                                 </h5>
                              </div>
                              <ul className="post-tools" onClick={() => handleNavigation(item, index)}>
                                 <li> by <a href=""> <strong> {item.authored_by}</strong> </a></li>
                                 <li>  {item.created_at} </li>
                              </ul>
                           </div>
                        </div>
                     )
                  })}
               </div>
            </div>

         </div>
      </>
   )
}
export default SliderWidgetEducation;