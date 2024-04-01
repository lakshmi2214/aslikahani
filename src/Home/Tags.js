import React from 'react'
// import { useNavigate } from "react-router-dom";
import button from "../images/button.jpg"

function Tags(props) {
  // console.log(props);
  return (
    <>
      <div className='badgesContainer'>
          <div className='hash-tagName'>
            {props.dataObject?.locations?.trendingTags?.map((item) => {
              // console.log(item);
              return (
                <a href={process.env.REACT_APP_DOMAIN_NAME + '/search/' + item.tag_value}>
                  <div className="badges-list">{item.tag_name}</div></a>
              )
            })}
            <a className='img-bages' href={process.env.REACT_APP_DOMAIN_NAME + '/subscribe'}>
              <img src={button} className='img-fluid' alt='button-img' /></a>
          </div>
      </div>




    </>
  )
}

export default Tags