import React from 'react';
import '../css/style.css';
import '../css/animate.min.css';
import '../css/megaMenu.css';
import '../css/colors/amethyst.css';
import '../css/colors/blue.css';
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

function SristarAd2(props) {

   return (
      <>



         {props.addObject?.categories?.slice(0, 1).map((item, index) => {
            return (
               item.advertisements.TopPosterad1.slice(1, 2).map((item, index) => {

                  return (
                     <div className='row' key={index}>
                        <div className="col-md-12">
                           <div className="slider-adds">
                              <a href={item.url} target='blank'>
                                 <img className='img-fluid' src={item.image} />
                              </a>
                              <div className="article-desc-small">
                                 <h4>
                                    <a href={item.url} target='blank'>{item.description}</a>
                                 </h4>
                              </div>
                           </div>
                        </div>
                     </div>
                     // <div key={index}>
                     //    <div className="ad-div style-box">
                     //       <a href={item.url} target='blank'>
                     //          <img src={item.image} className="img-responsive " alt="" style={{ height: "400px", width: "330px" }} />
                     //       </a>
                     //    </div>
                     //    <div className="detail">
                     //       <div className="caption" >
                     //          <h5>
                     //             <a href={item.url} target='blank'>{item.description}</a>
                     //          </h5>
                     //       </div>
                     //    </div>
                     // </div>
                  )
               }))
         })}


      </>
   )
}
export default SristarAd2;