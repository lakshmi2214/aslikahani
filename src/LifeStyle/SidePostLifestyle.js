import React from 'react'
import { useNavigate } from "react-router-dom";

function SidePostLifestyle(props) {
    const navigate = useNavigate();
    const handleNavigation = (item) => {
        // console.log(item);

        navigate(`/${item.category}/${item.url}`, { state: { item } });
    }
    return (
        <div>
 <div className='col-md-11'>
            <div className='title-article' style={{paddingLeft:"3px"}}>
					<h3><span>Post Widget</span></h3></div>
                    {props.dataObject?.locations?.LifestyleGeneral.slice(4, 5).map((item, index) => {
                        return (
                            <div key={index}>
                                <div className='col-md-12' onClick={() => handleNavigation(item, index)} style={{padding:"5px"}}>
                                <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>
                                <img src={item.image} alt='post-img' style={{ width: "-webkit-fill-available"}} />
                                </a>
                                </div>
                                <div className='col-md-12 post-title' onClick={() => handleNavigation(item, index)} style={{padding:"5px"}}>
                                    <h4> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.title}</a></h4>
                                    <p><span >BY</span> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.authored_by}</a></p>

                                </div>

                            </div>
                        )
                    })}
                </div>

        </div>
    )
}

export default SidePostLifestyle