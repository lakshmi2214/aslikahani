import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";

function EditorsChoise(props) {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const handleNavigation = (item) => {

    navigate(`/${item.category}/${item.url}`, { state: { item } });
  }
  useEffect(() => {
    const checkMobile = () => {
      const isMobile = window.innerWidth >= 767;
      setIsMobile(isMobile);
    };

    checkMobile();

    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  return (
    <>
      {/* <span style={{ color: "white" }}>B</span> */}
      <div class="col-md-12 mobile-view" style={{ paddingLeft: "8%", paddingRight: "8%" }}  >
        <div className='title-article' style={{paddingLeft:"16px"}}>
          <h3><span>Editor's Choice</span></h3>
        </div><br />
        {props.dataObject?.locations?.AdminChoice.slice(0, 3).map((item, index) => {
          return (
            <div key={index}>
              <div className='col-md-4'>
                <div class="card" style={{ width: "20rem;", border: "1px solid #cfcbcb" }}>
                  <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>
                    <div className='img-hover-zoom'>
                      <img class="card-img-top" src={item.image} alt="Card image cap" style={{ width: "-webkit-fill-available", height:"240px" }} />
                    </div> </a>
                  <div class="card-body">
                    <div className='article-desc' style={{ padding: "5px", background: "white",height:"110px" }}>
                      <h5> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.title}</a></h5>
                      <p className='size'><span>BY</span> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}><strong>{item.authored_by}</strong></a>
                        <span> / </span><span>{item.created_at}</span> </p>
                    </div>{/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                  </div>
                </div><br />
              </div>
            </div>
          )
        })}
      </div>
      {/* </div> */}
      {isMobile ? null : (
         <div class="col-md-12" style={{ padding: "initial" }}  >
         <div className='title-article' style={{paddingLeft:"0px"}}>
           <h3><span>Editor's Choice</span></h3>
         </div><br />
         {props.dataObject?.locations?.AdminChoice.slice(0, 3).map((item, index) => {
           return (
             <div key={index}>
               <div className='col-md-4' style={{ padding: "0px" }} >
                 <div class="card" style={{ width: "20rem;", border: "1px solid #cfcbcb" }}>
                   <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>
                     <div className='img-hover-zoom'>
                       <img class="card-img-top" src={item.image} alt="Card image cap" style={{ width: "-webkit-fill-available" }} />
                     </div> </a>
                   <div class="card-body">
                     <div className='article-desc' style={{ padding: "5px", background: "white",height:"110px" }}>
                       <h5> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.title}</a></h5>
                       <p className='size'><span>BY</span> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}><strong>{item.authored_by}</strong></a>
                         <span> / </span><span>{item.created_at}</span> </p>
                     </div>{/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                   </div>
                 </div><br />
               </div>
             </div>
           )
         })}
       </div>
      )}
    </>
  )
}

export default EditorsChoise