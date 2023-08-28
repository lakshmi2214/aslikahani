import React from 'react';
import HTMLFlipBook from "react-pageflip";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Flipbook.css";
import logosmall from "../../images/logo-small.jpg";

function Flipbook() {
    
    const location = useLocation();
    const [datavalue, setDatavalue] = useState([]);
    useEffect(() => {
        if (location) {
            var urlcomponent = location.pathname.split('/');
            var tmp = urlcomponent[urlcomponent.length - 2];

        }
        const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/emagzines/get?url=${tmp}`
        fetch(url).then(res => res.json())
            .then(res => {
                setDatavalue(res)
                console.log(res)
            })
    }, [])

     
    // var audio = new Audio("../Magzine/Jpeg/page.mp3")
    // const Page = React.forwardRef((props, ref) => {

    //     <div className="page page-cover" ref={ref}>
    //         <p>page header</p>
    //         <p>{props.children}</p>
    //         <p>Page number: {props.number}</p>
    //     </div>

    // });
    
    return (
        <div className='head-box'>

            <div style={{height:"10px", width:"100%"}}> </div>
<div><img src={logosmall} class="rounded mx-auto d-block" alt="logo" style={{height:"50px", width:"250px", marginBottom:"10px"}}/></div>
            <HTMLFlipBook  width={360}
            height={550}
            // maxWidth={1000}
            
>
                {datavalue.map((item, index) => {
                    console.log(item)
                    return (
                     
                            <div key={index} className='box' style={{maxWidth:"100%"}}>

                                <img src={item.images} style={{ height: "550px", width:"360px" }} 
                              />

                            </div>
                       
                    )
                })}

            </HTMLFlipBook>
            <div style={{height:"50px", width:"100%"}}> </div>
        </div>
    )
}
export default Flipbook;