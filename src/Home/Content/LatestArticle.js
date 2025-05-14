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
			{/* <div className='row'>
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

			</div> */}
			{/* </Container> */}
			<div className="updt-content-wrapper">
				<div className="updt-section">
					<div className='arctl-headings'>
						<h2 className="updt-section-title">Entertainment</h2>
						<button>View All</button>
					</div>
					<div className="updt-articles">
						{props.dataObject?.locations?.LatestPost.slice(0, 3).map((item, index) => {
							return (
								<a className='mst-anchor' href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>
									<div key={index} className="updt-article">
										<div className='updt-artcl'>
											<img alt="" className="img-fluid" src={item.image} />
										</div>
										<div className="updt-article-text">
											<h3>{item.title}</h3>
											<p>{item.authored_by}</p>
											<p>{item.created_at}</p>
											<a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>READ MORE</a>
										</div>
									</div>
								</a>
							)
						})}
					</div>
				</div>
			</div>




		</>
	)
}

export default LatestArticle