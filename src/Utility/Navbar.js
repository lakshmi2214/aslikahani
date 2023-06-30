import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logosmall from "../images/logo-small.jpg";


function Navbar(props) {

    return (
        <>
            <div className="backgroundMenu" >

                <Link to={"/home"}><img src={logosmall} style={{ height: "50px", width: "220px", paddingRight: "50px", paddingTop: "5px" }} />
                </Link>
                {props.addObject?.categories?.slice(0, 8).map((item, index) => {
                    console.log(item);
                    return (

                        <div key={index} className="navbar">
                            <Link to={process.env.REACT_APP_DOMAIN_NAME + '/' + item.url} style={{ color: "black", textDecoration: "none" }}>{item.name}</Link>
                        </div>
                    )
                })}
            </div>

        </>
    )
}
export default Navbar;