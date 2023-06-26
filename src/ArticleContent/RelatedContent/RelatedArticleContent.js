import React from "react";
import '../../css/style.css';
import '../../css/animate.min.css';
import '../../css/megaMenu.css';
import '../../css/colors/amethyst.css';
import '../../css/colors/carrat.css';
import '../../css/colors/defualt.css';
import '../../css/colors/golden.css';
import '../../css/colors/java-color.css';
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

function RelatedArticleContent(props) {
  return (
    <>
      <div className="col-md-7 col-sm-7 col-xs-12 ">

        <div className="catname">

          <h2>{props.dataObject.title}</h2>
          <ul className="post-tools nolineheight">
            <li> by <a href=""> <strong> {props.dataObject.authored_by}</strong> </a></li>
            <li> {props.dataObject.created_at} </li>
          </ul>
          <div className="picture">
            <img alt="" className="img-responsive" src={props.dataObject.image} style={{ height: "500px", width: "760px" }} />
          </div>
          <br></br>
          <p> {props.dataObject.description}</p>
          <div dangerouslySetInnerHTML={{ __html: props.dataObject.body }}></div>


        </div>
      </div>
    </>
  );
}
export default RelatedArticleContent;