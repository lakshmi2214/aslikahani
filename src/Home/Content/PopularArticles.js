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
    // <div className='row'>
    //   <div className='col-md-12'>
    //     <div className='popular-side-cont'>
    //       <div className='popular-heading'>
    //         <h5>POPULAR</h5>
    //       </div>
    //       {props.dataObject?.locations?.Popular.slice(0, 4).map((item, index) => {
    //         return (
    //           <div key={index} className='grid-popular'>

    //             <div className='row'>
    //               <div className='col-md-4'>
    //                 <div className='poplrImg'>
    //                   <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>
    //                     <img className='img-fluid' src={item.image} alt='popular-img' />
    //                   </a>
    //                 </div>
    //               </div>
    //               <div className='col-md-8' >
    //                 <div className='pplur-desc' >
    //                   <h5><a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.title}</a></h5>
    //                   <h5>{item.created_at}</h5>
    //                 </div>
    //               </div>
    //             </div>

    //           </div>
    //         );
    //       })}
    //     </div>
    //   </div>
    // </div>
    <div className="updt-content-wrapper">
      <div className="updt-section">
        <div className='arctl-headings'>
          <h2 className="updt-section-title">Popular</h2>
          <button>View All</button>
        </div>
        <div className="updt-articles">
          {props.dataObject?.locations?.Popular.slice(0, 3).map((item, index) => {
            return (
              <a className='mst-anchor' href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>
                <div key={index} className="updt-article">
                  <div className='updt-artcl'>
                    <img alt="" className="img-fluid" src={item.image} />
                  </div>
                  <div className="updt-article-text">
                    <h3>{item.title}</h3>
                    <p>{item.authored_by}</p>
                    <p>{item.created_at}</p>
                    <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>READ MORE</a>
                  </div>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default PopularArticles