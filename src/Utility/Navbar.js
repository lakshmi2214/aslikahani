// import { FaBars } from "react-icons/fa";
// import "./Navbar.css";
// import { Link, useNavigate } from "react-router-dom"
// import { useState } from "react";
// import './nav.css';
// import Search from '../Utility/Search';

// function Navbar() {
// 	const [isOpen, setIsOpen] = useState(false);
// 	const toggleMenu = () => {
// 		// console.log("Toggle menu clicked");
// 		setIsOpen(!isOpen);
// 	};
// 	const navigate = useNavigate();
// 	const handleNavigation = (item) => {
// 		console.log(item);
// 		navigate(`/search/${item}`);
// 	};
// 	return (
// 		<div className="header-cont">
// 			<div className="container">
// 				<header>
// 					<nav className={`nav-linking ${isOpen ? 'open' : ''}`}>
// 						<li><Link to={"/Home"} className="bar">Home</Link></li>
// 						<li><Link to={"/Entertainment"} className="bar">Entertainment</Link></li>
// 						<li><Link to={"/Education"} className="bar">Education</Link></li>
// 						<li><Link to={"/Technology"} className="bar">Technology</Link></li>
// 						<li><Link to={"/Business"} className="bar">Business</Link></li>
// 						<li><Link to={"/Travel"} className="bar">Travel</Link></li>
// 						<li><Link to={"/Lifestyle"} className="bar">LifeStyle</Link></li>
// 						<li><Link to={"/Art-and-Culture"} className="bar">Art and Culture</Link></li>
// 						<div className="mob-social-dl">
// 							<div className="pod" > <a href="https://open.spotify.com/show/3Xg7iOie2Yct06H4GyXnGj" target="blank" style={{ color: "black" }}>Podcast
// 								<span > </span><i className="fa fa-spotify"></i></a> | <a href={process.env.REACT_APP_DOMAIN_NAME + '/emagazine'} style={{ color: "black" }}> EMagazine</a>
// 								<div className="subscribe"><a href={process.env.REACT_APP_DOMAIN_NAME + '/subscribe'} style={{ color: "black", marginLeft: "auto", marginRight: "auto", marginBottom: "10px" }}> Subscribe</a> </div>
// 							</div>
// 							<div className="socialmedia-mobile">
// 								<a href=" https://www.facebook.com/aslikahani.in" target="blank"><i className="ti-facebook"></i> </a>
// 								<a href="https://twitter.com/kahaniasli" target="blank"><i className="ti-twitter"></i></a>
// 								<a href="https://www.youtube.com/@AsliKahani" target="blank"><i className="ti-youtube"></i></a>
// 								<a href=" https://www.instagram.com/aslikahani/" target="blank"><i className="ti-instagram"></i></a>
// 							</div>
// 						</div>
// 					</nav>

// 					<Search onSearch={handleNavigation} />
// 					<button
// 						className={`nav-btn ${isOpen ? 'open' : ''}`}
// 						onClick={toggleMenu}>
// 						<FaBars />
// 					</button>

// 				</header>
// 			</div>
// 		</div>
// 	);
// }

// export default Navbar;

import { FaBars } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import "./nav.css";
import Search from "../Utility/Search";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const toggleMenu = () => setIsOpen(!isOpen);

	const navigate = useNavigate();
	const location = useLocation(); // Get current path

	const handleNavigation = (item) => {
		navigate(`/search/${item}`);
	};

	// Function to check if the link is active
	const isActive = (path) => location.pathname === path ? "barActive" : "";

	return (
		<div className="header-cont">
			<div className="container">
				<header className="headCts">
					<nav className={`nav-linking ${isOpen ? "open" : ""}`}>
						<li><Link to="/Home" className={`bar ${isActive("/Home")}`}>Home</Link></li>
						<li><Link to="/Entertainment" className={`bar ${isActive("/Entertainment")}`}>Entertainment</Link></li>
						<li><Link to="/Education" className={`bar ${isActive("/Education")}`}>Education</Link></li>
						<li><Link to="/Technology" className={`bar ${isActive("/Technology")}`}>Technology</Link></li>
						<li><Link to="/Business" className={`bar ${isActive("/Business")}`}>Business</Link></li>
						<li><Link to="/Travel" className={`bar ${isActive("/Travel")}`}>Travel</Link></li>
						<li><Link to="/Lifestyle" className={`bar ${isActive("/Lifestyle")}`}>LifeStyle</Link></li>
						<li><Link to="/Art-and-Culture" className={`bar ${isActive("/Art-and-Culture")}`}>Art and Culture</Link></li>

						<div className="mob-social-dl">
							<div className="pod">
								<a href="https://open.spotify.com/show/3Xg7iOie2Yct06H4GyXnGj" target="_blank" rel="noopener noreferrer" style={{ color: "black" }}>
									Podcast <i className="fa fa-spotify"></i>
								</a> | 
								<a href={process.env.REACT_APP_DOMAIN_NAME + "/emagazine"} style={{ color: "black" }}>EMagazine</a>
								<div className="subscribe">
									<a href={process.env.REACT_APP_DOMAIN_NAME + "/subscribe"} style={{ color: "black" }}>Subscribe</a>
								</div>
							</div>
							<div className="socialmedia-mobile">
								<a href="https://www.facebook.com/aslikahani.in" target="_blank" rel="noopener noreferrer"><i className="ti-facebook"></i></a>
								<a href="https://twitter.com/kahaniasli" target="_blank" rel="noopener noreferrer"><i className="ti-twitter"></i></a>
								<a href="https://www.youtube.com/@AsliKahani" target="_blank" rel="noopener noreferrer"><i className="ti-youtube"></i></a>
								<a href="https://www.instagram.com/aslikahani/" target="_blank" rel="noopener noreferrer"><i className="ti-instagram"></i></a>
							</div>
						</div>
					</nav>

					<Search onSearch={handleNavigation} />

					<button className={`nav-btn ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
						<FaBars />
					</button>
				</header>
			</div>
		</div>
	);
}

export default Navbar;
