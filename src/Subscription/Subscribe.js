import React from 'react'
import blackSub from "./SUBSCRIBE1.jpeg";
import Navbar from '../Utility/Navbar';
import LogoColumn from '../Home/LogoColumn';
// import Footer from '../Home/Footer/Footer';
import FooterCategory from '../FooterCategory/FooterCategory';
import box from "./1plans.jpeg";
import "./Subscription.css"
// import SubscribeForm from './SubscribeForm';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import Topbar from '../Home/Topbar';
// import { getAccessToken } from './Authentication';


function Subscribe() {
	// const Swal = require('sweetalert');npm install sweetalert --save
	const [spinner, setSpinner] = useState(false);
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		fname: '',
		lname: '',
		email: '',
		phone_number: '',
		message: '',
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};
	const handleSubmit = async (event) => {
		event.preventDefault();
		setSpinner(true);
		const result = formData;
		console.log(result)
		// Replace 'your_access_token' with the actual access token you obtained from the authentication process
		// const accessToken = getAccessToken();

		const requestOptions = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				// Authorization: `Bearer ${accessToken}`,
			},
			body: JSON.stringify(formData),
		};

		try {

			const response = await fetch(`${process.env.REACT_APP_BACKEND_HOST}/api/v1/enquiry/submit`, requestOptions);
			setSpinner(false);
			if (response.ok) {
				// Handle successful response from the backend
				// Swal.fire({
				// 	title: "Good job!",
				// 	text: "You clicked the button!",
				// 	icon: "success"
				//   });
				swal({
					title: "Subscription Confirmed!",
					text: "You've been added to the list",
					icon: "success"
					// button: "Aww yess!"
				  })
				  
				console.log('Form data submitted successfully!', response);
			}
			else {
				swal({
					title: "Failed!!!",
					text: "Please check your details and try again",
					icon: "error"
				  })
				// Handle the error response from the backend
				// console.error('Error submitting form data:', response);
			}
		} catch (error) {
			
			// Handle network errors or other exceptions
			console.error('Error submitting form data:', error);
		}
		// navigate("/")
	};



	return (
		<>
		<Topbar />
			<LogoColumn />
			<Navbar />
			{/* <SubscribeForm /> */}
			<div className='container'>
				<div className='row'>
					<img src={blackSub} alt='subscription' style={{ width: "-webkit-fill-available" }} />
					<br />
					<div className='col-md-12 col-sm-12 col-xm-12'>
						<div className='col-md-6'
						// style={{height:"515px"}}
						>
							<br />
							<section class="form-container">
								<form action="" onSubmit={handleSubmit} >
									<div class="zeile">
										<div class="input-container">
											<input type="text" id="fname" name='fname' placeholder=""
												value={formData.fname}
												onChange={handleChange}
												required='true'
											/>
											<label for="name">First Name: <span style={{ color: "red" }}>*</span></label>
										</div>
										<div class="input-container">
											<input type="text" id="lname" name='lname' placeholder="" value={formData.lname}
												onChange={handleChange}/>
											<label for="lname">Last Name: <span style={{ color: "red" }}>*</span></label>
										</div>
									</div>
									<div class="input-container">
										<input type="email" id="email" name='email' placeholder="" value={formData.email}
												onChange={handleChange}/>
										<label for="email">Email:</label>
									</div>
									<div class="input-container">
										<input type="Number" id="number" name='phone_number' placeholder=""  value={formData.phone_number}
												onChange={handleChange}/>
										<label for="Number">Phone Number: <span style={{ color: "red" }}>*</span></label>
									</div>
									<div class="input-container">
										<textarea id="message" rows="3" placeholder="" name='message'  value={formData.message}
												onChange={handleChange}></textarea>
										<label for="Message">Comment / Message</label>
									</div>
									<div class="input-container">
										<button
											type="button"
											className="btn btn-danger col-md-4"
											onClick={handleSubmit}
											style={{ width: "35%", left: "32%", marginBottom: "5%" }}
										>Submit</button>
									</div>{/* <input type="submit" value="Submit"/> */}
								</form>
							</section>


						




							
						</div>
						{/* <br></br> */}
						<div className='col-md-6' style={{ textAlign: "center", marginTop: "2%", marginBottom: "5%" }}>
							{/* <br/><br/> */}
							<img src={box} style={{ width: "-webkit-fill-available", borderRadius: "10px" }} />

						</div>
					</div>
				</div>
			</div>
			<FooterCategory />
		</>
	)
}

export default Subscribe