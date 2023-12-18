import React from 'react'
import { useNavigate } from "react-router-dom";

function TrendingArticles(props) {
    const navigate = useNavigate();
    const handleNavigation = (item) => {

        navigate(`/${item.category}/${item.url}`, { state: { item } });
    }

    return (
        <>

            <div className='col-md-12'>
                <div className='title-article'>
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

                <div className='col-md-12'>
                    <div className='row'>
                        <div className='col-md-6' >
                           
                            {props.dataObject?.locations?.TrendingNews.slice(1, 4).map((item, index) => {

                                return (
                                    <div key={index} onClick={() => handleNavigation(item, index)} >
                                        
                                        <div className='col-md-4' style={{ marginTop: "15px", padding: "initial"}}>

                                            <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>
                                                <img src={item.image} style={{ width: "100%" }} alt='popular-img' />
                                            </a>
                                        </div>
                                        <div className='border' style={{borderBottom:"1px dotted #e5dfdf", height:"130px"}}>
                                        <div className='col-md-8' style={{padding:"initial", position:"relative", right:"-5px"}} >
                                            <div className='article-desc'>
                                                <h5> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url} style={{ fontSize: "14px" }}>{item.title}</a></h5>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                )
                            })}
                            
                        </div>
                        <div className='col-md-6' >
                            {props.dataObject?.locations?.TrendingNews.slice(4, 7).map((item, index) => {

                                return (
                                    <div key={index} onClick={() => handleNavigation(item, index)} >
                                        <div className='col-md-4' style={{ marginTop: "15px", padding: "initial" }}>

                                            <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>
                                                <img src={item.image} style={{ width: "100%" }} alt='popular-img' />
                                            </a>
                                        </div>
                                        <div className='border' style={{borderBottom:"1px dotted #e5dfdf", height:"130px"}}>
                                        <div className='col-md-8' style={{position:"relative", right:"-5px", marginTop:"10px"}} >
                                            <div className='article-desc'>
                                                <h5> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url} style={{ fontSize: "13px" }}>{item.title}</a></h5>
                                            </div>
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