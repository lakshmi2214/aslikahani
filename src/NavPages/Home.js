
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
import Marquee from "../Component/Marquee";
import SwiperCustom from "../Home/Swiper/Swiper";
import VideoSection from "../Home/VideoSection/VideoSection";

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
              <SwiperCustom dataObject={result} />
              {/* <GridSection dataObject={result} /> */}
              <VideoSection/>
              {/* === video add === */}
              {/* <div className="youtubeshort-container">
                <div className="sortsHeading">
                  <h4><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" focusable="false" >
                    <g>
                      <path d="M17.77,10.32l-1.2-.5L18,9.06a3.74,3.74,0,0,0-3.5-6.62L6,6.94a3.74,3.74,0,0,0,.23,6.74l1.2.49L6,14.93a3.75,3.75,0,0,0,3.5,6.63l8.5-4.5a3.74,3.74,0,0,0-.23-6.74Z" fill="red"></path>
                      <polygon points="10 14.65 15 12 10 9.35 10 14.65" fill="#fff"></polygon>
                    </g>
                  </svg> Shorts</h4>
                </div>
                <div className="short-cardslider">

                  <div className="short-slide-card">
                    <iframe width="195" height="350" src="https://www.youtube.com/embed/e7gZsJ-AjNs" title="6 Children Killed By A Drunk Driver" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  </div>
                  <div className="short-slide-card">
                    <iframe width="195" height="350" src="https://www.youtube.com/embed/Q2oxhWzqjiA" title="A bus carrying workers crashes into a mine, resulting in 12 fatalities and 14 injuries" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  </div>
                  <div className="short-slide-card">
                    <iframe width="195" height="350" src="https://www.youtube.com/embed/7kStbaXRkT0" title="Data Breach at BoAt" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  </div>
                  <div className="short-slide-card">
                    <iframe width="195" height="350" src="https://www.youtube.com/embed/M1Cxc2tRMfQ" title="Breaking traditions for health Bengaluru Police" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  </div>
                  <div className="short-slide-card">
                    <iframe width="195" height="350" src="https://www.youtube.com/embed/SRj0-T017qk" title="Here’s a powerful demonstration of activism!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  </div>
                  <div className="short-slide-card">
                    <iframe width="195" height="350" src="https://www.youtube.com/embed/2V7Q64jQ-Zs" title="Tragic news from Baltimore: The Francis Scott Key Bridge collapsed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  </div>
                  <div className="short-slide-card">
                    <iframe width="195" height="350" src="https://www.youtube.com/embed/jcx54Bl36YU" title="Mirabai Chanu’s journey from Manipur to the global stage is quite remarkable" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  </div>

                </div>
              </div> */}
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
                      <div className="swiper-widget">
                        <SideAdd1 addObject={value} />
                      </div>
                      <PopularArticles dataObject={result} />
                      <PostArticles dataObject={result} />
                      <WeatherApp />
                    </div>
                  </div>
                  <div className="col-md-12 col-12">
                    <TrendingArticles dataObject={result} />
                  </div>
                </div>

                {isMobile ? null : (
                  <div className="col-md-3 col-sm-12" >

                    <div className="mb-4">
                      <WeatherApp />
                    </div>

                    <SideAdd1 addObject={value} />
                    <PopularArticles dataObject={result} />
                    <PostArticles dataObject={result} />
                  </div>
                )}
                {/* </div> */}
                <div className="mid-add-section-img">
                  <BannerAd2 addObject={value} />
                </div>
                <div className="editor-chs">
                  <EditorsChoise dataObject={result} />
                </div>
                {/* {isMobile ? null : (
                  <div className="col-md-12">
                    <EditorsChoise dataObject={result} />
                  </div>
                )} */}
                <div className="allTimeBest">
                  <AllTimeBest dataObject={result} />
                </div>
                {/* {isMobile ? null : (
                  <div className="col-md-12" style={{ padding: "14px" }}>
                    <AllTimeBest dataObject={result} />
                  </div>
                )} */}
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
      {/* <div className="marquee">
        <p> Today's Rate | Gold 24k/1 g Rs 7700, To get 100% value of your gold call 63 66 333 444 </p>
        <p> Today's Rate | Gold 24k/1 g Rs 7700, To get 100% value of your gold call 63 66 333 444 </p>
        <p> Today's Rate | Gold 24k/1 g Rs 7700, To get 100% value of your gold call 63 66 333 444 </p>
      </div> */}
      <Marquee />
      <Footer />
    </>
  );
}
export default Home;