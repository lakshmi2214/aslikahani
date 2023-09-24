import React from "react";
import blackSub from "./SUBSCRIBE1.jpeg";
import "./Subscription.css";
import box from "./Subscribebox.jpeg";

function SubscriptionDoor(){
    return(
        <>
        <div className="flex">
        <div className="left">

        <div className="sub-background">
            <h1 style={{marginLeft:"25px"}}> Subscription</h1>
            <div className="blackSub">
                <img src={blackSub} className="blackSub-logo" alt="imgbox"/>
            </div>
        </div>
       <br/>
       <br/>
        <form>
    <div className="form-group">
      <label for="usr"  style={{ marginLeft:"20px"}}><h4>Name: <span style={{color:"red"}}>*</span></h4></label>
      <input type="text" className="form-control" id="usr" style={{width:"400px", marginLeft:"20px"}}/>
    </div>

    <div className="form-group">
      <label for="usr"  style={{ marginLeft:"20px"}}><h4>Email: <span style={{color:"red"}}>*</span></h4></label>
      <input type="email" className="form-control" id="usr" style={{width:"400px", marginLeft:"20px"}}/>
    </div>

    <div className="form-group">
      <label for="usr"  style={{ marginLeft:"20px"}}><h4>Mobile/Whats App No</h4></label>
      <input type="number" className="form-control" id="usr" style={{width:"400px", marginLeft:"20px"}}/>
    </div>
    
    <div className="form-group">
  <label for="comment" style={{ marginLeft:"20px"}}><h4>Comment / Message</h4></label>
  <textarea className="form-control" rows="5" id="comment" style={{ width:"850px", marginLeft:"20px"}}></textarea>
</div>
  </form>

  <div className="">
    <img src={box} className="box-size" alt="boximg"/>
  </div>
  </div>
  
  <div className="right">
    <div className="latest-edition">
         LATEST EDITION!
    </div>
    <hr className="latest-edition-hr"></hr>
  </div>
  </div>
        </>
    )
}
export default SubscriptionDoor;