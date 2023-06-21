import React from "react";
import TravelPosts from "./TravelBlog/TravelPosts";
import RecentTravel from "./TravelBlog/RecentTravel";
import SliderWidgetTravel from "./TravelBlog/SliderWidgetTravel";
import ArchivePostTravel from "./TravelBlog/ArchivePostTravel";
import ChaiTheoryAd from "../Advertisements/ChaiTheoryAd";
import SristarAd1 from "../Advertisements/SristarAd1";


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
                   <ChaiTheoryAd/>
                   <SristarAd1/>
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