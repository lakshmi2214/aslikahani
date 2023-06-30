import React from "react";
import EducationPosts from "./EducationBlog/EducationPosts";
import RecentEducation from "./EducationBlog/RecentEducation";
import SliderWidgetEducation from "./EducationBlog/SliderWidgetEducation";
import ArchivePostEducation from "./EducationBlog/ArchivePostEducation";
import ChaiTheoryAd from "../Advertisements/ChaiTheoryAd";
import SristarAd1 from "../Advertisements/SristarAd1";
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
                    <ChaiTheoryAd/>
                    
                    <RecentEducation />
                    <SristarAd1/>
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