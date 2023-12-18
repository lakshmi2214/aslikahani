import React from 'react'
import { useNavigate } from 'react-router-dom';

function PopularArticles(props) {
  const navigate = useNavigate();
  const handleNavigation = (item) => {
    // console.log(item);

    navigate(`/${item.category}/${item.url}`, { state: { item } });
  }
  return (
    <div>
      <br />
      <div className='col-md-12'>
        <div className='text-center' style={{ height: "35px", padding: "8px", backgroundColor: "#d32415", color: "white", cursor: "default" }}>POPULAR</div>
        {/* <div className='col-md-12'></div> */}
        {props.dataObject?.locations?.Popular.slice(0, 4).map((item, index) => {
             
             return (
                  <div key={index}>
       <div className='col-md-4' style={{padding:"initial"}}>
        <a href={process.env.REACT_APP_DOMAIN_NAME+'/'+item.category+'/'+item.url}>
                      <img src={item.image} style={{ width: "100%", height: "90px", padding: "5px" }} alt='popular-img' />
                    </a>
       </div>
       <div className='col-md-8' style={{position:"relative", bottom:"5px", left:"5px"}}>
         <div className='article-desc' style={{  padding:"5px"}}>
                        <h5 className='text-left' > <a href={process.env.REACT_APP_DOMAIN_NAME+'/'+item.category+'/'+item.url}>  {item.title}</a></h5>
                        <h5> {item.created_at}</h5>
                      </div>
       </div>
       </div>
             )})}
      </div>
    </div>

  )
}

export default PopularArticles