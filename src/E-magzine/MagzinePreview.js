import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import './Article.css'
import Navbar from "../Utility/Navbar";
import FooterCategory from "../FooterCategory/FooterCategory";
import LogoColumn from "../Home/LogoColumn";

function MagzinePreview(){
    const location = useLocation();

  const [data, setData] = useState([]);

  useEffect(() => {
    if (location) {
      var tmp = location.pathname.slice(location.pathname.lastIndexOf("/"), location.pathname.length);
      // setData(tmp) 
      tmp = tmp.substring(1, tmp.length);
    }
    const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/emagzines/get?url=${tmp}&meta=true`
    fetch(url).then(res => res.json())
      .then(res => {
        setData(res)
        console.log(res)

      })
  }, []);
    return(
        <>
		<LogoColumn />
		<Navbar/>
        <div className="single-product mt-150 mb-150">
		<div className="container">
			<div className="row">
				<div className="col-md-5">
					<div className="single-product-img">
						<img src={data.cover_image} alt="" style={{height:"500px", width:"350px"}}/>
					</div>
				</div>
				<div className="col-md-7">
					<div className="single-product-content">
						<h1>{data.title}</h1>
						<p className="single-product-pricing text-muted">{data.created_at}</p>
						<p>{data.description}</p>
						{/* <div className="single-product-form">
							<form action="index.html">
								<input type="number" placeholder="0"/>
							</form>
							<a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
							<p><strong>Categories: </strong>Fruits, Organic</p>
						</div> */}
						{/* <h4>Share:</h4> */}
						<div className="author">
            <p><b>Author Name:</b>  <span>{data.authored_by}</span></p>
      <p><b>About Author: </b> {data.about_author}</p>
      <p> <b>Time to read:</b> {data.time_to_read} Hour</p>
      <button className="btn btn-primary " ><a href= {process.env.REACT_APP_DOMAIN_NAME+'/emagazine/'+data.url+'/preview'} style={{color:"white"}}>Preview</a></button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div style={{height:"20px"}}></div>
	<FooterCategory/>
        </>
    )
}
export default MagzinePreview;