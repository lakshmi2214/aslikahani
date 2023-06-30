import React from "react";
import BusinessPosts from "./BusinessBlog/BusinessPosts";
import SliderWidgetBusiness from "./BusinessBlog/SliderWidgetBusiness";
// import ArchivePostBusiness from "./BusinessBlog/ArchivePostBusiness";
// import AdvertisementRight2 from "./BusinessBlog/AdvertisementRight2";
import RecentBusiness from "./BusinessBlog/RecentBusiness";
import ChaiTheoryAd from "../Advertisements/ChaiTheoryAd";
import SristarAd1 from "../Advertisements/SristarAd1";

function BlogBusiness() {
    return(
<>
<section className="main-content">
         <div className="container">
            <div className="row">
               <div className="col-md-8 col-sm-12 col-xs-12">
                  <div className="section">
                    <BusinessPosts />
                  </div>
               </div>
               <div className="col-md-4 col-sm-12 col-xs-12" id="sidebar">
                  <aside>
                 <ChaiTheoryAd/>
                 <RecentBusiness />
                 <SristarAd1/>
                    
                     <SliderWidgetBusiness />
                  {/* <ArchivePostBusiness /> */}
                  </aside>
               </div>
            </div>
         </div>
      </section>
</>
    );
}
export default BlogBusiness;