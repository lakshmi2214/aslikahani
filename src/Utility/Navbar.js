import { useRef } from "react";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";
// import logosmall from "../images/logo-small.jpg";
import { Link } from "react-router-dom"
import { useState } from "react";
// import Search from "./Search";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
	  console.log("Toggle menu clicked"); // Add this for debugging
	  setIsOpen(!isOpen);
	};
	return (
		<header>
			{/* <Link to={"/"}><img src={logosmall} className="navlogo" alt="logo" style={{ height: "45px", width: "220px", paddingTop: "2px", paddingBottom: "2px" }}></img></Link> */}
			<div className="pod" > <a href="https://open.spotify.com/show/3Xg7iOie2Yct06H4GyXnGj" target="blank" style={{ color: "black" }}>Podcast
				<span > </span><i class="fa fa-spotify"></i></a> | <a href={process.env.REACT_APP_DOMAIN_NAME + '/emagazine'} style={{ color: "black" }}> EMagazine</a> </div>
			<div className="socialmedia-mobile">
				<a href=" https://www.facebook.com/aslikahani.in" target="blank"><i className="ti-facebook"></i> </a>
				<a href="https://twitter.com/kahaniasli" target="blank"><i className="ti-twitter"></i></a>
				<a href="https://www.youtube.com/@AsliKahani" target="blank"><i className="ti-youtube"></i></a>
				<a href=" https://www.instagram.com/aslikahani/" target="blank"><i className="ti-instagram"></i></a>
			</div>
			<nav className={`nav-linking ${isOpen ? 'open' : ''}`}>
				<li><Link to={"/Home"} className="bar">Home</Link></li>
				<li><Link to={"/Entertainment"} className="bar">Entertainment</Link></li>
				<li><Link to={"/Education"} className="bar">Education</Link></li>
				<li><Link to={"/Technology"} className="bar">Technology</Link></li>
				<li><Link to={"/Business"} className="bar">Business</Link></li>
				<li><Link to={"/Travel"} className="bar">Travel</Link></li>
				<li><Link to={"/Lifestyle"} className="bar">LifeStyle</Link></li>
				<li><Link to={"/Art-and-Culture"} className="bar">Art and Culture</Link></li>

			</nav>

			<button
				className="nav-btn"
				onClick={toggleMenu}>
				<FaBars />
			</button>

			{/* <div class="main">
	<input type="text" name="input" class="input" placeholder="Search Something....."/>
	<div class="icon">
		<i class="fa fa-search" aria-hidden="true"></i>
	</div>
</div> */}
{/* <Search onSearch={handleSearch} /> */}
		</header>
	);
}

export default Navbar;