
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
import MagazinePosts from "../E-magzine/MagazinePosts";

function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [result, setResult] = useState([]);
  const [value, setvalue] = useState([]);
  const [magazines, setMagazines] = useState([]);
  useEffect(() => {
    const fetchMagazines = async () => {
      const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/emagzines/list`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        // Slice the first 5 items and set the state
        setMagazines(data.slice(0, 4));
      } catch (error) {
        console.error("Error fetching magazines:", error);
      }
    };

    fetchMagazines();
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

      <section className="page-mid-section">
        <div className="container">
          <div className="row">

            <div className="col-md-12">
              <div className="row">
                <div className="col-md-1 " >
                  <div className="banner-view">
                    <img src={sidebanner} alt='banner1' className="img-fluid" />
                  </div>
                </div>
                <div className="col-md-10">
                  <SwiperCustom dataObject={result} />
                </div>
                <div className="col-md-1" >
                  <div className="banner-view">
                    <img src={sidebanner} alt='banner1' className="img-fluid" />
                  </div>
                </div>
              </div>
              <VideoSection />
              <div className="subData-grid-container">
                <div className="editor-chs">
                  <EditorsChoise dataObject={result} />
                </div>
                <div className="magzineShowHome">
                  <div className='rvmpHeading'>
                    <h2>Magazine</h2>
                    <a href={process.env.REACT_APP_DOMAIN_NAME + '/emagazine'}>View All<i class="fa-solid fa-arrow-up-right-dots"></i></a>
                  </div>
                  <div className="homeMgz">
                    <MagazinePosts dataObject={magazines} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-12">
                    <LatestArticle dataObject={result} />
                  </div>
                  <div className="col-md-6 col-12">
                    <TopArticles dataObject={result} />
                  </div>
                  <div className="col-md-6 col-12">
                    <Articles dataObject={result} />
                  </div>
                  <div className="col-md-6 col-12">
                    <PopularArticles dataObject={result} />
                  </div>
                  <div className="col-md-6 col-12">
                    <PostArticles dataObject={result} />
                  </div>
                  <div className="col-md-6 col-12">
                  <TrendingArticles dataObject={result} />
                  </div>
                  <div className="col-md-12 col-12">
                  <AllTimeBest dataObject={result} />
                  </div>
                </div>
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