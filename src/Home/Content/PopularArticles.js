import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'

function PopularArticles(props) {
  const [isMobile, setIsMobile] = useState(false);

  const navigate = useNavigate();
  const handleNavigation = (item) => {
    // console.log(item);

    navigate(`/${item.category}/${item.url}`, { state: { item } });
  }
  useEffect(() => {
    const checkMobile = () => {
      const isMobile = window.innerWidth >= 767;
      setIsMobile(isMobile);
    };

    checkMobile();

    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  return (
    <div className='row'>
      {/* {isMobile ? null : (
        <div className='col-md-12' >
          <div className='text-center'>POPULAR</div>
          {props.dataObject?.locations?.Popular.slice(0, 4).map((item, index) => {
            return (
              <div key={index}>
                <div className='col-md-12' >
                  <div className='col-md-4' >
                    <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>
                      <img src={item.image} style={{ width: "100%", height: "100%", padding: "5px" }} alt='popular-img' />
                    </a>
                  </div>
                  <div className='col-md-8' style={{ position: "relative", bottom: "5px", left: "5px", padding: "initial" }}>
                    <div className='article-desc' style={{ padding: "5px" }}>
                      <h5 className='text-left'><a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.title}</a></h5>
                      <h5>{item.created_at}</h5>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )} */}
      <div className='col-md-12'>
        <div className='popular-side-cont'>
          <div className='popular-heading'>
            <h5>POPULAR</h5>
          </div>
          {props.dataObject?.locations?.Popular.slice(0, 4).map((item, index) => {
            return (
              <div key={index} className='grid-popular'>

                <div className='row'>
                  <div className='col-md-4'>
                    <div className='poplrImg'>
                      <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>
                        <img className='img-fluid' src={item.image} alt='popular-img' />
                      </a>
                    </div>
                  </div>
                  <div className='col-md-8' >
                    <div className='pplur-desc' >
                      <h5><a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.title}</a></h5>
                      <h5>{item.created_at}</h5>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default PopularArticles