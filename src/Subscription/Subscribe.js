import React from 'react'
import blackSub from "./SUBSCRIBE1.jpeg";
import Navbar from '../Utility/Navbar';
import LogoColumn from '../Home/LogoColumn';
// import Footer from '../Home/Footer/Footer';
import FooterCategory from '../FooterCategory/FooterCategory';
import box from "./plans.jpeg";
import "./Subscription.css"
// import SubscribeForm from './SubscribeForm';

function Subscribe() {
  // const script = document.createElement("script");
  // script.src = "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js";
  // script.async = true;
  // document.body.appendChild(script);
  
  return (
    <>
      <LogoColumn />
      <Navbar />
      {/* <SubscribeForm /> */}
      <div className='container'>
        <div className='row'>
        <img src={blackSub} alt='subscription' style={{ width: "-webkit-fill-available" }} />
        <br/>
      <div className='col-md-12 col-sm-12 col-xm-12'>
      <div className='col-md-6' 
      // style={{height:"515px"}}
      >
        <br/>
<section class="form-container">
	<form action="">
		<div class="zeile">
			<div class="input-container">
				<input type="text" id="name" placeholder=""/>
				<label for="name">Name: <span style={{ color: "red" }}>*</span></label>
			</div>
			<div class="input-container">
				<input type="text" id="lname" placeholder=""/>
				<label for="lname">Last Name: <span style={{ color: "red" }}>*</span></label>
			</div>
		</div>
		<div class="input-container">
			<input type="email" id="email" placeholder=""/>
			<label for="email">Email:</label>
		</div>
		<div class="input-container">
			<input type="Number" id="Number" placeholder=""/>
			<label for="Number">Phone Number: <span style={{ color: "red" }}>*</span></label>
		</div>
		<div class="input-container">
			<textarea id="Message" rows="3" placeholder=""></textarea>
			<label for="Message">Comment / Message</label>
		</div>
    <button type="button" class="btn btn-danger col-md-4  " style={{width:"35%", left:"32%", marginBottom:"5%"}}>Submit</button>
		{/* <input type="submit" value="Submit"/> */}
	</form>
</section>
</div>
{/* <br></br> */}
<div className='col-md-6' style={{textAlign:"center", marginTop:"4%"}}>
  {/* <br/><br/> */}
    <img src={box} style={{width:"-webkit-fill-available"}}/>
    
</div>  
</div>
</div>
</div>
      <FooterCategory />
    </>
  )
}

export default Subscribe