import React from "react";
import '../css/style.css';
import '../css/animate.min.css';
import '../css/megaMenu.css';
import '../css/colors/amethyst.css';
// import '../css/colors/blue.css';
import '../css/colors/carrat.css';
import '../css/colors/defualt.css';
import '../css/colors/golden.css';
import '../css/colors/java-color.css';
// import '../css/colors/sea-green.css';
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


function RssSubscription() {
    return(
        <>
         <div className="widget widget-bg rss-widget">
                          <div className="heading">
                              <h2 className="main-heading">RSS Subscription</h2>
                              <span className="heading-ping"></span>
                           </div>
                           <div className="newsletter">
                           <form className="form-inline">
                           <div className="form-group">
                           <input type="email" className="form-control" id="exampleInputEmail2" placeholder="jane.doe@example.com"/>
                           </div>
                           <button type="submit" className="btn btn-default"><i className="ti-angle-right"></i></button>
                           </form>
                           <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </p>
                           </div>
                          </div>
        </>
    )
}
export default RssSubscription;