import React from "react";
import EntertainmentPosts from "./BlogPage/EntertainmentPosts";
import RecentEntertainment from "./BlogPage/RecentEntertainment";
import SliderWidgetEntertainment from "./BlogPage/SliderWidgetEntertainment";
import ArchivePostEnetrtainment from "./BlogPage/ArchivePostEntertainment";
import ChaiTheoryAd from "../Advertisements/ChaiTheoryAd";
import SristarAd1 from "../Advertisements/SristarAd1";


function BlogEntertainment() {
    return(
<>
<section className="main-content">
         <div className="container">
            <div className="row">
               <div className="col-md-8 col-sm-12 col-xs-12">
                  <div className="section">
                    <EntertainmentPosts />
                  </div>
               </div>
               <div className="col-md-4 col-sm-12 col-xs-12" id="sidebar">
                  <aside>
                  <ChaiTheoryAd/>
                  <RecentEntertainment />
                  <SristarAd1/>
                    
                     <SliderWidgetEntertainment />
                    <ArchivePostEnetrtainment />
                  </aside>
               </div>
            </div>
         </div>
      </section>
</>
    );
}
export default BlogEntertainment;