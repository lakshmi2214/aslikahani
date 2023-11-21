import React from 'react'
import { useNavigate } from "react-router-dom";
import sidebanner from "../images/banner2.jpg"

function LatestArticle(props) {
    // const navigate = useNavigate();
    // const handleNavigation = (item) => {
    //     console.log(item);

    //     navigate(`/${item.category}/${item.url}`, { state: { item } });
    // }

    // const grid = props.dataObject;
  return (
    <> 
   <div class="container">
			<div class="row flexbox">
					<div class="col-md-4 item">
						<div class="featured-box">
							<div class="box-content">
								
								<h4 class="text-uppercase mohsin">Return policy</h4>
								<ul>
                <li>An item can only be borrowed Monday-Friday between 9am - 5pm.</li>
                  <li>All items must be returned at most 10 days after the date the item was borrowed.</li>
                  <li>All items have a 10 day loan period and must be returned by 4pm on the due date. </li>
                  <li>Students will be charged $10 per item for each day the item is not returned past the due date.</li>
                </ul>
							</div>
						</div>
					</div>
					<div class="col-md-4 item">
						<div class="featured-box">
							<div class="box-content">
								
								<h4 class="text-uppercase mohsin">Consulting &amp; Integration</h4>
								<p>UI/UX &amp; Architecture Design Software Conceptualization App Migration &amp; Porting Enterprise Content Management (ECM) Application Re-Engineering Enterprise App integration (EAI) </p>
							</div>
						</div>
					</div>
					<div class="col-md-4 item">
						<div class="featured-box">
							<div class="box-content">
							
								<h4 class="text-uppercase mohsin">Maintenance &amp; Support</h4>
								<p>Application Management CRM and ERP implementation Performance Optimization Application Modernization Payment Gateway Integration Software Testing </p>
							</div>
						</div>
					</div>
				</div>
			</div>
    
    </>
  )
}

export default LatestArticle