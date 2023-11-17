import React from 'react'
import { useNavigate } from "react-router-dom";
import "./grid.css"

function GridSection(props) {
    const navigate = useNavigate();
    const handleNavigation = (item) => {
        console.log(item);

        navigate(`/${item.category}/${item.url}`, { state: { item } });
    }

    const grid = props.dataObject;
    return (
        <div>
            <div className="col-md-12 full-width">
                <div className='posts'>
                    <div className='col-md-6 ' style={{ border: "1px solid red", padding: "0px" }}>
                        {grid?.locations?.Slider.slice(0, 1).map((item, index) => {


                            console.log(item);
                            return (
                                <div key={index}>

                                    <div className='article-img'>
                                        <img src={item.image} alt='img1' style={{ width: "-webkit-fill-available", height: "420px" }} />
                                        <div className='col-md-12 article-description' >
                                            <h5> <a>{item.title}</a></h5>
                                            <p><a href="">{item.created_at} </a></p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='col'>
                        <div className='col-md-6' style={{ border: "1px solid red" }}>
                            <div className='row' style={{ border: "1px solid black" }}>
                                {grid?.locations?.Slider.slice(1, 3).map((item, index) => {
                                    console.log(item);
                                    return (

                                        <div key={index}>
                                            <div className='col-md-6' style={{ border: "1px solid black", padding: "0px" }}> <img src={item.image} alt='img1' style={{ width: "-webkit-fill-available", height:"210px"}} />
                                                <div className='col-md-12 article-description' >
                                                    <h5> <a>{item.title}</a></h5>
                                                    <p><a href="">{item.created_at} </a></p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                                {/* <div className='col-md-6' style={{ border: "1px solid black" }}>2
                                </div> */}
                            </div>
                            <div className='row' style={{ border: "1px solid black" }}>
                            {grid?.locations?.Slider.slice(1, 3).map((item, index) => {
                                    console.log(item);
                                    return (

                                        <div key={index}>
                                <div className='col-md-6' style={{ border: "1px solid black", padding: "0px" }}> <img src={item.image} alt='img1' style={{ width: "-webkit-fill-available",height:"210px"}} />
                                                <div className='col-md-12 article-description' >
                                                    <h5> <a>{item.title}</a></h5>
                                                    <p><a href="">{item.created_at} </a></p>
                                                </div>
                                            </div>
                                
                                </div>
                                    )})}
                                {/* <div className='col-md-6' style={{ border: "1px solid black" }}>4
                                </div> */}
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default GridSection