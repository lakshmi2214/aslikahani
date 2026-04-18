import React from "react";
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

function RelatedArticleContent({ articleData }) {
  if (!articleData) {
    return (
      <div className="text-center p-5">
        <div className="spinner-border text-danger" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="col-md-12 col-sm-12 col-xs-12 ">
        <div className="blog-dtsl text-center">
          <h1 className="article-detailed-title">{articleData.title}</h1>
          <div className="catname text-center">
            <p className="lead" style={{ borderLeft: "none" }} dangerouslySetInnerHTML={{ __html: articleData.description }}></p>
            <div className="article-meta-info text-center">
              <span><strong>{articleData.authored_by}</strong></span>  / <span>{articleData.created_at}</span>
            </div>
            <div className="picture mt-4">
              <img alt="" className="img-fluid featured-detailed-image" src={articleData.image} />
              <p className="text-muted small mt-2">{articleData.credit_line}</p>
            </div>

            <div className="sub-render-pera" dangerouslySetInnerHTML={{ __html: articleData.body }}></div>
          </div>

          {articleData.video_url != null ?
            <div className="embed-responsive embed-responsive-16by9">
              <iframe title="Article Video" className="embed-responsive-item" src={articleData.video_url} allowfullscreen></iframe>
            </div>
            : ""
          }
        </div>
      </div>
    </>
  );
}
export default RelatedArticleContent;
