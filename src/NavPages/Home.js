
import React from "react";
import { useState, useEffect } from "react";
import BannerAd1 from "../Advertisements/BannerAd1";
import BannerAd2 from "../Advertisements/BannerAd2";
import Footer from "../Home/Footer/Footer";
import Navbar from "../Utility/Navbar";
import LogoColumn from "../Home/LogoColumn";
import sidebanner from "../images/banner2.jpg"
// import sidebanner from "../images/banner2.png"
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
      <Tags dataObject={result} />

      {/* <span className="col-md-12 bannerAd1" style={{ height: "100%" }}>
        <BannerAd1 addObject={value} />
      </span> */}

      <section className="page-mid-section">
        <div className="container">
          <div className="row">
            <div className="col-md-1 " >
              <div className="banner-view">
                <img src={sidebanner} alt='banner1' className="img-fluid" />
              </div>
            </div>
            <div className="col-md-10">
              <GridSection dataObject={result} />
              <div className="subData-grid-container">

                <div className="row">
                  <div className="col-md-8 col-sm-12" >
                    <LatestArticle dataObject={result} />
                    <div className="topArticals">
                      <TopArticles dataObject={result} />
                    </div>
                    <Articles dataObject={result} />

                    {/* <TrendingArticles dataObject={result} /> */}
                  </div>
                  <div className="col-md-4 col-sm-12 mobile-view" >
                    <div className="right-gird-home-widget">
                      <WeatherApp />
                      <div className="swiper-widget">
                        <SideAdd1 addObject={value} />
                      </div>
                      <PopularArticles dataObject={result} />
                      <PostArticles dataObject={result} />
                    </div>
                  </div>
                  <div className="col-md-12 col-12">
                    <TrendingArticles dataObject={result} />
                  </div>
                </div>

                {isMobile ? null : (
                  <div className="col-md-3 col-sm-12" >

                    <WeatherApp />

                    <SideAdd1 addObject={value} />
                    <PopularArticles dataObject={result} />
                    <PostArticles dataObject={result} />
                  </div>
                )}
                {/* </div> */}
                <span className="col-md-12 bannerAd1">
                  <BannerAd2 addObject={value} />
                </span>

                <div className="col-md-12 mobile-view" style={{ padding: "initial" }}>
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
                  <div className="col-md-12" style={{ padding: "14px" }}>
                    <AllTimeBest dataObject={result} />
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-1" >
              <div className="banner-view">
                <img src={sidebanner} alt='banner1' className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />


    </>
  );
}
export default Home;