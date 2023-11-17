import React from 'react'
import { useNavigate } from "react-router-dom";

function SidePostTechnology(props) {
    const navigate = useNavigate();
    const handleNavigation = (item) => {
        // console.log(item);

        navigate(`/${item.category}/${item.url}`, { state: { item } });
    }
    return (
        <div>

            <div className='col-md-11'>
                <h3 style={{ marginBottom: "17px" }}><b className='post-Widget'>Post Widget</b></h3>
                {/* <div className='col-md-12'> */}
                    {props.dataObject?.locations?.TecGeneral.slice(4, 5).map((item, index) => {
                        // console.log(item);
                        return (
                            <div key={index}>
                                <div className='col-md-12' onClick={() => handleNavigation(item, index)}>
                                <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>
                                <img src={item.image} alt='post-img' style={{ width: "-webkit-fill-available"}} />
                                </a>
                                </div>
                                <div className='col-md-12 post-title' onClick={() => handleNavigation(item, index)}>
                                    <h4> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.title}</a></h4>
                                    <p><span >BY</span> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.authored_by}</a></p>

                                </div>

                            </div>
                        )
                    })}
                </div>

            {/* </div> */}

        </div>
    )
}

export default SidePostTechnology