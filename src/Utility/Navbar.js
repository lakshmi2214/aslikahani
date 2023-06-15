import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";
import logosmall from "../images/logo-small.jpg"; 

import { useState, useEffect } from "react";

function Navbar(){
const [data,setData] = useState([])

useEffect(()=>{
    const url = "https://newsbackend-388608.as.r.appspot.com/api/v1/category/list"
    fetch(url).then(res => res.json())
    .then(res => setData(res))
    .catch(err => setData(err))
},[])

    return(
        <>
     <div  className="backgroundMenu" >
          
     <Link to = {"/home"}><img src={logosmall} style={{height:"50px",width:"220px",paddingRight:"50px",paddingTop:"5px"}}/>
</Link>   
{data.categories?.slice(0,1).map((item,index)=>{
     console.log(item);
return(
    
 <div key={index} className="nav">  




<Link to={"/home"}  style={{color:"black",textDecoration:"none"}}>{item.name}</Link>
</div>
)    
})}

{data.categories?.slice(7,8).map((item,index)=>{
     console.log(item);
return(
    
 <div key={index} className="nav">   
<Link to={"/entertainment"} style={{color:"black",textDecoration:"none"}}>{item.name}</Link>
</div>
)    
})}



{data.categories?.slice(6,7).map((item,index)=>{
     console.log(item);
return(
    
 <div key={index} className="nav">   
<Link to={"/education"} style={{color:"black",textDecoration:"none"}}>{item.name}</Link>
</div>
)    
})}

{data.categories?.slice(5,6).map((item,index)=>{
     console.log(item);
return(
    
 <div key={index} className="nav">   
<Link to={"/technology"} style={{color:"black",textDecoration:"none"}}>{item.name}</Link>
</div>
)    
})}

{data.categories?.slice(4,5).map((item,index)=>{
     console.log(item);
return(
    
 <div key={index} className="nav">   
<Link to={"/business"} style={{color:"black",textDecoration:"none"}}>{item.name}</Link>
</div>
)    
})}

{data.categories?.slice(3,4).map((item,index)=>{
     console.log(item);
return(
    
 <div key={index} className="nav">   
<Link to={"/travel"} style={{color:"black",textDecoration:"none"}}>{item.name}</Link>
</div>
)    
})}

{data.categories?.slice(2,3).map((item,index)=>{
     console.log(item);
return(
    
 <div key={index} className="nav">   
<Link to={"/lifestyle"} style={{color:"black",textDecoration:"none"}}>{item.name}</Link>
</div>
)    
})}

{data.categories?.slice(1,2).map((item,index)=>{
     console.log(item);
return(
    
 <div key={index} className="nav">   
<Link to={"/artandculture"} style={{color:"black",textDecoration:"none"}}>{item.name}</Link>
</div>
)    
})}



</div>      

</>
    )
}
 export default Navbar;