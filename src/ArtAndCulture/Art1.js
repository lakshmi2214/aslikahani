import React from 'react'
import { useNavigate } from 'react-router-dom';

function Art1(props) {
    const navigate = useNavigate()
    const handleNavigation = (item) => {
        // console.log(item);

        navigate(`/${item.category}/${item.url}`, { state: { item } });
    }
    return (
        <div>

            <div className='posts'>
                <div className='col-md-6 '>
                {props.dataObject?.locations?.ArtCultureGeneral.slice(0,2).map((item, index) => {
                    //  console.log(item);
                        return (
                            <div key={index}>
                                <div className='article-image' onClick={() => handleNavigation(item, index)}>
                                    {/* <div  onClick={() => handleNavigation(item, index)}>  */}
                                    <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>
                                        <img src={item.image} alt='img1' style={{ width: "-webkit-fill-available", height: "260px" }} />
                                    </a>
                                    {/* </div> */}
                                    <div className='col-md-12 article-desc' style={{  height: "90px" }}>
                                        <h5> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.title}</a></h5>
                                        <p>BY <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.authored_by}</a></p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
                <div className='col'>
                    <div className='col-md-6'>
                        {props.dataObject?.locations?.ArtCultureGeneral.slice(2, 4).map((item, index) => {
                            // console.log(item);
                            return (
                                <div key={index}>
                                    <div className='article-image'>
                                        <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>
                                            <img src={item.image} alt='img1' style={{ width: "-webkit-fill-available", height: "260px" }} />
                                        </a>
                                        <div className='col-md-12 article-desc' style={{height: "90px" }}>
                                            <h5 className="w-100 text-justify">
                                                 <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.title}</a></h5>
                                            <p className="w-100">BY <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.authored_by} </a></p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Art1

// style={{ border: "1px solid red", width:"100%"}}