import React from 'react'
// import { useNavigate } from "react-router-dom";
import button from "../images/button.jpg"

function Tags(props) {
    // console.log(props);
  return (
    <>
    <div className="col-md-12 col-sm-12 col-xs-12">
                 <div className='hash-tagName'>
{props.dataObject?.locations?.trendingTags?.map((item)=>{
    // console.log(item);
    return(
        <a href={process.env.REACT_APP_DOMAIN_NAME+'/search/'+item.tag_value}>
            <div className="badge text-bg-danger tagname">{item.tag_name}</div></a>                         
        )
        })}
        <a href={process.env.REACT_APP_DOMAIN_NAME+'/subscribe'}>
      <img src={button} style={{width:"300px"}} alt='button-img'/></a>
</div>


</div>



          
    </>
  )
}

export default Tags