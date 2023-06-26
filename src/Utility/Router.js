import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../NavPages/Home";
import Entertainment from "../NavPages/Entertainment";
import Education from "../NavPages/Education";
import Technology from "../NavPages/Technology";
import Business from "../NavPages/Business";
import Travel from "../NavPages/Travel";
import LifeStyle from "../NavPages/LifeStyle";
import ArtCulture from "../NavPages/ArtCulture";
import ArticleContent from "../ArticleContent/ArticleContent";
import ApiCategory from "../API/ApiCategory"; 
function Router() {
    return(
        <>
        <BrowserRouter>
        <ApiCategory />
          <Routes>
            
            <Route path="/" exact element={<Home />}/>
            <Route path="/home" exact element={<Home />}/>
            <Route path="/entertainment" exact element={<Entertainment />}/>
            <Route path="/education" exact element={<Education />}/>
            <Route path="/technology" exact element={<Technology/>}/>
            <Route path="/business" exact element={<Business />}/>
            <Route path="/travel" exact element={<Travel />}/> 
            <Route path="/lifestyle" exact element={<LifeStyle />}/>
            <Route path="/art-and-culture" exact element={<ArtCulture />}/>

             <Route path="/home/:id" element={<ArticleContent />} />
             <Route path="/entertainment/:id" element={<ArticleContent />} />
             <Route path="/education/:id" element={<ArticleContent />} />
             <Route path="/business/:id" element={<ArticleContent />} />
             <Route path="/travel/:id" element={<ArticleContent />} />
             <Route path="/lifestyle/:id" element={<ArticleContent />} /> 
             <Route path="/art-and-culture/:id" element={<ArticleContent />} /> 
        

               
            </Routes>
           
            </BrowserRouter>
        </>
    );
}
export default Router;