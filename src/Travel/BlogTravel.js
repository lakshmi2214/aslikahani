import React from "react";
import TravelPosts from "./TravelBlog/TravelPosts";
import AdvertisementRightConnect from "../Home/Content/AdvertisementRightConnect"
import AdvertisementRight2 from "../Home/Content/AdvertisementRight2"
import RecentTravel from "./TravelBlog/RecentTravel";
import SliderWidgetTravel from "./TravelBlog/SliderWidgetTravel";
import ArchivePostTravel from "./TravelBlog/ArchivePostTravel";


function BlogTravel() {
    return(
<>
<section className="main-content">
         <div className="container">
            <div className="row">
               <div className="col-md-8 col-sm-12 col-xs-12">
                  <div className="section">
                    <TravelPosts />
                  </div>
               </div>
               <div className="col-md-4 col-sm-12 col-xs-12" id="sidebar">
                  <aside>
                   <AdvertisementRightConnect />
                     <AdvertisementRight2 /> 
                     <RecentTravel />
                     <SliderWidgetTravel />
                    <ArchivePostTravel />
                  </aside>
               </div>
            </div>
         </div>
      </section>
</>
    );
}
export default BlogTravel;