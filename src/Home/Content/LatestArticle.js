import React from 'react'
import { useNavigate } from "react-router-dom";
// import { Container, Row, Col } from 'react-bootstrap';

function LatestArticle(props) {
	const navigate = useNavigate();
	const handleNavigation = (item) => {
		//  console.log(item);

		navigate(`/${item.category}/${item.url}`, { state: { item } });
	}
	return (
		<>
			<div className='row'>
				<div className="col-md-12" >
					<div className='art-heading' >
						<h3><span>Latest Articles</span></h3>
					</div>
					<div className='articalContainer'>
						<div className='row'>
							<div className="col-md-7 col-sm-12 overflow-auto">
								{props.dataObject?.locations?.LatestPost.slice(0, 1).map((item, index) => {
									return (
										< >
											<div key={index} className='artical-cards'>
												<a className='articalimg-redirection' href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>
													<img alt="" className="img-fluid" src={item.image} />
												</a>
												<div className='article-desc-data' >
													<h5> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.title}</a></h5>
													<p><span>BY</span> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}><strong>{item.authored_by}</strong></a>
														<span> / </span><span>{item.created_at}</span> </p>
												</div>
											</div>
										</>
									)
								})}
							</div>
							<div className="col-md-5 col-sm-12">
								<div className='list-aritcal-outer'>
									{props.dataObject?.locations?.LatestPost.slice(1, 5).map((item, index) => {
										return (
											<>
												<div key={index} className='article_desc-list'>
													<h5> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.title}</a></h5>
													<p><span>{item.created_at}</span> </p>
												</div>
											</>
										)
									})}
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
			{/* </Container> */}



		</>
	)
}

export default LatestArticle