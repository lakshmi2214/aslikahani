import React from "react";
import TechnologyPosts from "./TechnologyBlog/TechnologyPosts";
import RecentTechnology from "./TechnologyBlog/RecentTechnology";
import SliderWidgetTechnology from "./TechnologyBlog/SliderWidgetTechnology";
import ArchivePostTechnology from "./TechnologyBlog/ArchivePostTechnology"
import ChaiTheoryAd from "../Advertisements/ChaiTheoryAd";
import SristarAd1 from "../Advertisements/SristarAd1";


function BlogTechnology() {
    return(
<>
<section className="main-content">
         <div className="container">
            <div className="row">
               <div className="col-md-8 col-sm-12 col-xs-12">
                  <div className="section">
                    <TechnologyPosts />
                  </div>
               </div>
               <div className="col-md-4 col-sm-12 col-xs-12" id="sidebar">
                  <aside>
                 <ChaiTheoryAd/>
                 <RecentTechnology />
                 <SristarAd1/>
                     
                     <SliderWidgetTechnology />
                     <ArchivePostTechnology />
                  </aside>
               </div>
            </div>
         </div>
      </section>
</>
    );
}
export default BlogTechnology;