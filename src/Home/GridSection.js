import React from 'react'
import { useNavigate } from "react-router-dom";
import "./grid.css"
// import sidebanner from "../images/banner2.jpg"

function GridSection(props) {
    const navigate = useNavigate();
    const handleNavigation = (item) => {
        // console.log(item);

        navigate(`/${item.category}/${item.url}`, { state: { item } });
    }

    const grid = props.dataObject;
    return (
        <>
            <div className='posts'>
                <div className='row no-gutters row-gap-1'>
                    <div className='col-md-7'>
                        {/* {grid?.locations?.Slider.slice(0, 1).map((item, index) => {
                            return (
                                <div key={index}>
                                    <div className='zoom-in' onClick={() => handleNavigation(item, index)} style={{ cursor: "pointer" }}>
                                        <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url} className='article-img'>
                                            <img src={item.image} alt='img1' style={{ width: "-webkit-fill-available", height: "363px" }} />
                                        </a>
                                    </div><div className='col-md-12 bottom-left' onClick={() => handleNavigation(item, index)}>
                                        <h4> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url} >{item.title}</a></h4>
                                        <p><a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.created_at} </a></p>

                                    </div>
                                </div>
                            )
                        })} */}
                        {grid?.locations?.Slider.slice(0, 1).map((item, index) => {
                            return (
                                <div className='big-left-Img girdImagesHome'>
                                    <div key={index} className='home-image-main' onClick={() => handleNavigation(item, index)}>
                                        <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url} className='img-redirection'>
                                            <img src={item.image} className='img-fluid' alt='img1' />
                                        </a>
                                    </div>
                                    <div className='overlayImg-text' onClick={() => handleNavigation(item, index)}>
                                        <h4> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url} >{item.title}</a></h4>
                                        <p><a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.created_at} </a></p>

                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div className='col-md-5'>
                        <div className='four-card-grid'>
                            <div className='row' >
                                {grid?.locations?.Slider.slice(1, 3).map((item, index) => {
                                    console.log(item);
                                    return (
                                        <div key={index} className='col-md-6' onClick={() => handleNavigation(item, index)}>
                                            <div className='girdImagesHome big-right-Img '>
                                                <div className='home-image-main'>
                                                    <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url} className='img-redirection'>
                                                        <img src={item.image} alt='img1' className='img-fluid' />
                                                    </a>
                                                </div>
                                                <div className='overlayImg-text' >
                                                    <h4> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.title}</a></h4>
                                                    <p><a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.created_at} </a></p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                                {/* <div className='col-md-6' style={{ border: "1px solid black" }}>2
                           </div> */}
                            </div>
                            <div className='row' >
                                {grid?.locations?.Slider.slice(3, 5).map((item, index) => {
                                    console.log(item);
                                    return (


                                        <div key={index} className='col-md-6' onClick={() => handleNavigation(item, index)}>
                                            <div className='girdImagesHome big-right-Img'>
                                                <div className='home-image-main'>
                                                    <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url} className='img-redirection'>
                                                        <img src={item.image} alt='img1' className='img-fluid' />
                                                    </a>
                                                </div>
                                                <div className='overlayImg-text' >
                                                    <h4> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.title}</a></h4>
                                                    <p><a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.created_at} </a></p>
                                                </div>
                                            </div>
                                        </div>

                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* </div> */}

            {/* <div className="col-md-1 mobile-view" style={{position:"sticky", top:"45px"}}>
        <img src={sidebanner} alt='banner1' style={{ width: "-webkit-fill-available", height:"auto" ,padding:"0px"}} />
        </div> */}
        </>
    )
}

export default GridSection