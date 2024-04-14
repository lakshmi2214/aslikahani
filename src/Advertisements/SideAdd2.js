import React from 'react'

function SideAdd2(props) {
  return (
    <>
      <div className="col-md-12" style={{ padding: "5px" }}>
        {props.addObject?.categories?.slice(0, 1).map((item) => {
          return (
            item.advertisements.TopPosterAd2?.slice(0, 1).map((item, index) => {
              //  console.log(item)

              return (
                <div key={index}>


                  <div className="slider-adds">
                    <a href={item.url} target='blank'>
                      <img className='img-fluid' src={item.image} alt='side-img' />
                    </a>
                    <div className="article-desc-small">
                      <h4>
                        <a href={item.url} target='blank'>{item.description}</a>

                      </h4>
                    </div>
                  </div>


                </div>

              )
            }))
        })}
      </div>
    </>
  )
}

export default SideAdd2