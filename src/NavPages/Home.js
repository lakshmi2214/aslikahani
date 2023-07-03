import React from "react";
import { useState, useEffect} from "react";
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

function Home() {
   const [result, setResult] = useState([]);
    const [value, setvalue] = useState([]);
   useEffect(() => {
      const url = "https://newsbackend-388608.as.r.appspot.com/api/v1/articles/list?category=10&format=json";
      fetch(url).then(response => response.json()
      )
      .then(response => {
        setResult(response)
      })
      .catch(error => console.log(error));

           const url1 = "https://newsbackend-388608.as.r.appspot.com/api/v1/category/list";
      fetch(url1).then(response => response.json()
      )
      .then(response => {
        setvalue(response)
      })
    }, []);
    return(
        <>
      <Navbar />  
     <Grid dataObject={result}/>
                 <section className="main-content">
         <div className="container">
            <div className="row">
               <div className="col-md-6 col-sm-12 col-xs-12">
                  <LatestArticles dataObject={result}/>
                  <NationalNews dataObject={result}/>             
                  <TrendingNews dataObject={result}/>
              
               </div>
               <div className="col-md-2 col-sm-2 hidden-xs hidden-sm nopadding">
                  <div className="category-sidebar sidebar-middle">
                    <TopNews dataObject={result}/>
                  </div>
               </div>
               <div className="col-md-4 col-sm-12 col-xs-12" id="sidebar">
                  <aside>
                       <ChaiTheoryAd addObject={value}/>
                      <PopularRecent dataObject={result}/> 
                      <SristarAd1 addObject={value}/>
                     <div className="widget widget-bg ">                       
                      <SliderPostWidget dataObject={result}/>
                     </div>
                  </aside>
               </div>
            </div>
         </div>
         <BannerAd1 addObject={value}/>
      </section>
     <AdminChoice dataObject={result}/>
      <AllTimeBestArticles dataObject={result}/>
      <BannerAd2 addObject={value}/>
      <Footer/>
        </>
    );
}
export default Home;