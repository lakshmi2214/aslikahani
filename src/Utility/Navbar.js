import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logosmall from "../images/logo-small.jpg";


function Navbar() {

    return (
        <>
            <div className="backgroundMenu" >

            <Link to={"/Home"}><img src={logosmall} style={{ height: "50px", width: "220px", paddingRight: "50px", paddingTop: "5px" }} /></Link>
            <Link to={"/Home"}  className="navbar">Home</Link>
            <Link to={"/Entertainment"} className="navbar">Entertainment</Link>
            <Link to={"/Education"}  className="navbar">Education</Link>
            <Link to={"/Technology"}  className="navbar">Technology</Link>
            <Link to={"/Business"}  className="navbar">Business</Link>
            <Link to={"/Travel"}  className="navbar">Travel</Link>
            <Link to={"/Lifestyle"}  className="navbar">LifeStyle</Link>
            <Link to={"/Art-and-Culture"}  className="navbar">Art & Culture</Link>
                    
            </div>
        </>
    )
}
export default Navbar;