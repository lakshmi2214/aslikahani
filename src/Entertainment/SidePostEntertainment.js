import React from 'react'
import { useNavigate } from "react-router-dom";

function SidePostEntertainment(props) {
    const navigate = useNavigate();
    const handleNavigation = (item) => {
        // console.log(item);

        navigate(`/${item.category}/${item.url}`, { state: { item } });
    }
    return (
        <>

            {/* <div className='col-md-11'>
                <div className='title-article'>
                    <h3><span>Post Widget</span></h3></div>
                {props.dataObject?.locations?.General.slice(4, 5).map((item, index) => {
                    return (
                        <div key={index}>
                            <div className='col-md-12' onClick={() => handleNavigation(item, index)} style={{ padding: "5px" }}>
                                <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>
                                    <img src={item.image} alt='post-img' style={{ width: "-webkit-fill-available" }} />
                                </a>
                            </div>
                            <div className='col-md-12 post-title' onClick={() => handleNavigation(item, index)}>
                                <h4> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.title}</a></h4>
                                <p><span >BY</span> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.authored_by}</a></p>

                            </div>

                        </div>
                    )
                })}
            </div> */}
            <div className='popular-heading'>
                    <h3><span>Post Widget</span></h3></div>
            <div className='row row-gap-4' >
                {props.dataObject?.locations?.General.slice(4, 5).map((item, index) => {
                    return (
                        <div key={index} className='col-md-12 col-12'>
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
            </div>


        </>
    )
}

export default SidePostEntertainment