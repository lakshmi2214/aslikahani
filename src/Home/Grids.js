import React from 'react'
import './article.css'
import sidebanner from "../images/banner2.jpg"
import { useNavigate } from "react-router-dom";
import "./grid.css"
import { Container, Row, Col } from 'react-bootstrap';

function Grids(props) {
  const navigate = useNavigate();
  const handleNavigation = (item) => {
      console.log(item);

      navigate(`/${item.category}/${item.url}`, { state: { item } });
  }

  const grid = props.dataObject;


  return (
    <>
    
    <div className='container-fluid'>
      <div className='row'>
        <div className="col-md-10">
        <div className='posts' style={{height:"370px"}}>

<div className='col-md-6' style={{ padding: "2px"}}>
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
    <div className='col-md-6' >
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
          <div className='col-md-1' >
      
          <div className="banner-fixed"  style={{ width: "90px" }}>
            <span>
                <img src={sidebanner} alt='banner1' style={{width:"-webkit-fill-available"}} />
           </span>
           </div>
           </div>
      </div>
    </div>
    
    </>
  )
}

export default Grids