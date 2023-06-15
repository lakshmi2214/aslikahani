import React from "react";
import { useState } from "react";
import { useEffect} from "react";
// import Pic10 from '../images/users/author2.jpg';
import '../css/style.css';
import '../css/animate.min.css';
import '../css/megaMenu.css';
import '../css/colors/amethyst.css';
// import '../css/colors/blue.css';
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
import '../css/breakingNews.css';
import '../css/font-awesome.min.css';
import '../css/zerogrid.css';
import '../css/royal-slider/rs-default.css';
import '../css/owl.carousel.css';
import {useParams, useLocation} from "react-router-dom";


function AboutAuthor() {
   const param = useParams();
   const location = useLocation();
   console.log(param);
   console.log(location.state);

   const [data,setData] = useState([]);

   useEffect(()=>{
      const url = `https://newsbackend-388608.as.r.appspot.com/api/v1/articles/get?url=${location.state.item.url}`
      fetch(url).then(res => res.json())
      .then(res => {
      console.log(res)
      setData(res);
     })
      .catch(err => setData(err))
  },[])
    return(
        <>
        <div className="widget widget-bg">
                                <div className="heading">
                                <h2 className="main-heading">About Author</h2>
                              <span className="heading-ping"></span>
                                </div>
                                <div className="author-widget">
                                <div className="auth-pic">
                                <img src={ data.author_image } className="img-responsive" alt=""/>
                                </div>
                            <div className="auth-meta">
                            <h4> {data.authored_by}</h4>
                                 <p>{data.about_author}</p>
                                 {/* <div className="social-media-icons">
                                 <ul>
                                       <li> <a href=""><i className="ti-facebook"></i></a></li>
                                       <li> <a href=""><i className="ti-twitter"></i></a></li>
                                       <li> <a href=""><i className="ti-instagram"></i></a></li>
                                       <li> <a href=""><i className="ti-linkedin"></i></a></li>
                                       <li> <a href=""><i className="ti-google"></i></a></li>
                                       <li> <a href=""><i className="ti-pinterest"></i></a></li>
                                    </ul>
                                 </div> */}
                                 {/* <a href="" className="btn btn-colored-blog"> Read More</a> */}
                              </div>
                           </div>
                        </div>
        </>
    );
}
export default AboutAuthor;