import React from "react";
import TechnologyPosts from "./TechnologyBlog/TechnologyPosts";
import AdvertisementRightConnect from "../Home/Content/AdvertisementRightConnect"
import AdvertisementRight2 from "../Home/Content/AdvertisementRight2"
import RecentTechnology from "./TechnologyBlog/RecentTechnology";
import SliderWidgetTechnology from "./TechnologyBlog/SliderWidgetTechnology";
import ArchivePostTechnology from "./TechnologyBlog/ArchivePostTechnology"


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
                  <AdvertisementRightConnect />
                   <AdvertisementRight2/>
                     <RecentTechnology />
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