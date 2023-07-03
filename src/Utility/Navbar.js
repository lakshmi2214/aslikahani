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
			<Link to={"/home"}><img src={logosmall} style={{ height: "45px", width: "220px", paddingRight: "50px", marginLeft:"40px", paddingTop:"2px", paddingBottom:"2px" }}></img></Link>
			<nav ref={navRef}>
				
            <Link to={"/home"} className="bar">Home</Link>
               <Link to={"/entertainment"} className="bar">Entertainment</Link>
               <Link to={"/education"} className="bar">Education</Link>
               <Link to={"/technology"} className="bar">Technology</Link>
               <Link to={"/business"} className="bar">Business</Link>
               <Link to={"/travel"} className="bar">Travel</Link>
               <Link to={"/lifestyle"} className="bar">LifeStyle</Link>
               <Link to={"/art-and-culture"} className="bar">Art and Culture</Link>
          
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