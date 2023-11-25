import React from 'react'
import { useNavigate } from "react-router-dom";

function Articles(props) {
    const navigate = useNavigate();
    const handleNavigation = (item) => {
       // console.log(item);
 
       navigate(`/${item.category}/${item.url}`, { state: { item } });
    }
 
    const national = props.dataObject;
  return (
    <div>

<div className='posts'>
    <div className='title-article'>
    <h3><span>
        Articles</span></h3></div>
                <div className='col-md-6 ' style={{padding:"5px"}}>
              
                     {national?.locations?.NationalNews.slice(0, 2).map((item, index) => {

                        return (
                             <div key={index}> 
                                <div className='article-image zoom-in' onClick={() => handleNavigation(item, index)}>
                                    <div  onClick={() => handleNavigation(item, index)}> 
                                    <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>
                                        <img src={item.image} alt='img1' style={{ width: "-webkit-fill-available", height: "180px" }} />
                                    </a>
                                    <div className='col-md-12 article-desc' style={{padding: "initial"}}>
                                        <h5> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.title}</a></h5>
                                        <p>BY <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.authored_by}</a></p>
                                    </div>
                                    </div>
                                   
                                </div> 
                             </div>
                        )
                    })}
                </div>
                <div className='col'>
                    <div className='col-md-6' style={{padding:"5px"}}>
                     {national?.locations?.NationalNews.slice(2,4).map((item, index) => {
                            return (
                                <div key={index}>
                                    <div className='article-image zoom-in'>
                                        {/* <div className='zoom-in'> */}
                                        <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>
                                            <img src={item.image} alt='img1' style={{ width: "-webkit-fill-available" , height:"180px"}} />
                                        </a>
                                        {/* </div> */}
                                        <div className='col-md-12 article-desc' style={{padding: "initial"}}>
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

export default Articles