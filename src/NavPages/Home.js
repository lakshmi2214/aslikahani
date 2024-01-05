
import React from "react";
import { useState, useEffect } from "react";
import BannerAd1 from "../Advertisements/BannerAd1";
import BannerAd2 from "../Advertisements/BannerAd2";
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
// import Grids from "../Home/Grids";
// import { Container, Row, Col } from 'react-bootstrap';
import SideAdd1 from "../Advertisements/SideAdd1";
import TopArticles from "../Home/Content/TopArticles";
import Articles from "../Home/Content/Articles";
import TrendingArticles from "../Home/Content/TrendingArticles";
import PopularArticles from "../Home/Content/PopularArticles";
import PostArticles from "../Home/Content/PostArticles";
import EditorsChoise from "../Home/Content/EditorsChoise";
import AllTimeBest from "../Home/Content/AllTimeBest";
// import Navbars from "../Utility/Navbars";
// import rightBanner from "../images/banner1.jpg"
import Topbar from "../Home/Topbar";

function Home() {
  const [isMobile, setIsMobile] = useState(false);
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
      const checkMobile = () => {
        const isMobile = window.innerWidth >= 767;
        setIsMobile(isMobile);
      };
  
      checkMobile();
  
      window.addEventListener('resize', checkMobile);
  
      return () => {
        window.removeEventListener('resize', checkMobile);
      };
  }, []);
  return (
    <>
    <Topbar />
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
       <div className="col-md-1 mobile-view" style={{position:"sticky", top:"45px",padding:"0px", height:"200px"}}>
        <img src={sidebanner} alt='banner1' style={{ width: "-webkit-fill-available", height:"auto" ,padding:"0px"}} />
        </div>
        {/* <div className="col-md-1"></div> */}
        <GridSection dataObject={result} />
        <div className="col-md-1 mobile-view" style={{position:"sticky", top:"45px",padding:"0px", height:"200px"}}>
        <img src={sidebanner} alt='banner1' style={{ width: "-webkit-fill-available", height:"auto" ,padding:"0px"}} />
        </div>


        <div className="col-md-12">
          <div className="col-md-1"></div>
          {/* <div className="col-md-12" style={{border:"1px solid red"}}> */}
          <div className="col-md-5 col-sm-12" >
            <LatestArticle dataObject={result} />
            <br />
            {/* <div className="col-md-12 col-sm-12"> */}
            <Articles dataObject={result} />
            {/* </div> */}
            <TrendingArticles dataObject={result} />
          </div>
          <div className="col-md-2 col-sm-12"  >
            <TopArticles dataObject={result} />
          </div>
          <div className="col-md-3 col-sm-12 mobile-view" style={{padding:"initial"}} >
            <br />        
            <WeatherApp />
            <br />
            <SideAdd1 addObject={value} />
            <PopularArticles dataObject={result} />
            <PostArticles dataObject={result} />
          </div>
          {isMobile ? null : (  
             <div className="col-md-3 col-sm-12" >
             <br />        
             <WeatherApp />
             <br />
             <SideAdd1 addObject={value} />
             <PopularArticles dataObject={result} />
             <PostArticles dataObject={result} />
           </div>
          )}  
          {/* </div> */}
          <span className="col-md-12 bannerAd1">
            <BannerAd2 addObject={value} />
          </span>

          <div className="col-md-12 mobile-view" style={{padding:"initial"}}>
            <EditorsChoise dataObject={result} />
          </div>
          {isMobile ? null : (
          <div className="col-md-12">
            <EditorsChoise dataObject={result} />
          </div>
          )}
          <div className="col-md-12 mobile-view">
            <AllTimeBest dataObject={result} />
          </div>
          {isMobile ? null : ( 
             <div className="col-md-12" style={{padding:"14px"}}>
             <AllTimeBest dataObject={result} />
           </div>
          )}
        </div>
      </div>
      <div className="col-md-12">
        <Footer />
      </div>
      <span style={{ color: "white" }}>.</span>

    </>
  );
}
export default Home;