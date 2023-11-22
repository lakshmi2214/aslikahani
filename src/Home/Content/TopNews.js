import React from "react";
import { useNavigate } from "react-router-dom";

function TopNews(props) {
   const navigate = useNavigate();
   const handleNavigation = (item) => {
      // console.log(item);

      navigate(`/${item.category}/${item.url}`, { state: { item } });
   }

   return (
      <>
         <div className="category-widget">
            <h4>Top Articles</h4>

            <div className="grid-1">
               {props.dataObject?.locations?.TopNews.slice(0, 6).map((item, index) => {
                  // console.log(item);
                  return (
                     <div key={index}>
                        <div className="picture">

                           <div className="category-image" onClick={() => handleNavigation(item, index)}>
                              <a href={process.env.REACT_APP_DOMAIN_NAME + '/'+item.category+'/' + item.url}>
                                 <img alt="" className="img-responsive" src={item.image} />
                              </a>
                           </div>
                        </div>
                        <div className="detail">
                           <div className="caption">
                              <h5 onClick={() => handleNavigation(item, index)} style={{width:"150px"}}>
                                 <a href={process.env.REACT_APP_DOMAIN_NAME + '/'+item.category+'/' + item.url}>{item.title}</a>
                              </h5>
                           </div>
                        </div>
                     </div>
                  )
               })}
            </div>
         </div>
      </>
   );
}
export default TopNews;