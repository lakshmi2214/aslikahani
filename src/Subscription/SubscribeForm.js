import React from 'react'
import blackSub from "./SUBSCRIBE1.jpeg";
import Navbar from '../Utility/Navbar';
import LogoColumn from '../Home/LogoColumn';
// import Footer from '../Home/Footer/Footer';
import FooterCategory from '../FooterCategory/FooterCategory';
import box from "./subscriptionplan.jpeg";
// import "./Subscription.css"

function SubscribeForm() {
  return (
    <div>
 {/* <LogoColumn />
      <Navbar /> */}
      <div className='container'>
      <div className='col-md-12 col-sm-12 col-xm-12'>
      <div className='col-md-6' style={{height:"515px"}}>
      <form>
      <label for="usr" style={{ marginLeft: "20px" }}><h4>Name: <span style={{ color: "red" }}>*</span></h4></label>
                  <input type="text" className="form-control" id="usr" />
                  <label for="usr" style={{ marginLeft: "20px" }}><h4>Email: <span style={{ color: "red" }}>*</span></h4></label>
                  <input type="email" className="form-control" id="usr" /><br />
                  <label for="usr" style={{ marginLeft: "20px" }}><h4>Mobile/Whats App No</h4></label>
                  <input type="number" className="form-control" id="usr" />
                  <label for="comment" style={{ marginLeft: "20px" }}><h4>Comment / Message</h4></label>
                  <textarea className="form-control" rows="5" id="comment"></textarea>
                  {/* <div className=' form-subscribe'> */}
                  <button type="button" class="btn btn-danger" style={{width:"35%", left:"35%", marginTop:"5%"}}>Submit</button>
</form>
</div>
<br></br>
<div className='col-md-6' style={{textAlign:"center", border:"1px solid black"}}>
  {/* <br/> */}
    <img src={box} style={{width:"-webkit-fill-available"}}/>
    
</div>
      </div>

</div>
    </div>
  )
}

export default SubscribeForm