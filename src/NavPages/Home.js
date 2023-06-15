import React from 'react';
import Grid from "../Home/Grid";
import Navbar from '../Utility/Navbar';
import Main from '../Home/Content/Main';
import AdminChoice from '../Home/AdminChoice/AdminChoice';
import AllTimeBestArticles from '../Home/AllTimeBestArticles';
import Archive from '../Home/ArchievePosts/Archive';
import Gallery from '../Home/Gallery';
import Footer from '../Home/Footer/Footer';

function Home() {
  return (
    <div>
      
        <Navbar />
            <Grid /> 
         <Main /> 
        <AdminChoice />
           < AllTimeBestArticles /> 
          {/* <Archive /> */}
          <Gallery />
          <Footer />     
    </div>
  )
}

export default Home;
