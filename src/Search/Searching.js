import React from "react";
// import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


function Searching() {
    const location = useLocation();
    const [data, setData] = useState([]);
    const[value, setValue] = useState(""); 
   
    useEffect(() => {
      const tmp = location.pathname.slice(location.pathname.lastIndexOf("/"));
      const Keyword =  tmp.substring(1);
      setValue(Keyword);
        const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/articles/search?param=${Keyword}`
        fetch(url).then(res => res.json())
          .then(res => {
            setData(res)
            // console.log(res)
    
          })
          
      }, [location.pathname])

    return (
        <>
        <div className="row">
         <article className="col-md-12 col-sm-12 col-xs-12" >
               <div className="grid-1" style={{border:"none",marginBottom:"0px"}}>
               <div className='col-md-12 box1'>
               <h4><a href='/'>Home</a><span> / </span><span>
               <a href={process.env.REACT_APP_DOMAIN_NAME+'/search/'+value}>Search</a></span><span> / </span> 
              {value}
               </h4>               
        <h2>{value}</h2>
        <div className="col-md-12 col-sm-12 col-xs-12">
                        <ul className="icon-links">
                           <li><a href=" https://www.facebook.com/aslikahani.in"><i className="ti-facebook"></i> </a></li>
                           <li><a href="https://twitter.com/kahaniasli"><i className="fa-brands fa-twitter"></i></a></li>
                           <li><a href="https://www.youtube.com/@AsliKahani"><i className="fa-brands fa-youtube"></i></a></li>
                           <li><a href=" https://www.instagram.com/aslikahani/"><i className="fa-brands fa-instagram"></i></a></li>

                        </ul>
                     </div>
        <div className="keyword"></div>
               </div>
               <div className="col-md-12" >
  {data.map(item => {
    return (
      <div key={item.id}>
        <div className="col-md-8 search-title">
          <h3>
            <a href={process.env.REACT_APP_DOMAIN_NAME+'/'+item.category+'/'+item.url}>
              {item.title}
            </a>
          </h3>
          <h4> {item.created_at} </h4>
          <p> {item.description} </p>
        </div>
        <div className="col-md-4 " style={{padding:"10px"}}>
          <img src={item.image} alt="search result" style={{width:"-webkit-fill-available"}}/>
        </div>
      </div>
    );
  })}
</div>
              
               </div>
            </article>
            </div>
            {/* <div className="col-md-12" style={{ border: "1px solid red" }}>
  {data.map(item => {
    return (
      <div key={item.id}>
        <div className="col-md-8">
          <h3>
            <a href={process.env.REACT_APP_DOMAIN_NAME+'/'+item.category+'/'+item.url}>
              {item.title}
            </a>
          </h3>
          <h4> {item.created_at} </h4>
          <p> {item.description} </p>
        </div>
        <div className="col-md-4 search-item">
          <img src={item.image} alt="" />
        </div>
      </div>
    );
  })}
</div> */}


        </>
    )
 }
 export default Searching;