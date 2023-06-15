import React from "react";
import EducationPosts from "./EducationBlog/EducationPosts";
import RecentEducation from "./EducationBlog/RecentEducation";
import SliderWidgetEducation from "./EducationBlog/SliderWidgetEducation";
import ArchivePostEducation from "./EducationBlog/ArchivePostEducation";
import AdvertisementRightConnect from "../Home/Content/AdvertisementRightConnect"
import AdvertisementRight2 from "../Home/Content/AdvertisementRight2"
function BlogEducation() {
    return(
<>
<section className="main-content">
         <div className="container">
            <div className="row">
               <div className="col-md-8 col-sm-12 col-xs-12">
                  <div className="section">
                    <EducationPosts />
                  </div>
               </div>
               <div className="col-md-4 col-sm-12 col-xs-12" id="sidebar">
                  <aside>
                    <AdvertisementRightConnect />
                   <AdvertisementRight2 /> 
                     <RecentEducation />
                     <SliderWidgetEducation />
                    <ArchivePostEducation />
                  </aside>
               </div>
            </div>
         </div>
      </section>
</>
    );
}
export default BlogEducation;