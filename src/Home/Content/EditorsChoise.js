import React from 'react'
import { useNavigate } from "react-router-dom";

function EditorsChoise(props) {
    const navigate = useNavigate();
    const handleNavigation = (item) => {
       // console.log(item);
 
       navigate(`/${item.category}/${item.url}`, { state: { item } });
    }
  return (
    <>
  <div class="containers">
  <div class="box red"> 
  {props.dataObject?.locations?.AdminChoice.slice(0, 3).map((item, index) => {
return(
    <div key={index}>
        <div className='col-md-12' style={{borderBottom:"1px solid #a4a0a0"}}>
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
)})}
  
  </div>
  {/* <div class="box blue"> <i class="fa fa-globe"></i> here is box number 2</div>
  <div class="box green"> <i class="fa fa-globe"></i> here is box number 3</div> */}
</div>
    </>
  )
}

export default EditorsChoise