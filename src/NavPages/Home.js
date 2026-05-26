
import React from "react";
import { useState, useEffect } from "react";

import Footer from "../Home/Footer/Footer";
import Navbar from "../Utility/Navbar";
import LogoColumn from "../Home/LogoColumn";

// import sidebanner from "../images/banner2.png"

import Tags from "../Home/Tags";

// import Grids from "../Home/Grids";
// import { Container, Row, Col } from 'react-bootstrap';

import LatestStories from "../Home/Content/LatestStories";
import Articles from "../Home/Content/Articles";
import TrendingArticles from "../Home/Content/TrendingArticles";
import PopularArticles from "../Home/Content/PopularArticles";
import PostArticles from "../Home/Content/PostArticles";
import EditorsChoise from "../Home/Content/EditorsChoise";
import AllTimeBest from "../Home/Content/AllTimeBest";
// import Navbars from "../Utility/Navbars";
// import rightBanner from "../images/banner1.jpg"
import Topbar from "../Home/Topbar";

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


  }, []);
  return (
    <>
      <Topbar />
       <LogoColumn />
       <Navbar />
       <section className="full-swiper">
          <SwiperCustom dataObject={result} />
      </section>
      {/* <div className="d-flex justify-content-center my-3">
        <button className="btn btn-primary" onClick={() => setShowCareerModal(true)}>
          Join the event
        </button>
      </div>
      <CareerModal show={showCareerModal} handleClose={() => setShowCareerModal(false)} /> */}

      {/* <section className="lottery-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <img src='https://media.aslikahani.com/advertisements/sristar_horizontal.jpg' className="img-fluid" alt="lotterybanner" />
            </div>
          </div>
        </div>
      </section> */}
      <section className="page-mid-section">
        <div className="container">
          <div className="row">

            <div className="col-md-12">
              {/* <div className="row">
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
              </div> */}
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
                  <div className="col-md-12">
                    <LatestStories dataObject={result} />
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