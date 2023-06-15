import React from "react"; 
import LatestArticles from './LatestArticles';
import NationalNews from './NationalNews';
import TrendingNews from './TrendingNews';
import TopNews from './TopNews';
// import NewCategory from './NewCategory';
import Connect from './Connect';
import PopularRecent from './PopularRecent';
import SliderPostWidget from './SliderPostWidget';
// import ArchivePost from './ArchivePost';
// import AdvertisementLeft1 from "./AdvertisementLeft1";
// import AdvertisementRight2 from "./AdvertisementRight2";
// import AdvertisementRightConnect from "./AdvertisementRightConnect";


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
                 {/* <AdvertisementLeft1/> */}
               </div>
               <div className="col-md-2 col-sm-2 hidden-xs hidden-sm nopadding">
                  <div className="category-sidebar sidebar-middle">
                    <TopNews />
                   {/* <NewCategory /> */}
                  </div>
               </div>
               <div className="col-md-4 col-sm-12 col-xs-12" id="sidebar">
                  <aside>
                      {/* <AdvertisementRightConnect />
                      <AdvertisementRight2 />  */}
                     
                      <PopularRecent /> 
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