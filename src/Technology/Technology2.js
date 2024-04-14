import React from 'react'
import { useNavigate } from 'react-router-dom';

function Technology2(props) {
  const navigate = useNavigate()
  const handleNavigation = (item) => {
    //   console.log(item);

    navigate(`/${item.category}/${item.url}`, { state: { item } });
  }
  return (
    <>
      <div className='row row-gap-4'>
        {props.dataObject?.locations?.TecGeneral.slice(4, 8).map((item, index) => {
          return (
            <div className='col-md-6 '>
              <div key={index} className='girdImagesHome big-right-Img innerpageHeightImg '>
                <div className='home-image-main' onClick={() => handleNavigation(item, index)}>
                  <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>
                    <img src={item.image} className='img-fluid' alt='img1' />
                  </a>
                  <div className='overlayImg-text'>
                    <h5> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.title}</a></h5>
                    <p>BY <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.authored_by}</a></p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      {/* <div className='posts'>
        <div className='col-md-6 '>
          {props.dataObject?.locations?.TecGeneral.slice(4, 6).map((item, index) => {

            return (
              <div key={index}>
                <div className='article-image' onClick={() => handleNavigation(item, index)}>

                  <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>
                    <img src={item.image} alt='img1' style={{ width: "-webkit-fill-available", height: "260px" }} />
                  </a>

                  <div className='col-md-12 article-desc' style={{ height: "90px" }}>
                    <h5 > <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.title}</a></h5>
                    <p>BY <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.authored_by}</a></p>
                  </div>
                </div>
              </div>
            )
          })}

        </div>
        <div className='col'>
          <div className='col-md-6'>
            {props.dataObject?.locations?.TecGeneral.slice(6, 8).map((item, index) => {

              return (
                <div key={index}>
                  <div className='article-image'>
                    <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>
                      <img src={item.image} alt='img1' style={{ width: "-webkit-fill-available", height: "260px" }} />
                    </a>
                    <div className='col-md-12 article-desc' style={{ height: "90px" }}>
                      <h5> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.title}</a></h5>
                      <p>BY <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.authored_by}</a></p>
                    </div>
                  </div>
                </div>
              )
            })}

          </div>
        </div>
      </div> */}
    </>
  )
}

export default Technology2