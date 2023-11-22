import React from "react";
import { useState, useEffect } from "react";
import '../css/style.css';
import '../css/animate.min.css';
import '../css/megaMenu.css';
import '../css/colors/amethyst.css';
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
import '../css/royal-slider/rs-default.png';
import '../css/breakingNews.css';
import '../css/font-awesome.min.css';
import '../css/owl.carousel.css';
import '../css/zerogrid.css';
import '../fonts/glyphicons-halflings-regular.svg';
import '../css/royal-slider/rs-default.css';
import Grid from "../Home/Grid";
import LatestArticles from "../Home/Content/LatestArticles";
import NationalNews from "../Home/Content/NationalNews";
import TrendingNews from "../Home/Content/TrendingNews";
import BannerAd1 from "../Advertisements/BannerAd1";
import BannerAd2 from "../Advertisements/BannerAd2";
import TopNews from "../Home/Content/TopNews";
import ChaiTheoryAd from "../Advertisements/ChaiTheoryAd";
import PopularRecent from "../Home/Content/PopularRecent";
import SristarAd1 from "../Advertisements/SristarAd1";
import SliderPostWidget from "../Home/Content/SliderPostWidget";
import AdminChoice from "../Home/AdminChoice/AdminChoice";
import AllTimeBestArticles from "../Home/AllTimeBestArticles";
import Footer from "../Home/Footer/Footer";
import Navbar from "../Utility/Navbar";
import LogoColumn from "../Home/LogoColumn";
// import Nav from "../Utility/Nav";
// import Navbars from "../Utility/Navbars";
// import Subscriptiontag from "../Subscription/Subscriptiontag";
import sidebanner from "../images/banner2.jpg"
import WeatherApp from "../WeatherForecast/WeatherApp";
import Tags from "../Home/Tags";
import GridSection from "../Home/GridSection";
import LatestArticle from "../Home/Content/LatestArticle";
import Grids from "../Home/Grids";
import { Container, Row, Col } from 'react-bootstrap';
import SideAdd1 from "../Advertisements/SideAdd1";
import SidePopularLifestyle from "../LifeStyle/SidePopularLifestyle";
import SideAdd2 from "../Advertisements/SideAdd2";
import SidePostLifestyle from "../LifeStyle/SidePostLifestyle";
import TopArticles from "../Home/Content/TopArticles";
// import Navbars from "../Utility/Navbars";
// import rightBanner from "../images/banner1.jpg"
function Home() {
  const [result, setResult] = useState([]);
  const [value, setvalue] = useState([]);
  useEffect(() => {
    const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/articles/list?category=10&format=json`;
    fetch(url).then(response => response.json()
    )
      .then(response => {
        setResult(response)
      })
      .catch(error => console.log(error));

    const url1 = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/category/list`;
    fetch(url1).then(response => response.json()
    )
      .then(response => {
        setvalue(response)
      })
  }, []);
  return (
    <>
      <LogoColumn />
      <Navbar />
      <div className="col-md-12 col-xm-12 col-xs-12" style={{ borderBottom: "1px solid rgb(180, 179, 179)" }}>
        <Tags dataObject={result} />
      </div>

      <span className="col-md-12 bannerAd1">
        <BannerAd1 addObject={value} />
      </span>

      <div className="col-md-12">

        <br />
        <div className="col-md-1">
          <div className="banner-fixed" style={{ width: "90px" }}>
            <img src={sidebanner} alt='banner1' style={{ width: "-webkit-fill-available" }} />
          </div>
        </div>

        <GridSection dataObject={result} />
<div className="">
<div className="col-md-12">
  <div className="col-md-1"></div>
<div className="col-md-5 col-sm-12"  style={{border:"1px solid red"}}>
       <LatestArticle dataObject={result}/>
       </div>
       
       <div className="col-md-2 col-sm-12"  style={{border:"1px solid red"}}>
        <TopArticles dataObject={result} />
       </div>
       
       <div className="col-md-3 col-sm-12"  style={{border:"1px solid red"}}>swasw</div>
       </div>
       </div>
</div>
    </>
  );
}
export default Home;