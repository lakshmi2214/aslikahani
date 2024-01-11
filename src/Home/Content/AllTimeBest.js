import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";


function AllTimeBest(props) {
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
      <div className='col-md-12 mobile-view' style={{paddingLeft:"7%", paddingRight:"7%"}}>
        <div className='title-article' style={{paddingLeft:"16px"}}>
          <h3><span>All Time Best Articles</span></h3>
        </div><br />
        {props.dataObject?.locations?.AllTimeBestArticle.slice(0, 5).map((item, index) => {
          // console.log(item);
          return (
            <div key={index}>
              <div className='col-md-4'>
                <div className="card mb-3" style={{ maxWidth: "540px" ,overflow:"hidden"}}>
                  <div className="row ">

                    <div className="col-md-4" style={{ padding: "initial" }}>
                      <img src={item.image} className="card-img" alt="..." style={{ width: "-webkit-fill-available", height: "135px" }} />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body" style={{ padding: "initial" }}>
                        <h5 className="card-title">

                          <div className='article-desc' style={{ padding: "5px", background: "white" }}>
                            <h5> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.title}</a></h5>
                            <p className='size'><span>BY</span> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}><strong>{item.authored_by}</strong></a>
                              <span> / </span><span>{item.created_at}</span> </p>
                          </div>
                        </h5></div>
                    </div>

                  </div>
                </div><br />
              </div>
            </div>
          )
        })}




        {props.dataObject?.locations?.AllTimeBestArticle.slice(0, 1).map((item, index) => {
          // console.log(item);
          return (
            <div key={index}>
              <div className='col-md-4'>
                <div className="card mb-3" style={{ maxWidth: "540px" , overflow:"hidden"}}>
                  <div className="row no-gutters">

                    <div className="col-md-4" style={{ padding: "initial" }}>
                      <img src={item.image} className="card-img" alt="..." style={{ width: "-webkit-fill-available", height: "135px" }} />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body" style={{ padding: "initial" }}>
                        <h5 className="card-title">

                          <div className='article-desc' style={{ padding: "5px", background: "white" }}>
                            <h5> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.title}</a></h5>
                            <p className='size'><span>BY</span> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}><strong>{item.authored_by}</strong></a>
                              <span> / </span><span>{item.created_at}</span> </p>
                          </div>
                        </h5></div>
                    </div>

                  </div>
                </div><br />
              </div>
            </div>
          )
        })}
      </div>
      {isMobile ? null : (
      <div className='col-md-12'>
        <div className='title-article' style={{paddingLeft:"1px"}}>
          <h3><span>All Time Best Articles</span></h3>
        </div><br />
        {props.dataObject?.locations?.AllTimeBestArticle.slice(0, 5).map((item, index) => {
          // console.log(item);
          return (
            <div key={index}>
              <div className='col-md-4' style={{padding:"initial"}}>
                <div className="card mb-3" style={{ maxWidth: "540px" ,overflow:"hidden"}}>
                  <div className="row ">

                    <div className="col-md-4" style={{ padding: "initial" }}>
                      <img src={item.image} className="card-img" alt="..." style={{ width: "-webkit-fill-available", height: "auto" }} />
                    </div>
                    <div className="col-md-8" style={{ padding: "initial" }}>
                      <div className="card-body" style={{ padding: "initial" }}>
                        <h5 className="card-title" style={{paddingLeft: "20px",}}>

                          <div className='article-desc' style={{ width:"100%",padding:"10px", background: "white" }}>
                            <h5> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.title}</a></h5>
                            <p className='size'><span>BY</span> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}><strong>{item.authored_by}</strong></a>
                              <span> / </span><span>{item.created_at}</span> </p>
                          </div>
                        </h5></div>
                    </div>

                  </div>
                </div><br />
              </div>
            </div>
          )
        })}




        {props.dataObject?.locations?.AllTimeBestArticle.slice(0, 1).map((item, index) => {
          // console.log(item);
          return (
            <div key={index}>
              <div className='col-md-4' style={{padding:"initial"}}>
                <div className="card mb-3" style={{ maxWidth: "540px" , overflow:"hidden"}}>
                  <div className="row no-gutters">

                    <div className="col-md-4" style={{ padding: "initial" }}>
                      <img src={item.image} className="card-img" alt="..." style={{ width: "-webkit-fill-available", height: "135px" }} />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body" style={{ padding: "initial" }}>
                        <h5 className="card-title" style={{paddingLeft:"10px"}}>

                          <div className='article-desc' style={{ padding: "10px", background: "white", width:"100%" }}>
                            <h5> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.title}</a></h5>
                            <p className='size'><span>BY</span> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}><strong>{item.authored_by}</strong></a>
                              <span> / </span><span>{item.created_at}</span> </p>
                          </div>
                        </h5></div>
                    </div>

                  </div>
                </div><br />
              </div>
            </div>
          )
        })}
      </div>
      )}
    </>
  )
}

export default AllTimeBest