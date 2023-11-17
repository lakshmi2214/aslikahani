import React from 'react'
import { useNavigate } from 'react-router-dom';

function SidePopular(props) {
  const navigate = useNavigate();
  const handleNavigation = (item) => {
    // console.log(item);

    navigate(`/${item.category}/${item.url}`, { state: { item } });
  }
  return (
    <div>
      <br />
      <div className='col-md-12'>
        <div className='text-center col-md-11' style={{ height: "35px", padding: "8px", backgroundColor: "#d32415", color: "white", cursor: "default" }}>POPULAR</div>
        {/* <div className='col-md-12'></div> */}
        <table className="table">
          <thead>
            {/* <br/> */}
            <tr className="col-md-11">
              {props.dataObject?.locations?.TravelGeneral.slice(1, 5).map((item, index) => {
                // console.log(item);
                return (
                  <div key={index} className='table-box'  onClick={() => handleNavigation(item, index)}>
                   <th scope="col-md-4">
                      <img src={item.image} style={{ width: "100px", height: "85px", padding: "5px" }} alt='popular-img' />
                    </th>
                    <th scope="col-md-8">
                      <div style={{ position: "relative", top: "-25px", padding:"5px"}}>
                        <h5 className='text-left' style={{ letterSpacing: "1px", lineHeight: "17px" }}>  {item.title}</h5>
                        <h5> {item.created_at}</h5>
                      </div>

                    </th>

                  </div>

                )
              })}
            </tr>
          </thead>
        </table>
      </div>
    </div>

  )
}

export default SidePopular