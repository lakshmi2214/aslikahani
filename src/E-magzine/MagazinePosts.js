import React from 'react'
import { useNavigate } from "react-router-dom";

function MagazinePosts(props) {
  const navigate = useNavigate()
  const handleNavigation = (item) => {
    console.log(item);

    navigate(`/emagazine/${item.url}`, { state: { item } });
  }
  return (
    <div>
      <div class="main-items-container">
        {props.dataObject?.map((item, index) => {
          console.log(item);
          return (

            <div key={index}>
              <div class="item-container">
                <div className='img-posts' onClick={() => handleNavigation(item, index)}>
                  <a href={process.env.REACT_APP_DOMAIN_NAME + '/emagazine/' + item.url}>
                    <img src={item.cover_image} alt="test image" /></a>
                </div>
                <div className='content-posts'>
                <h5>
                  <a href={process.env.REACT_APP_DOMAIN_NAME + '/emagazine/' + item.url} className='text-dark'>{item.title}</a>
                </h5>
                <li> by <a href={process.env.REACT_APP_DOMAIN_NAME + '/emagazine/' + item.url}> <strong> {item.authored_by}</strong> </a></li>
                </div>
              </div>
            </div>

          )
        })}
        {/* <h2>Item Name</h2>
  <div class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus semper metus id fringilla. </div>
</div> */}




      </div>
    </div>
  )
}

export default MagazinePosts