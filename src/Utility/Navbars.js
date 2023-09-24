import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";
import logosmall from "../images/logo-small.jpg";

function Navbars() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
   
  return (
    <>

<nav className="navbar">
                <div className="nav-container">
                    <NavLink  to="/" className="nav-logo">
                        <img src={logosmall} alt="logo" style={{ height: "60px", width: "120px" }} />
                    </NavLink>

                    <ul className={click ? "nav-Education active" : "nav-Education"}>
                        <li className="nav-item">
                            <NavLink
                               to="/home"
                               className="nav-links"
                                onClick={handleClick}   
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                               to="/Entertainment"
                               className="nav-links"
                                onClick={handleClick}
                            >
                                Entertainment 
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                               to="/Education"
                               className="nav-links"
                                onClick={handleClick}
                            >
                                Education 
								</NavLink>
                               
                        </li>        


  
                        <li className="nav-item">
                            <NavLink
                               to="/Technology"
                               className="nav-links"
                                onClick={handleClick}
                            >
                                Technology
                            </NavLink>
                        </li> 
                        <li className="nav-item">
                            <NavLink
                               to="/Business"
                               className="nav-links"
                                onClick={handleClick}
                            >
                                Business
                            </NavLink>
                        </li>      
                        <li className="nav-item">
                            <NavLink
                               to="/Travel"
                               className="nav-links"
                                onClick={handleClick}
                            >
                                Travel
                            </NavLink>
                        </li>                          
                        <li className="nav-item">
                            <NavLink
                               to="/Lifestyle"
                               className="nav-links"
                                onClick={handleClick}
                            >
                                Lifestyle
                            </NavLink>
                        </li>   
                        <li className="nav-item">
                            <NavLink
                               to="/Art-and-Culture"
                               className="nav-links"
                                onClick={handleClick}
                            >
                                Art and Culture
                            </NavLink>
                        </li>   		
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                </div>
            </nav>

    </>
  )
}

export default Navbars