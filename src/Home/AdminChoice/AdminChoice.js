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
import '../../css/bootstrap-normal-container.min.css';
import '../../css/bootstrap.min.css';
import '../../css/style.css';
import { useNavigate } from "react-router-dom";

function AdminChoice(props) {
   const navigate = useNavigate();
   const handleNavigation = (item) => {
      console.log(item);

      navigate(`/${item.category}/${item.url}`, { state: { item } });
   }

   return (
      <>
         <section className="full-width-slider">
            <div className="container">
               <div className="row">
                  <div className="col-md-12 col-xs-12 col-sm-12">
                     <div className="col-md-12 col-xs-12 col-sm-12 nopadding">
                        <div className="heading">
                           <h2 className="main-heading">Editor's Choice</h2>
                           <span className="heading-ping"></span>
                        </div>
                     </div>
                     <div className="item" style={{ height: "300px", width: "400px", display: "inline-block" }}>
                        <div className="latest-news-grid grid-1">
                           <article className="col-md-12 col-sm-12 col-xs-12">
                              {props.dataObject?.locations?.AdminChoice.slice(0, 1).map((item, index) => {
                                 console.log(item);
                                 return (
                                    <div key={index}>
                                       <div className="picture">
                                          <div className="category-image" onClick={() => handleNavigation(item, index)}>

                                             <a href={process.env.REACT_APP_DOMAIN_NAME+'/'+item.category+'/'+item.url}>
                                                <img alt="" className="img-responsive" src={item.image} />
                                             </a>
                                          </div>
                                       </div>
                                       <div className="detail" style={{paddingLeft:"10px"}}>
                                          <div className="caption" onClick={() => handleNavigation(item, index)}>
                                             <h5>
                                                <a href={process.env.REACT_APP_DOMAIN_NAME+'/'+item.category+'/'+item.url}>{item.title}</a>
                                             </h5>
                                          </div>
                                          <ul className="post-tools" onClick={() => handleNavigation(item, index)}>
                                             <li> by <a href={process.env.REACT_APP_DOMAIN_NAME+'/'+item.category+'/'+item.url}> <strong> {item.authored_by}</strong> </a></li>
                                             <li>  {item.created_at} </li>
                                          </ul>
                                       </div>
                                    </div>
                                 )
                              })}
                           </article>
                        </div>
                     </div>
                     <div className="item" style={{ height: "300px", width: "400px", display: "inline-block" }}>
                        <div className="latest-news-grid grid-1">
                           <article className="col-md-12 col-sm-12 col-xs-12">
                              {props.dataObject?.locations?.AdminChoice.slice(3, 4).map((item, index) => {
                                 console.log(item);
                                 return (
                                    <div key={index}>
                                       <div className="picture">
                                          <div className="category-image" onClick={() => handleNavigation(item, index)}>

                                             <a href={process.env.REACT_APP_DOMAIN_NAME+'/'+item.category+'/'+item.url}>
                                                <img alt="" className="img-responsive" src={item.image} />
                                             </a>
                                          </div>
                                       </div>
                                       <div className="detail"style={{paddingLeft:"10px"}} >
                                          <div className="caption" onClick={() => handleNavigation(item, index)}>
                                             <h5>
                                                <a href={process.env.REACT_APP_DOMAIN_NAME+'/'+item.category+'/'+item.url}>{item.title}</a>
                                                <br/> <br/>
                                             </h5>
                                          </div>
                                          <ul className="post-tools" onClick={() => handleNavigation(item, index)}>
                                             <li> by <a href={process.env.REACT_APP_DOMAIN_NAME+'/'+item.category+'/'+item.url}> <strong> {item.authored_by}</strong> </a></li>
                                             <li>  {item.created_at} </li>
                                          </ul>
                                       </div>
                                    </div>
                                 )
                              })}
                           </article>
                        </div>
                     </div>
                     <div className="item" style={{ height: "300px", width: "400px", display: "inline-block" }}>
                        <div className="latest-news-grid grid-1">
                           <article className="col-md-12 col-sm-12 col-xs-12">
                              {props.dataObject?.locations?.AdminChoice.slice(2, 3).map((item, index) => {
                                 console.log(item);
                                 return (
                                    <div key={index}>
                                       <div className="picture">
                                          <div className="category-image" onClick={() => handleNavigation(item, index)}>

                                             <a href={process.env.REACT_APP_DOMAIN_NAME+'/'+item.category+'/'+item.url}>
                                                <img alt="" className="img-responsive" src={item.image} />
                                             </a>
                                          </div>
                                       </div>
                                       <div className="detail" style={{paddingLeft:"10px"}}>
                                          <div className="caption" onClick={() => handleNavigation(item, index)}>
                                             <h5>
                                                <a href={process.env.REACT_APP_DOMAIN_NAME+'/'+item.category+'/'+item.url}>{item.title}</a>
                                             </h5>
                                          </div>
                                          <ul className="post-tools" onClick={() => handleNavigation(item, index)}>
                                             <li> by <a href={process.env.REACT_APP_DOMAIN_NAME+'/'+item.category+'/'+item.url}> <strong> {item.authored_by}</strong> </a></li>
                                             <li>  {item.created_at} </li>
                                          </ul>
                                       </div>
                                    </div>
                                 )
                              })}
                           </article>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
}
export default AdminChoice;