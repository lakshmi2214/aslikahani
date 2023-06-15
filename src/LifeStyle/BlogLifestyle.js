import React from "react";
import LifestylePosts from "./LifestyleBlog/LifestylePosts";
import RecentLifestyle from "./LifestyleBlog/RecentLifestyle";
import SliderWidgetLifestyle from "./LifestyleBlog/SliderWidgetLifestyle";
import ArchiveLifestyle from "./LifestyleBlog/ArchiveLifestyle";
import AdvertisementRightConnect from "./LifestyleBlog/AdvertisementRightConnect";
import AdvertisementRight2 from "./LifestyleBlog/AdvertisementRight2";


function BlogLifestyle() {
    return(
<>
<section className="main-content">
         <div className="container">
            <div className="row">
               <div className="col-md-8 col-sm-12 col-xs-12">
                  <div className="section">
                   <LifestylePosts />
                  </div>
               </div>
               <div className="col-md-4 col-sm-12 col-xs-12" id="sidebar">
                  <aside>
                   {/* <AdvertisementRightConnect />
                   <AdvertisementRight2 /> */}
                     <RecentLifestyle />
                     <SliderWidgetLifestyle />
                    <ArchiveLifestyle />
                  </aside>
               </div>
            </div>
         </div>
      </section>
</>
    );
}
export default BlogLifestyle;