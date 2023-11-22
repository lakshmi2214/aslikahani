import React from 'react'
import { useNavigate } from "react-router-dom";

function TopArticles(props) {
    const navigate = useNavigate();
    const handleNavigation = (item) => {
       // console.log(item);
 
       navigate(`/${item.category}/${item.url}`, { state: { item } });
    }
  return (
    <div>
        <div className='row'>
            <div className='col-md-12'>
                <h4 style={{backgroundColor:"#d32415",color:"white", padding:"10px"}}><strong>Top Aricles</strong></h4>
            {props.dataObject?.locations?.TopNews.slice(0, 6).map((item, index) => {
                  // console.log(item);
                  return (
                     <div key={index}>
                        {/* <div className='col-md-12'> */}
               <a href={process.env.REACT_APP_DOMAIN_NAME + '/'+item.category+'/' + item.url}>
                                 <img alt="" className="img-responsive" src={item.image} />
                              </a>
                              <div className='article-desc' >
										<h5> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.title}</a></h5>
										{/* <p className='size'><span>BY</span> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}><strong>{item.authored_by}</strong></a>
											<span> / </span><span>{item.created_at}</span> </p> */}
									</div>
                                    {/* </div> */}
                                    </div>
                  )})}
            </div>
        </div>
    </div>
  )
}

export default TopArticles