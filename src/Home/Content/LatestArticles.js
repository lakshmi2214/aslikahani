import React from "react";
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
import { useNavigate } from "react-router-dom";


function LatestArticles(props) {
   const navigate = useNavigate();
   const handleNavigation = (item) => {
    console.log(item);
 
     navigate(`/${item.category}/${item.url}`, { state: {item }});
   }
    
 return(
        <>
             <div className="section">
                     <div className="row">
                        <div className="col-md-12 col-xs-12 col-sm-12">
                           <div className="heading">
                              <h2 className="main-heading">Latest Articles</h2>
                              </div>
                        </div>
                     </div>
                     <div className="row">
                     
      
    {props.dataObject?.locations?.LatestPost.slice(0,1).map((item,index)=>{
            console.log(item);
            return(
               <div key={index}>

                        <article className="col-md-7 col-sm-7 col-xs-12">
                           <div className="grid-1">
                              <div className="picture">
                                 <div className="category-image" onClick={() => handleNavigation(item, index)}>
                                    <a href={process.env.REACT_APP_DOMAIN_NAME+'/'+item.category+'/'+item.url}>
                                    <img alt="" className="img-responsive" src={item.image} style={{height:"250px"}}/>
                                    </a>
                                    
                                    </div>
                              </div>
                              <div className="detail">
                                 <div className="caption">
                                    <h5 onClick={() => handleNavigation(item, index)}>
                                       <a href={process.env.REACT_APP_DOMAIN_NAME+'/'+item.category+'/'+item.url}>{item.title}</a>
                                    </h5>
                                 </div>
                                 <ul className="post-tools">
                                    <li onClick={() => handleNavigation(item, index)}> by <a > <strong> {item.authored_by}</strong> </a></li>
                                    <li onClick={() => handleNavigation(item, index)}> {item.created_at}  </li>
                                   
                                 </ul>
                                 <p onClick={() => handleNavigation(item, index)}>{item.description}  </p>
                              </div>
                           </div>
                        </article>
                        </div>
                       )})}
         
                        <div className="col-md-5 col-sm-5 col-xs-12">
                           <ul className="small-grid">
                              <li>
                        {props.dataObject?.locations?.LatestPost.slice(1,5).map((item,index)=>{
                       console.log(item);
                       return(
                        <div key={index}>

                                 <div className="small-post">
                                    <div className="post-content">
                                       <h3 onClick={() => handleNavigation(item, index)}> <a href={process.env.REACT_APP_DOMAIN_NAME+'/'+item.category+'/'+item.url}>{item.title} </a> </h3>
                                       <ul className="post-tools">
               
                                          <li onClick={() => handleNavigation(item, index)}>  {item.created_at} </li>
                                       </ul>
                                    </div>
                                 </div>
                                 </div>
            )})}
                              </li>
                              <li>
      
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
        </>
    )
}
export default LatestArticles;