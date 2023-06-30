import React from "react"; 
import LatestArticles from './LatestArticles';
import NationalNews from './NationalNews';
import TrendingNews from './TrendingNews';
import TopNews from './TopNews';
// import NewCategory from './NewCategory';
import PopularRecent from './PopularRecent';
import SliderPostWidget from './SliderPostWidget';
// import ArchivePost from './ArchivePost';
import ChaiTheoryAd from "../../Advertisements/ChaiTheoryAd";
import SristarAd1 from "../../Advertisements/SristarAd1";
import BannerAd1 from "../../Advertisements/BannerAd1";


function Main() {
    return(
        <>
                 <section className="main-content">
         <div className="container">
            <div className="row">
               <div className="col-md-6 col-sm-12 col-xs-12">
                  <LatestArticles />
                  <NationalNews />                 
                  <TrendingNews />
              <BannerAd1/>
               </div>
               <div className="col-md-2 col-sm-2 hidden-xs hidden-sm nopadding">
                  <div className="category-sidebar sidebar-middle">
                    <TopNews />
                   {/* <NewCategory /> */}
                  </div>
               </div>
               <div className="col-md-4 col-sm-12 col-xs-12" id="sidebar">
                  <aside>
                       <ChaiTheoryAd/>
                      
                     
                      <PopularRecent /> 
                      <SristarAd1/> 
                     <div className="widget widget-bg ">                       
                      <SliderPostWidget /> 
                     </div>
                      {/* <ArchivePost />  */}
                  </aside>
               </div>
            </div>
         </div>
      </section>
        </>
    );
}
export default Main;