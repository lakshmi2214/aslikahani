import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Grid() {

  const navigate = useNavigate();
  const handleNavigation = (item) => {
   console.log(item);

    navigate(`/home/${item.url}`, { state: {item} });
  }

   const [data,setData] = useState([])

useEffect(()=>{
    const url = "https://newsbackend-388608.as.r.appspot.com/api/v1/articles/list?category=10&format=json"
    fetch(url).then(res => res.json())
    .then(res => {
    console.log(res)
    setData(res);
   })
    .catch(err => setData(err))
},[])
    return(
        <>
        
        <section className="zerogrid-section">
         <div className="container-fluid">
            <div className="row">
               <div className="col-md-12 col-xs-12 col-sm-12">
                  <div className="zerogrid">
                     <div className="row">
                        <div className="col-2-4">
                           <div className="wrap-col">
                           <div className="grid-item">
                                    

   {data?.locations?.Slider.slice(0,1).map((item,index)=>{
         
         
            console.log(item);
            return(
         <div key={index}>  
         
    <div className="post-content"  onClick={() => handleNavigation(item,index)} >
    <div className="catname"></div>
    <h5> <a href={item.url}> {item.title}</a> </h5>
       <ul className="post-tools">
     <li>  {item.created_at} </li>
    </ul>
    </div><a  href={item.url}>
    <div className="post-thumb" onClick={() => handleNavigation(item, index)}>
     <img alt="" src={item.image}  style={{height:"417px"}}/> </div></a>
    </div>
    )})}
</div>
   </div>
</div>


<div className="col-1-4">
   <div className="wrap-col">
      <div className="grid-item">

      {data?.locations?.Slider.slice(1,2).map((item,index)=>{
            console.log(item);
            return(

         <div key={index}>
      <div className="post-content" onClick={() => handleNavigation(item, index)}>
        <div className="catname"></div>
     <h5 onClick={() => handleNavigation(item, index)}> <a href={item.url}>{item.title}</a> </h5>
      <ul className="post-tools" onClick={() => handleNavigation(item, index)}>
        <li> {item.created_at} </li>
       </ul>
     </div><a href={item.url}>
     <div className="post-thumb" onClick={() => handleNavigation(item, index)}> <img alt="" src={item.image} style={{height:"208px"}}/></div></a> 
      </div>
     )})}
   
</div>
</div>


   <div className="wrap-col">
      <div className="grid-item">
      {data?.locations?.Slider.slice(2,3).map((item,index)=>{
            console.log(item);
            return(

          <div key={index}> 
         <div className="post-content" onClick={() => handleNavigation(item, index)}>
            <div className="catname"></div>
      <h5 onClick={() => handleNavigation(item, index)}> <a href={item.url}>{item.title}</a> </h5>
         <ul className="post-tools">
            <li onClick={() => handleNavigation(item, index)}>  {item.created_at} </li>
                 </ul>
         </div><a href={item.url}>
      <div className="post-thumb" onClick={() => handleNavigation(item, index)}> <img alt="" src={ item.image } style = {{height:"208px"}}/> </div>
      </a> </div>
      )})}
     

</div>
   </div>
</div>


<div className="col-1-4">
   <div className="wrap-col">
      <div className="grid-item">
     {data?.locations?.Slider.slice(3,4)?.map((item,index)=>{

     
            console.log(item);
            return(

             <div key={index}> 
         <div className="post-content" onClick={() => handleNavigation(item, index)}>
          <div className="catname"></div>
          <h5 onClick={() => handleNavigation(item, index)}> <a href={item.url}>{item.title}</a> </h5>
            <ul className="post-tools">
             <li onClick={() => handleNavigation(item, index)}> {item.created_at} </li>
            </ul>
         </div><a href={item.url}>
         <div className="post-thumb" onClick={() => handleNavigation(item, index)}> <img alt="" src={item.image} style ={{height:"208px"}}/> </div>
        </a> </div>
         )})}
     </div>
   </div>


<div className="wrap-col">
 <div className="grid-item">
  
 {data?.locations?.Slider.slice(5,6).map((item,index)=>{
            console.log(item);
            return(

          <div key={index}> 
      <div className="post-content" onClick={() => handleNavigation(item, index)}>
         <div className="catname"></div>
            <h5 onClick={() => handleNavigation(item, index)}> <a href={item.url}>{item.title}</a> </h5>
               <ul className="post-tools">
                  <li onClick={() => handleNavigation(item, index)}>{item.created_at}</li>
              </ul>
         </div><a href={item.url}>
           </a> <div className="post-thumb" onClick={() => handleNavigation(item, index)}> <img alt="" src={item.image} style={{height:"208px"}}/></div>
      </div>
      )})}
     
              
                           </div>
                         </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

     
        </>
    );
}
export default Grid;