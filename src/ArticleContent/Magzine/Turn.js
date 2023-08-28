// import React from 'react';
// import HTMLFlipBook from "react-pageflip";
// import one from "./Jpeg/02.jpg"
// import two from "./Jpeg/03.jpg"
// import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";

// function Turn(){
//   const location = useLocation();
//   const [datavalue, setDatavalue] = useState([]);
//   useEffect(() => {
//       if (location) {
//           var urlcomponent = location.pathname.split('/');
//           var tmp = urlcomponent[urlcomponent.length - 2];

//       }
//       const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/emagzines/get?url=${tmp}`
//       fetch(url).then(res => res.json())
//           .then(res => {
//               setDatavalue(res)
//               console.log(res)
//           })
//   }, [])
//   const Page = React.forwardRef((props, ref) => {
//     return (
//       <div className="demoPage" ref={ref}> 
       
//         <p>{props.children}</p>
//         <p>Page number: {props.number}</p>
//       </div>
//     );
//   });

//   return(
//     <>
//      <HTMLFlipBook width={300} height={500} >
//       {datavalue.map((item,index)=>{
//         console.log(item)
//         return(
//           <div key={index}></div>
//         )
//       })}
//      <Page number="1"> <div style={{border:"2px solid red", height:"300px"}}><img src={one} style={{height:"381px"}}/></div></Page>
//       <Page number="2" ><div style={{border:"2px solid red", height:"300px"}}><img src={two} style={{height:"381px"}}/></div></Page>
//       <Page number="3" style={{border:"2px solid red"}}>Page text</Page>
//       <Page number="4" style={{border:"2px solid red"}}>Page text</Page>
//     </HTMLFlipBook>
//     </>
//   )
// }
// export default Turn;