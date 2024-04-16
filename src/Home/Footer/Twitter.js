import React from "react";
function Twitter() {
    return(
        <>
        <div className="col-xs-12 col-md-3 col-sm-6 ">
                     <h3>Twitter </h3>
                     <ul className="tabs-posts twitter-widget">
                        <li>
                           <div className="caption1" style={{fontSize:"14px"}}><a href="https://twitter.com/kahaniasli" className="url" style={{textDecoration:"none"}}> 
                           Penny Saved Is A Penny Earned: Tips on Savings Money 
                              </a>
                           </div>
                           <ul className="post-tools">
                              <li> 3 Hours Ago </li>
                           </ul>
                        </li>
                        <li>
                           {/* <div className="caption1"><a href="https://twitter.com/kahaniasli" className="url"> */}
                           <div className="caption1" style={{fontSize:"14px"}}><a href="https://twitter.com/kahaniasli" className="url" style={{textDecoration:"none"}}> 
                              Battery Electric Vehicles - Road To An Electrifying Future
                           </a>
                           </div>
                           <ul className="post-tools">
                              <li> 3 Hours Ago </li>
                           </ul>
                        </li>
                        <li>
                           <div className="caption1" style={{fontSize:"14px"}}><a href="https://twitter.com/kahaniasli" className="url" style={{textDecoration:"none"}}>An Overview Of Cosmetic Surgery And Beauty Treatments 
                           </a>
                           </div>
                           <ul className="post-tools">
                              <li> 3 Hours Ago </li>
                           </ul>
                        </li>
                     </ul>
                  </div>
        </>
    );
}
export default Twitter;