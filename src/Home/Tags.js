import React from 'react'
import { useNavigate } from "react-router-dom";

function Tags(props) {
    console.log(props);
  return (
    <div>
         {/* <div className="container">
            <div className="row"> */}
               <div className="col-md-12 col-sm-12 col-xs-12">
                 <div className='hash-tagName'>
{/* <div className='hash-tag1'>
    <div className='tagname'>Trending</div>
</div> */}
{props.dataObject?.locations?.trendingTags?.map((item,index)=>{
    console.log(item);
    return(
        <a href={process.env.REACT_APP_DOMAIN_NAME+'/search/'+item.tag_value}>
            <span class="badge text-bg-danger tagname">{item.tag_name}</span></a>  
        )
        })}

</div>




{/* <div className='col-md-12 hashtag'>

<div className=' col-md-4 hashTag1'><span className=''> Trending</span></div>
<div className='col-md-4 hashTag1'>Trending</div>
<div className='col-md-4 hashTag1'>Trending</div>
</div> */}
</div>

    </div>
  )
}

export default Tags