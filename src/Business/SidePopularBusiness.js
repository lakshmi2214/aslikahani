import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function SidePopularBusiness(props) {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const handleNavigation = (item) => {
    // console.log(item);

    navigate(`/${item.category}/${item.url}`, { state: { item } });
  }
  useEffect(() => {

  }, []);
  return (
    <div className='col-md-12'>
        <div className='popular-side-cont'>
          <div className='popular-heading'>
            <h5>POPULAR</h5>
          </div>
          {props.dataObject?.locations?.BussGeneral.slice(0, 5).map((item, index) => {
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
    // <div>
    //   <br />
    //   <div className='col-md-12 mobile-view'>
    //     <div className='text-center' style={{ height: "35px", padding: "8px", backgroundColor: "#d32415", color: "white", cursor: "default" }}>POPULAR</div>
    //    {props.dataObject?.locations?.BussGeneral.slice(0, 5).map((item, index) => {

    //       return (
    //         <div key={index}>
    //           <div className='col-md-12' style={{padding:"0px"}}>
    //           <div className='col-md-4' style={{ padding: "initial" }}>
    //             <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>
    //               <img src={item.image} style={{ width: "100%", height: "90px", padding: "5px" }} alt='popular-img' />
    //             </a>
    //           </div>
    //           <div className='col-md-8' style={{ padding:"0px" }}>
    //             <div className='article-desc' style={{ padding: "5px" }}>
    //               <h5 className='text-left' > <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>  {item.title}</a></h5>
    //               <h5> {item.created_at}</h5>
    //             </div>
    //           </div>
    //         </div>
    //         </div>
    //       )
    //     })}
    //   </div>
    //   {isMobile ? null:(
    //       <div className='col-md-12'>
    //       <div className='text-center' style={{ height: "35px", padding: "8px", backgroundColor: "#d32415", color: "white", cursor: "default" }}>POPULAR</div>
    //      {props.dataObject?.locations?.BussGeneral.slice(0, 5).map((item, index) => {
  
    //         return (
    //           <div key={index}>
    //             <div className='col-md-12' style={{padding:"0px"}}>
    //             <div className='col-md-4' style={{ padding: "initial" }}>
    //               <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>
    //                 <img src={item.image} style={{ width: "100%", height: "90px", padding: "5px" }} alt='popular-img' />
    //               </a>
    //             </div>
    //             <div className='col-md-8' style={{ padding:"0px" }}>
    //               <div className='article-desc' style={{ padding: "5px" }}>
    //                 <h5 className='text-left' > <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>  {item.title}</a></h5>
    //                 <h5> {item.created_at}</h5>
    //               </div>
    //             </div>
    //           </div>
    //           </div>
    //         )
    //       })}
    //     </div>
    //   )}
    // </div>

  )
}

export default SidePopularBusiness