import React from 'react';
import { Link } from 'react-router-dom';
import './MegaMenu.css';

const MegaMenu = ({ isOpen, toggleMenu }) => {
  if (!isOpen) return null;

  const categoriesLeft = [
    { name: "Education", link: "/Education" },
    { name: "Health", link: "/Health" },
    { name: "Nation", link: "/Nation" },
    { name: "Sports", link: "/Sports" },
    { name: "Entertainment", link: "/Entertainment" },
    { name: "Business", link: "/Business" },
  ];

  const categoriesMid = [
    { name: "Travel", link: "/Travel" },
    { name: "Automobiles", link: "/Automobiles" },
    { name: "Lifestyle", link: "/Lifestyle" },
    { name: "Art & Culture", link: "/Art-and-Culture" },
    { name: "Finance", link: "/Finance" },
    { name: "International", link: "/International" },
  ];

  return (
    <div className="mega-menu-inline">
      <div className="mega-menu-content">
        <div className="container">
          <div className="row align-items-center">
            {/* Category Columns */}
            <div className="col-md-2 col-6">
              <ul className="mega-menu-list">
                {categoriesLeft.map((cat, i) => (
                  <li key={i}><Link to={cat.link} onClick={toggleMenu}>{cat.name}</Link></li>
                ))}
              </ul>
            </div>
            <div className="col-md-2 col-6">
              <ul className="mega-menu-list">
                {categoriesMid.map((cat, i) => (
                  <li key={i}><Link to={cat.link} onClick={toggleMenu}>{cat.name}</Link></li>
                ))}
              </ul>
            </div>
            <div className="col-md-2 d-none d-md-block">
              <ul className="mega-menu-list">
                {categoriesMid.map((cat, i) => (
                  <li key={i+10}><Link to={cat.link} onClick={toggleMenu}>{cat.name}</Link></li>
                ))}
              </ul>
            </div>

            {/* E-Magazine Cover Section */}
            <div className="col-md-3 text-center">
              <div className="magazine-cover">
                <Link to="/emagazine" onClick={toggleMenu}>
                  <img src="/emagazine_cover.jpg" alt="Asli Kahani E-Magazine" className="img-fluid" />
                </Link>
              </div>
            </div>

            {/* Feature Links and Social */}
            <div className="col-md-3 feature-links-container">
              <div className="feature-links">
                <Link to="/emagazine" onClick={toggleMenu}>E-MAGAZINE</Link>
                <Link to="/backyard" onClick={toggleMenu}>BACKYARD</Link>
                <Link to="/podcasts" onClick={toggleMenu}>PODCASTS</Link>
              </div>
              <div className="social-icons">
                <a href="https://twitter.com/kahaniasli" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
                <a href="https://www.instagram.com/aslikahani/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
                <a href="https://www.facebook.com/aslikahani.in" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
                <a href="https://www.youtube.com/@AsliKahani" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube-play"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
