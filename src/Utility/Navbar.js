import { useRef } from "react";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";
// import logosmall from "../images/logo-small.jpg";
import { Link } from "react-router-dom"

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			{/* <Link to={"/"}><img src={logosmall} className="navlogo" alt="logo" style={{ height: "45px", width: "220px", paddingTop: "2px", paddingBottom: "2px" }}></img></Link> */}
			<div className="pod" > <a href="https://open.spotify.com/show/3Xg7iOie2Yct06H4GyXnGj" target="blank" style={{ color: "black" }}>Podcast
				<span > </span><i class="fa fa-spotify"></i></a> | <a href={process.env.REACT_APP_DOMAIN_NAME + '/emagazine'} style={{ color: "black" }}> EMagazine</a> </div>
			<div className="socialmedia-mobile">
				<a href=" https://www.facebook.com/aslikahani.in" target="blank"><i className="ti-facebook"></i> </a>
				<a href="https://twitter.com/aslikahani_in" target="blank"><i className="ti-twitter"></i></a>
				<a href="https://www.youtube.com/@AsliKahani_in" target="blank"><i className="ti-youtube"></i></a>
				<a href=" https://www.instagram.com/aslikahani.in/" target="blank"><i className="ti-instagram"></i></a>
			</div>
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