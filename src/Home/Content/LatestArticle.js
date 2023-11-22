import React from 'react'
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

function LatestArticle(props) {
	const navigate = useNavigate();
	const handleNavigation = (item) => {
		//  console.log(item);

		navigate(`/${item.category}/${item.url}`, { state: { item } });
	}
	return (
		<>

			{/* <Container fluid> */}
			<div className='row'>

				<div className="col-md-12">
					<h2 className="main-heading">Latest Articles</h2>
					<div className="col-md-7 col-sm-12 overflow-auto">
						{props.dataObject?.locations?.LatestPost.slice(0, 1).map((item, index) => {
							return (
								<div key={index}>
									<div className='' style={{borderBottom:"1px solid #a4a0a0"}}>
									<a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>
										<img alt="" className="img-responsive" src={item.image} style={{height:"190px"}}/>
									</a>
									<div className='article-desc' >
										<h5> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.title}</a></h5>
										<p className='size'><span>BY</span> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}><strong>{item.authored_by}</strong></a>
											<span> / </span><span>{item.created_at}</span> </p>
									</div>
									</div>
								</div>
							)
						})}
					</div>
					<div className="col-md-5 col-sm-12">
						{props.dataObject?.locations?.LatestPost.slice(1, 5).map((item, index) => {
							return (
								<div key={index}>

									<div className='article_desc'>
										<h5 style={{fontSize:"medium"}}> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.title}</a></h5>
										<p className='size'><span>{item.created_at}</span> </p>
									</div>
									</div>
							)})}
								</div>
					</div>

				</div>
				{/* </Container> */}



			</>
			)
}

			export default LatestArticle