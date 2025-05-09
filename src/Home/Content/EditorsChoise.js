import React, { useState, useEffect } from 'react'
import './EditorsChoise.css'
// import { useNavigate } from "react-router-dom";

function EditorsChoise(props) {
  const [isMobile, setIsMobile] = useState(false);
  // const navigate = useNavigate();
  // const handleNavigation = (item) => {

  //   navigate(`/${item.category}/${item.url}`, { state: { item } });
  // }
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

      <div className='mostViewd'>
        <div className='hdng'>
          <h2>Editors Choise</h2>
        </div>
        <div className='gridLis'>
          <div className='row'>
            {props.dataObject?.locations?.AdminChoice.slice(0, 3).map((item, index) => {
              return (
                <div className='col-md-4 col-12'>
                  <div key={index} className='gridData'>
                    <div className='imgLst'>
                      <img className="img-fluid" src={item.image} alt="imagecap" />
                    </div>
                    <div className='ls-heading'>
                      <h4>{item.title}</h4>
                      <p>{item.authored_by}</p>
                      <button>{item.created_at}</button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      {/* <span style={{ color: "white" }}>B</span> */}

      {/* <div className='title-articleCenter' >
        <h3><span>Editor's Choice</span></h3>
      </div>
      <div className='row row-gap-4' >
        {props.dataObject?.locations?.AdminChoice.slice(0, 3).map((item, index) => {
          return (
            <div key={index} className='col-md-4 col-12'>
              <div className="card-custom-ui" >
                <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>
                  <div className='img-custom-ui'>
                    <img className="img-fluid" src={item.image} alt="imagecap" />
                  </div> </a>
                <div className="card-body-custom-ui">
                  <div className='article-desc-custom-ui' >
                    <h5> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.title}</a></h5>
                    <p className='size-custom-ui'><span>BY</span> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}><strong>{item.authored_by}</strong></a>
                      <span> / </span><span>{item.created_at}</span> </p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div> */}

      {/* </div> */}
      {/* {isMobile ? null : (
        <div className="col-md-12" style={{ padding: "initial" }}  >
          <div className='title-article' style={{ paddingLeft: "0px" }}>
            <h3><span>Editor's Choice</span></h3>
          </div><br />
          {props.dataObject?.locations?.AdminChoice.slice(0, 3).map((item, index) => {
            return (
              <div key={index}>
                <div className='col-md-4' style={{ padding: "0px" }} >
                  <div className="card" style={{ width: "20rem;", border: "1px solid #cfcbcb" }}>
                    <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>
                      <div className='img-hover-zoom'>
                        <img className="card-img-top" src={item.image} alt="Cardcap" style={{ width: "-webkit-fill-available" }} />
                      </div> </a>
                    <div className="card-body">
                      <div className='article-desc' style={{ padding: "5px", background: "white", height: "110px" }}>
                        <h5> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.title}</a></h5>
                        <p className='size'><span>BY</span> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}><strong>{item.authored_by}</strong></a>
                          <span> / </span><span>{item.created_at}</span> </p>
                      </div>
                    </div>
                  </div><br />
                </div>
              </div>
            )
          })}
        </div>
      )} */}
    </>
  )
}

export default EditorsChoise