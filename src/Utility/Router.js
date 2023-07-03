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
import Navbar from "./Navbar";

function Router() {
    const [value, setvalue] = useState([]);
    useEffect(() => {
        const url1 = "https://newsbackend-388608.as.r.appspot.com/api/v1/category/list";
        fetch(url1).then(response => response.json()
        )
          .then(response => {
            setvalue(response)
          })
    }, []);
    
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