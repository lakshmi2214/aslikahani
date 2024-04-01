import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

function TopArticles(props) {
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
    <>
      {isMobile ? null : (
        <div className='row'>
          <div className='col-md-12'>
            <h4 style={{ backgroundColor: "#d32415", color: "white", padding: "10px" }}><strong>Top Aricles</strong></h4>
            {props.dataObject?.locations?.TopNews.slice(0, 6).map((item, index) => {
              // console.log(item);
              return (
                <div key={index}>
                  <div className='zoom-in' style={{ height: "auto" }}>
                    <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>
                      <img alt="img11" className="img-responsive" src={item.image} style={{ width: "100%", height: "auto" }} />
                    </a></div>
                  <div className='article-desc' >
                    <h5> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.title}</a></h5>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
      <div className=' mobile-view'>
        <div className='multi-artic'>
          <h4><strong>Top Aricles</strong></h4>
          <div className='row'>
            {props.dataObject?.locations?.TopNews.slice(0, 6).map((item, index) => {
              // console.log(item);
              return (
                <div className='col-md-6' key={index}>
                  <div className='aric-img-data-grid'>
                    <div className='artic-smallimg'>
                      <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>
                        <img alt="img11" className="img-fluid" src={item.image}  />
                      </a>
                    </div>
                    <div className='article-desc-small' >
                      <h5> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.title}</a></h5>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default TopArticles