import React from "react";
import { useNavigate } from "react-router-dom";

function Grid(props) {

  const navigate = useNavigate();
  const handleNavigation = (item) => {
   console.log(item);

    navigate(`/${item.category}/${item.url}`, { state: {item} });
  }

   const grid =  props.dataObject;
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
                                    

   {grid?.locations?.Slider.slice(0,1).map((item,index)=>{
         
         
            console.log(item);
            return(
         <div key={index}>  
         
    <div className="post-content"  >
    <div className="catname"></div>
    <h5> <a href={process.env.REACT_APP_DOMAIN_NAME+'/'+item.category+'/'+item.url}>{item?.title}</a> </h5>
       <ul className="post-tools">
     <li>  {item.created_at} </li>
    </ul>
    </div>
    <div className="post-thumb" onClick={() => handleNavigation(item, index)}>
     <img alt="" src={item.image}  style={{height:"420.5px"}}/> </div>
    </div>
    )})}
</div>
   </div>
</div>


<div className="col-1-4 w-100">
   <div className="wrap-col">
      <div className="grid-item">

      {grid?.locations?.Slider.slice(1,2).map((item,index)=>{
            console.log(item);
            return(

         <div key={index}>
      <div className="post-content" onClick={() => handleNavigation(item, index)}>
        <div className="catname"></div>
     <h5 onClick={() => handleNavigation(item, index)}> <a href={process.env.REACT_APP_DOMAIN_NAME+'/'+item.category+'/'+item.url}>{item.title}</a> </h5>
      <ul className="post-tools" onClick={() => handleNavigation(item, index)}>
        <li> {item.created_at} </li>
       </ul>
     </div><a href={item.url}>
     <div className="post-thumb grid-thumb" onClick={() => handleNavigation(item, index)}> <img alt="" src={item.image} /></div></a> 
      </div>
     )})}
   
</div>
</div>


   <div className="wrap-col"style={{marginTop:"0.5%"}}>
      <div className="grid-item">
      {grid?.locations?.Slider.slice(2,3).map((item,index)=>{
            console.log(item);
            return(

          <div key={index}> 
         <div className="post-content" onClick={() => handleNavigation(item, index)}>
            <div className="catname"></div>
      <h5 onClick={() => handleNavigation(item, index)}> <a href={process.env.REACT_APP_DOMAIN_NAME+'/'+item.category+'/'+item.url}>{item.title}</a> </h5>
         <ul className="post-tools">
            <li onClick={() => handleNavigation(item, index)}>  {item.created_at} </li>
                 </ul>
         </div><a href={item.url}>
      <div className="post-thumb grid-thumb" onClick={() => handleNavigation(item, index)}> <img alt="" src={ item.image } /> </div>
      </a> </div>
      )})}
     

</div>
   </div> 
</div>

<div className="col-1-4">
   <div className="wrap-col">
      <div className="grid-item">
     {grid?.locations?.Slider.slice(3,4)?.map((item,index)=>{

     
            console.log(item);
            return(

             <div key={index}> 
         <div className="post-content" onClick={() => handleNavigation(item, index)} >
          <div className="catname"></div>
          <h5 onClick={() => handleNavigation(item, index)}> <a href={process.env.REACT_APP_DOMAIN_NAME+'/'+item.category+'/'+item.url}>{item.title}</a> </h5>
            <ul className="post-tools">
             <li onClick={() => handleNavigation(item, index)}> {item.created_at} </li>
            </ul>
         </div><a href={item.url}>
         <div className="post-thumb grid-thumb" onClick={() => handleNavigation(item, index)}> <img alt="" src={item.image} /> </div>
        </a> </div>
         )})}
     </div>
   </div>


<div className="wrap-col"style={{marginTop:"0.5%"}}>
 <div className="grid-item">
  
 {grid?.locations?.Slider.slice(5,6).map((item,index)=>{
            console.log(item);
            return(

          <div key={index}> 
      <div className="post-content" onClick={() => handleNavigation(item, index)}>
         <div className="catname"></div>
            <h5 onClick={() => handleNavigation(item, index)}> <a href={process.env.REACT_APP_DOMAIN_NAME+'/'+item.category+'/'+item.url}>{item.title}</a> </h5>
               <ul className="post-tools">
                  <li onClick={() => handleNavigation(item, index)}>{item.created_at}</li>
              </ul>
         </div><a href={item.url}>
           </a> <div className="post-thumb grid-thumb" onClick={() => handleNavigation(item, index)}> <img alt="" src={item.image} /></div>
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