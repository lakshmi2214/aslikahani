import React from "react";
// import "./Subscription.css";
import logosmall from "../images/logo-small.jpg";
import subscribeImage from "./subscribe.jpeg";
import { useNavigate } from "react-router-dom";


function Subscriptiontag(){
  const navigate = useNavigate()
   const handleNavigationsub = () => {
           navigate("/subscription");
   }
    return(
        <>
        <Topbar />
    <div className="subscription-background">
          <div className="aslikahani-logo">
            <img src={logosmall} alt="logo" className="aslikahani-logo-size"/>
          </div>
          <div className="sub-part">
            <div className="sub-part1">
                <img src={subscribeImage} 
                onClick={handleNavigationsub}
                alt="subscribe-image" className="subscribe-image"/>
            </div>
          </div>
    </div>
        </>
    )
}
export default Subscriptiontag;