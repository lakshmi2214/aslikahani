import React from "react";
import ArtPosts from "./ArtCultureBlog/ArtPosts";
import RecentArt from "./ArtCultureBlog/RecentArt"; 
import SliderWidgetArt from "./ArtCultureBlog/SliderWidgetArt";
import ArchivePostArt from "./ArtCultureBlog/ArchivePostArt";
import ChaiTheoryAd from "../Advertisements/ChaiTheoryAd";
import SristarAd1 from "../Advertisements/SristarAd1";

function BlogArt() {
    return(
<>
<section className="main-content">
         <div className="container">
            <div className="row">
               <div className="col-md-8 col-sm-12 col-xs-12">
                  <div className="section">
                    <ArtPosts />
                  </div>
               </div>
               <div className="col-md-4 col-sm-12 col-xs-12" id="sidebar">
                  <aside>
                    <ChaiTheoryAd />
                     <RecentArt />                     
                    <SristarAd1 />
                    <SliderWidgetArt />
                    <ArchivePostArt />
                  </aside>
               </div>
            </div>
         </div>
      </section>
</>
    );
}
export default BlogArt;