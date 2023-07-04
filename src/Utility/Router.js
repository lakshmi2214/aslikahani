import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../NavPages/Home";
import Entertainment from "../NavPages/Entertainment";
import Education from "../NavPages/Education";
import Technology from "../NavPages/Technology";
import Business from "../NavPages/Business";
import Travel from "../NavPages/Travel";
import LifeStyle from "../NavPages/LifeStyle";
import ArtCulture from "../NavPages/ArtCulture";
import ArticleContent from "../ArticleContent/ArticleContent";

function Router() {
    
    return (
        <>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home />}/>
            <Route path="/Home" exact element={<Home />}/>
            <Route path="/Entertainment" exact element={<Entertainment />}/>
            <Route path="/Education" exact element={<Education />}/>
            <Route path="/Technology" exact element={<Technology/>}/>
            <Route path="/Business" exact element={<Business />}/>
            <Route path="/Travel" exact element={<Travel />}/> 
            <Route path="/Lifestyle" exact element={<LifeStyle />}/>
            <Route path="/Art-and-Culture" exact element={<ArtCulture />}/>

             <Route path="/Home/:id" element={<ArticleContent />} />
             <Route path="/Entertainment/:id" element={<ArticleContent />} />
             <Route path="/Education/:id" element={<ArticleContent />} />
             <Route path="/Technology/:id" element={<ArticleContent />} />
             <Route path="/Business/:id" element={<ArticleContent />} />
             <Route path="/Travel/:id" element={<ArticleContent />} />
             <Route path="/Lifestyle/:id" element={<ArticleContent />} /> 
             <Route path="/Art-and-Culture/:id" element={<ArticleContent />} /> 
        </Routes>
    </BrowserRouter>
        </>
    );
}
export default Router;