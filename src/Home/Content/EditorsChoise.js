import React from 'react'
import { useNavigate } from "react-router-dom";

function EditorsChoise(props) {
  const navigate = useNavigate();
  const handleNavigation = (item) => {
    // console.log(item);

    navigate(`/${item.category}/${item.url}`, { state: { item } });
  }
  return (
    <>
      <span style={{ color: "white" }}>B</span>
      <div class="col-md-12" style={{ paddingLeft: "4%", paddingRight: "4%" }}  >
        <div className='title-article'>
          <h3><span>Editor's Choice</span></h3>
        </div><br />
        {props.dataObject?.locations?.AdminChoice.slice(0, 3).map((item, index) => {
          return (
            <div key={index}>
              <div className='col-md-4'>
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
      {/* </div> */}
    </>
  )
}

export default EditorsChoise