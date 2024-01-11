import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

function TrendingArticles(props) {
    const [isMobile, setIsMobile] = useState(false);
    const navigate = useNavigate();
    const handleNavigation = (item) => {

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

            <div className='col-md-12' style={{padding:"initial"}}>
                <div className='title-article' style={{paddingLeft:"0px"}}>
                    <h3><span>Trending Articles</span></h3>
                </div>
                {props.dataObject?.locations?.TrendingNews.slice(0, 1).map((item, index) => {
                    return (
                        <div key={index}>
                            <div className='zoom-in'>
                                <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>

                                    <img src={item.image} alt='bigimage' style={{ width: "-webkit-fill-available" }} />
                                </a></div>
                            <div className='article-desc' style={{ padding: "initial", borderBottom: "1px solid #e2e2e2" }}>
                                <h5> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.title}</a></h5>
                                <p className='size'><span>BY</span> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}><strong>{item.authored_by}</strong></a>
                                    <span> / </span><span>{item.created_at}</span> </p>
                            </div>
                        </div>
                    )
                })}<br />

                <div className='col-md-12 mobile-view' style={{padding:"initial"}}>
                    <div className='row'>
                        <div className='col-md-6' style={{padding:"initial"}}>
                           
                            {props.dataObject?.locations?.TrendingNews.slice(1, 4).map((item, index) => {

                                return (
                                    <div key={index} onClick={() => handleNavigation(item, index)} >
                                        <div className='col-md-12' style={{borderBottom:"1px dotted #e5dfdf"}}>
                                        
                                        <div className='col-md-4' style={{ padding: "initial"}}>

                                            <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>
                                                <img src={item.image} style={{ width: "100%", height:"100px", padding:"5px" }} alt='popular-img' />
                                            </a>
                                        </div>
                                        {/* <div className='border'> */}
                                        <div className='col-md-8' style={{padding:"0px", position:"relative", right:"-5px"}} >
                                            <div className='article-desc'>
                                                <h5> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url} style={{ fontSize: "14px" }}>{item.title}</a></h5>
                                            </div>
                                        </div>
                                        </div>
                                        {/* </div> */}
                                    </div>
                                )
                            })}
                            
                        </div>
                        <div className='col-md-6' style={{padding:"initial"}}>
                            {props.dataObject?.locations?.TrendingNews.slice(4, 7).map((item, index) => {

                                return (
                                    <div key={index} onClick={() => handleNavigation(item, index)} >
                                         <div className='col-md-12' style={{borderBottom:"1px dotted #e5dfdf"}}>
                                        <div className='col-md-4' style={{ padding: "initial" }}>

                                            <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>
                                                <img src={item.image} style={{ width: "100%" , height:"100px", padding:"5px"}} alt='popular-img' />
                                            </a>
                                        </div>
                                        {/* <div className='border'> */}
                                        <div className='col-md-8' style={{position:"relative",padding:"0px", right:"-5px", marginTop:"10px"}} >
                                            <div className='article-desc'>
                                                <h5> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url} style={{ fontSize: "13px" }}>{item.title}</a></h5>
                                            </div>
                                        {/* </div> */}
                                        </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    </div>



                </div>


            </>
            )
}

            export default TrendingArticles