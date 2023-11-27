import React from 'react'
import { useNavigate } from "react-router-dom";


function AllTimeBest(props) {
    const navigate = useNavigate();
    const handleNavigation = (item) => {
       // console.log(item);
 
       navigate(`/${item.category}/${item.url}`, { state: { item } });
    }
  return (
    <>
<div className='container'>
<div className='title-article'>
                    <h3><span>All Time Best Articles</span></h3>
                </div><br/>
{props.dataObject?.locations?.AllTimeBestArticle.slice(0, 5).map((item, index) => {
                              // console.log(item);
                              return (
                                 <div key={index}>
<div className='col-md-4'>
<div className="card mb-3" style={{maxWidth: "540px;"}}>
  <div className="row ">
 
    <div className="col-md-4"style={{}}>
      <img src={item.image} className="card-img" alt="..."style={{width:"-webkit-fill-available",height:"135px"}}/>
    </div>
    <div className="col-md-8">
      <div className="card-body"style={{padding: "initial"}}>
        <h5 className="card-title">

        <div className='article-desc' style={{padding:"1px",  background:"white"}}>
                                <h5> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.title}</a></h5>
                                <p className='size'><span>BY</span> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}><strong>{item.authored_by}</strong></a>
                                    <span> / </span><span>{item.created_at}</span> </p>
                            </div>
        </h5></div>
    </div>
    
  </div>
</div><br/>
</div>
</div>
                              )})}
                              



                              {props.dataObject?.locations?.AllTimeBestArticle.slice(0, 1).map((item, index) => {
                              // console.log(item);
                              return (
                                 <div key={index}>
<div className='col-md-4'>
<div className="card mb-3" style={{maxWidth: "540px;"}}>
  <div className="row no-gutters">
 
    <div className="col-md-4"style={{}}>
      <img src={item.image} className="card-img" alt="..."style={{width:"-webkit-fill-available",height:"135px"}}/>
    </div>
    <div className="col-md-8">
      <div className="card-body"style={{padding: "initial"}}>
        <h5 className="card-title">

        <div className='article-desc' style={{ padding: "5px", background:"white"}}>
                                <h5> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.title}</a></h5>
                                <p className='size'><span>BY</span> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}><strong>{item.authored_by}</strong></a>
                                    <span> / </span><span>{item.created_at}</span> </p>
                            </div>
        </h5></div>
    </div>
    
  </div>
</div><br/>
</div>
</div>
                              )})}
</div>


    </>
  )
}

export default AllTimeBest