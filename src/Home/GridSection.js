import React from 'react'
import { useNavigate } from "react-router-dom";
import "./grid.css"
import sidebanner from "../images/banner2.jpg"

function GridSection(props) {
    const navigate = useNavigate();
    const handleNavigation = (item) => {
        console.log(item);

        navigate(`/${item.category}/${item.url}`, { state: { item } });
    }

    const grid = props.dataObject;
    return (
        <div>
            {/* <div className='col-md-1'>
                <div className='banner-fixed'>
                <img src={sidebanner} alt='banner1' style={{ width: "-webkit-fill-available" }} />
            </div></div> */}
            <div className="col-md-12 full-width">
            {/* <div className="col-md-1"></div> */}
                <div className='posts'>

                    <div className='col-md-6' style={{ padding: "2px", border: "1px solid white" }}>
                        {grid?.locations?.Slider.slice(0, 1).map((item, index) => {


                            console.log(item);
                            return (
                                <div key={index}>

                                    <div className='article-img'>
                                        <img src={item.image} alt='img1' style={{ width: "-webkit-fill-available", height: "363px" }} />
                                    </div><div className='col-md-12 bottom-left' >
                                        <h4> <a href=''>{item.title}</a></h4>
                                        <p><a href="">{item.created_at} </a></p>

                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className=''>
                        <div className='col-md-6'>
                            <div className='row' >
                                {grid?.locations?.Slider.slice(1, 3).map((item, index) => {
                                    console.log(item);
                                    return (

                                        <div key={index}>
                                            <div className='col-md-6' style={{ padding: "2px" }}>
                                                <div className='article-img' style={{}}>
                                                    <img src={item.image} alt='img1' style={{ width: "-webkit-fill-available", height: "180px" }} />
                                                </div>
                                                <div className='col-md-12 bottom-left' >
                                                    <h4> <a href=''>{item.title}</a></h4>
                                                    <p><a href="">{item.created_at} </a></p>
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

                                        <div key={index}>
                                            <div className='col-md-6' style={{ padding: "2px" }}>
                                                <div className='article-img'>
                                                    <img src={item.image} alt='img1' style={{ width: "-webkit-fill-available", height: "180px" }} />
                                                </div>
                                                <div className='col-md-12 bottom-left' >
                                                    <h4> <a href=''>{item.title}</a></h4>
                                                    <p><a href="">{item.created_at} </a></p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                                {/* <div className='col-md-6' style={{ border: "1px solid black" }}>4
                           </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className='col-md-1'>
            <div className='banner-fixed'>
                <img src={sidebanner} alt='banner1' style={{ width: "-webkit-fill-available" }} />
            </div>
            </div> */}
        </div>
    )
}

export default GridSection