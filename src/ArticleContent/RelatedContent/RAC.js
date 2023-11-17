// import React from 'react'
// import { useLocation } from 'react-router-dom';
// import SideAdd1 from '../../Advertisements/SideAdd1'
// import SideAdd2 from '../../Advertisements/SideAdd2'

// function RAC() {
//     const [result, setResult] = useState([]);
//     const [value, setvalue] = useState([]);
//     useEffect(() => {
//       const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/articles/list?category=10&format=json`;
//       fetch(url).then(response => response.json())
//         .then(response => {
//           setResult(response)
//         })
//         .catch(error => console.log(error));
//       const url1 = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/category/list`;
//       fetch(url1).then(response => response.json()
//       )
//         .then(response => {
//           setvalue(response)
//         })
//     }, []);
//   return (
//     <>
    
//     <div className='col-md-12 col-xs-12 col-sm-12'>
//         <div className='col-md-8' style={{paddingLeft:"4%"}}>
//           {/* <div className='col' >
//             <Education1 dataObject={result} />
//             <div className='col-md-12' style={{padding: "10px", textAlign: "center" }}>
//               <Add1 addObject={value} />
//             </div>
//             <Education2 dataObject={result} />
//             <div className='col-md-12' style={{ padding: "10px", textAlign: "center" }}>
//               <Add2 addObject={value} />
//             </div>
//             <Education3 dataObject={result} />
            
//           </div> */}fgdhgdchf
//         </div>
        
//         <div className='col-md-4'>

//           <SideAdd1 addObject={value} />
//           {/* <SideAdd2 dataObject={result} /> */}
//           <SideAdd2 addObject={value} />
//           {/* <SidePost dataObject={result} /> */}
//         </div>

//       </div>
    
//     </>
//   )
// }

// export default RAC