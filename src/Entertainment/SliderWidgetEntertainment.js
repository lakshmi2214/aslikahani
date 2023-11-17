import React from "react";
import { useNavigate } from "react-router-dom";

function SliderWidgetEntertainment(props) {
   const navigate = useNavigate()
   const handleNavigation = (item) => {
      // console.log(item);

      navigate(`/entertainment/${item.url}`, { state: item });
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
                  {props.dataObject?.locations?.SliderWidget.slice(1, 2).map((item, index) => {
                     // console.log(item);
                     return (
                        <div key={index}>
                           <div className="picture">
                              <div className="category-image postwidget-img" onClick={() => handleNavigation(item, index)}>
                                 <a href={process.env.REACT_APP_DOMAIN_NAME + '/entertainment/' + item.url}>
                                    <img alt="" className="img-responsive" src={item.image} style={{ height: "250px", width: "400px" }} />
                                 </a>
                              </div>
                           </div>
                           <div className="detail">
                              <div className="caption" onClick={() => handleNavigation(item, index)}>
                                 <h5>
                                    <a href={process.env.REACT_APP_DOMAIN_NAME + '/entertainment/' + item.url}>{item.title}</a>
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
export default SliderWidgetEntertainment;