import React, { useState } from "react";
import { useEffect } from "react";
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
// import ReactPlayer from "react-player/youtube";
// import ReactPlayer from 'react-player/lazy'

import { useLocation } from "react-router-dom";


function RelatedArticleContent() {
  const location = useLocation();

  const [data, setData] = useState([]);

  useEffect(() => {
    if (location) {
      var tmp = location.pathname.slice(location.pathname.lastIndexOf("/"), location.pathname.length);
      // setData(tmp) 
      tmp = tmp.substring(1, tmp.length);
    }
    const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/articles/get?url=${tmp}`
    fetch(url).then(res => res.json())
      .then(res => {
        setData(res)
        // console.log(res)

      })
  }, [])

  return (
    <>
      <div className="col-md-7 col-sm-7 col-xs-12 ">
        <div className="picture">
          <h2>{data.title}</h2>
          <ul className="post-tools nolineheight">
            <li> by <a href=""> <strong> {data.authored_by}</strong> </a></li>
            <li> {data.created_at} </li>
          </ul>
          <img alt="" className="img-responsive" src={data.image} style={{ height: "500px", width: "760px" }} />
          <span className="text-muted h6">{data.credit_line} </span>
        </div>
        <div className="catname">
          <br></br>
          <br></br>
          <p> {data.description}</p>
          <div dangerouslySetInnerHTML={{ __html: data.body }}></div>
        </div>
        {/* <div className="col-md-12" style={{border:"1px solid red"}}>
        <ReactPlayer url="https://www.youtube.com/watch?v=eoOaKN4qCKw" controls={true}/>
        </div> */}

        {data.video_url != null ?
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={data.video_url} allowfullscreen></iframe>
          </div>
          : ""
        }


      </div>
    </>
  );
}
export default RelatedArticleContent;