import React from "react";
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

function CommentForm(){
    return(
        <>
        <div className="commentform">
                                 <form className="row">
                                 <div className="col-md-12 col-sm-12">
                                 <div className="form-group">
                                 <label>Comment <span className="required">*</span></label>
                                 <textarea className="form-control" placeholder=" Comment Text" rows="8" cols="6"></textarea>
                                 </div>
                                 </div>
                                 <div className="col-md-6 col-sm-12">
                                 <div className="form-group">
                                 <label>Name <span className="required">*</span></label>
                                 <input className="form-control" placeholder=" Write your Name" type="text" />
                                 </div>
                                 </div>
                                 <div className="col-md-6 col-sm-12">
                                 <div className="form-group">
                                 <label>Email <span className="required">*</span></label>
                                 <input className="form-control" placeholder=" Email Address" type="email" />
                                 </div>
                                 </div>
                                 <div className="col-md-12 col-sm-12">
                              <input value="Post Comment" className="btn btn-colored-blog" type="submit"/>
                           </div>
                                 </form>
                                 </div>
        </>
    )
}
export default CommentForm;