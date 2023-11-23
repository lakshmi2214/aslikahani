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
                            <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>

                                <img src={item.image} alt='bigimage' style={{  width: "-webkit-fill-available" }} />
                            </a>
                            <div className='article-desc' style={{ padding: "initial" }}>
                                <h5> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.title}</a></h5>
                                <p className='size'><span>BY</span> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}><strong>{item.authored_by}</strong></a>
                                    <span> / </span><span>{item.created_at}</span> </p>
                            </div>
                        </div>
                    )
                })}
                <table className="col-md-6 table">
                    <thead>
                        <tr className="col">
                            {props.dataObject?.locations?.TrendingNews.slice(1, 4).map((item, index) => {

                                return (
                                    <div key={index} className='table-box' onClick={() => handleNavigation(item, index)} style={{height:"100px",borderBottom:"1px dotted #e5dfdf"}}>
                                        <th scope="col-md-4">
                                            <img src={item.image} style={{ width: "100px", height: "85px", padding: "5px" }} alt='popular-img' />
                                        </th>
                                        <th scope="col-md-8">
                                            {/* <div style={{ position: "relative", top: "-25px", padding:"5px"}}> */}
                                            <div className='article-desc' style={{ position: "relative", top: "-25px" }}>
                                                <h5> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.title}</a></h5>
                                            </div>

                                        </th>

                                    </div>

                                )
                            })}
                        </tr>
                    </thead>
                </table>
                <table className="col-md-6 table">
                    <thead>
                        <tr className="col">
                            {props.dataObject?.locations?.TrendingNews.slice(4, 7).map((item, index) => {

                                return (
                                    <div key={index} className='table-box' onClick={() => handleNavigation(item, index)}  style={{height:"100px",borderBottom:"1px dotted #e5dfdf"}}>
                                        <th scope="col-md-4">
                                            <img src={item.image} style={{ width: "100px", height: "85px", padding: "5px" }} alt='popular-img' />
                                        </th>
                                        <th scope="col-md-8">
                                            <div className='article-desc' style={{ position: "relative", top: "-25px" }}>
                                                <h5> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.title}</a></h5>
                                            </div>

                                        </th>

                                    </div>

                                )
                            })}
                        </tr>
                    </thead>
                </table>
            </div>


        </>
    )
}

export default TrendingArticles