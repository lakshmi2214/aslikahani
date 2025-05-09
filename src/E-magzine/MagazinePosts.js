import React from 'react'
import { useNavigate } from "react-router-dom";

function MagazinePosts(props) {
  const navigate = useNavigate()
  const handleNavigation = (item) => {
    // console.log(item);

    navigate(`/emagazine/${item.url}/preview`, { state: { item } });
  }
  return (
    <div className='mgz-outer'>
      <div className="main-items-container">
        {props.dataObject?.map((item, index) => {
          // console.log(item);
          return (

            <div className='mzg-index' key={index}>
              <div className="item-container">
                <div className='img-posts' onClick={() => handleNavigation(item, index)}>
                  <a href={process.env.REACT_APP_DOMAIN_NAME + '/emagazine/' + item.url + '/preview'}>
                    <img src={item.cover_image} alt="test image" /></a>
                </div>
                <div className='content-posts'>
                <h5>
                  <a href={process.env.REACT_APP_DOMAIN_NAME + '/emagazine/' + item.url + '/preview'} className='text-dark'>{item.title}</a>
                </h5>
                <li> by  <strong> {item.authored_by}</strong> </li>
                </div>
              </div>
            </div>

          )
        })}
        {/* <h2>Item Name</h2>
  <div className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus semper metus id fringilla. </div>
</div> */}




      </div>
      
    </div>
  )
}

export default MagazinePosts