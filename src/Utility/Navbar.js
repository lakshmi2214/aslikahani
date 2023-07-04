import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import logosmall from "../images/logo-small.jpg";
import {Link} from "react-router-dom"

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<Link to={"/Home"}><img src={logosmall} style={{ height: "45px", width: "220px", paddingRight: "50px", marginLeft:"40px", paddingTop:"2px", paddingBottom:"2px" }}></img></Link>
			<nav ref={navRef}>
				
               <Link to={"/Home"} className="bar">Home</Link>
               <Link to={"/Entertainment"} className="bar">Entertainment</Link>
               <Link to={"/Education"} className="bar">Education</Link>
               <Link to={"/Technology"} className="bar">Technology</Link>
               <Link to={"/Business"} className="bar">Business</Link>
               <Link to={"/Travel"} className="bar">Travel</Link>
               <Link to={"/Lifestyle"} className="bar">LifeStyle</Link>
               <Link to={"/Art-and-Culture"} className="bar">Art and Culture</Link>
          
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;