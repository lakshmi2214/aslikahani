import React from "react";
import Pic7 from '../../images/users/author-4.jpg';
import Pic8 from '../../images/users/author8.jpg';
import Pic9 from '../../images/users/author3.jpg';
import '../../css/style.css';
import '../../css/animate.min.css';
import '../../css/megaMenu.css';
import '../../css/colors/amethyst.css';
// import '../../css/colors/blue.css';
import '../../css/colors/carrat.css';
import '../../css/colors/defualt.css';
import '../../css/colors/golden.css';
import '../../css/colors/java-color.css';
// import '../../css/colors/sea-green.css';
import '../../css/themify-icons.css';
import '../../css/royal-slider/royalslider.css';
import '../../css/tranparentmenu.css';
import '../../css/magnific-popup.css';
import '../../css/bootstrap-normal-container.min.css';
import '../../css/bootstrap.min.css';
import '../../css/owl.theme.default.css';
import '../../css/breakingNews.css';
import '../../css/font-awesome.min.css';
import '../../css/zerogrid.css';
import '../../css/royal-slider/rs-default.css';
import '../../css/owl.carousel.css';

function TotalComments() {
    return(
        <>
        <div className="reviews">
                            <h3>Total Coments (46)</h3>
                        <ol className="comment-list">
                        <li className="comment">
                        <div className="comment-info">
                        <img className="pull-left hidden-xs" src={ Pic7 } alt="author"/>
                        <div className="author-title">
                        <strong><a href="">Rebbica Alex</a></strong>
                                       <ul className="list-inline pull-right">
                                       <li>22 Feb 2016 </li>
                                       <li><a href="#"><i className="fa fa-reply"></i> Reply</a> </li>
                                       </ul>
                                    <p>You wanna be where everyboody knows Your name. And a we knooow Flipper lives in a 
                                        world full of wonder flying there-under under the sea creepy and kooky</p>
                                </div>
                                </div>
                                {/* // </div> */}
                                <ol className="children">
                                <li className="comment">
                                <div className="comment-info">
                                <img className="pull-left hidden-xs" src={ Pic8 } alt="author" />
                                       <div className="author-desc">
                                       <div className="author-title">
                                       <strong><a href="">Morgan Waston</a></strong>
                                             <ul className="list-inline pull-right">
                                             <li>22 Feb 2016 </li>
                                                <li><a href="#"><i className="fa fa-reply"></i> Reply</a> </li>
                                             </ul>
                                       </div>
                                       <p>The first mate and his Skipper too this is will do their very best to make the most others comfortable in their tropic lives in a world of wonder.</p>
                                    </div>
                                    </div>
                                    </li>
                                    </ol>
                                    <li className="comment">
                                    <div className="comment-info">
                                    <img className="pull-left hidden-xs" src={ Pic9 } alt="author"/>
                                    <div className="author-desc">
                                    <div className="author-title">
                                    <strong><a href="">Ricky John</a></strong>
                                       <ul className="list-inline pull-right">
                                       <li>18 Jan 2016 </li>
                                          <li><a href="#"><i className="fa fa-reply"></i> Reply</a> </li>
                                       </ul>
                                    </div>
                                    <p>You wanna be where everyboody knows Your name. And a we knooow Flipper lives in a world full of wonder 
                                        flying there-under under the sea creepy and kooky</p>
                                    </div>
                                    </div>
                                    </li>
                                   </li>
                                 </ol>
                                 </div>
        </>
    )
}
export default TotalComments;