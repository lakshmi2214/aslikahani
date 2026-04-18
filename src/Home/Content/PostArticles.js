import React from 'react';
import { useNavigate } from "react-router-dom";
// import { EffectFlip, Pagination, Navigation } from 'swiper/modules';


function PostArticles(props) {
  const navigate = useNavigate();
  return (
    <>
      {/* <div className='col-md-12' style={{ padding: "initial" }}>
        <div className='popular-heading' >
          <h5>Post Widget</h5>
        </div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            {props.dataObject?.locations?.SliderWidget.slice(2, 3).map((item, index) => {
              return (
                <div key={index}>

                  <div className="col-md-12" style={{ padding: "initial" }}>
                    <div className="slider-adds">
                      <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url} target='blank'>
                        <img className='img-fluid' src={item.image} />
                      </a>
                      <div className='article-desc' >
                        <h5> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.title}</a></h5>
                        <p className='size'><span>BY</span> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}><strong>{item.authored_by}</strong></a>
                          <span> / </span><span>{item.created_at}</span> </p>
                      </div>
                    </div>
                  </div>

                </div>
              )
            })}
          </SwiperSlide>
          <SwiperSlide>
            {props.dataObject?.locations?.SliderWidget.slice(1, 2).map((item, index) => {
              return (
                <div key={index}>

                  <div className="col-md-12" style={{ padding: "initial" }}>
                    <div className="slider-adds">
                      <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url} target='blank'>
                        <img style={{ width: "100%", height: "100%" }} src={item.image} />
                      </a>
                      <div className='article-desc' >
                        <h5> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.title}</a></h5>
                        <p className='size'><span>BY</span> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}><strong>{item.authored_by}</strong></a>
                          <span> / </span><span>{item.created_at}</span> </p><br />
                      </div>
                    </div>
                  </div>
                </div>

              )
            })}

          </SwiperSlide>
          <SwiperSlide>
            {props.dataObject?.locations?.SliderWidget.slice(3, 4).map((item, index) => {
              return (
                <div key={index}>

                  <div className="col-md-12" style={{ padding: "initial" }}>
                    <div className="slider-adds">
                      <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url} target='blank'>
                        <img style={{ width: "100%", height: "100%" }} src={item.image} />
                      </a>
                      <div className='article-desc' >
                        <h5> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.title}</a></h5>
                        <p className='size'><span>BY</span> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}><strong>{item.authored_by}</strong></a>
                          <span> / </span><span>{item.created_at}</span> </p><br />
                      </div>
                    </div>
                  </div>
                </div>

              )
            })}

          </SwiperSlide>
          <SwiperSlide>
            {props.dataObject?.locations?.SliderWidget.slice(4, 5).map((item, index) => {
              return (
                <div key={index}>

                  <div className="col-md-12" style={{ padding: "initial" }}>
                    <div className="slider-adds">
                      <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url} target='blank'>
                        <img style={{ width: "100%", height: "100%" }} src={item.image} />
                      </a>
                      <div className='article-desc' >
                        <h5> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.title}</a></h5>
                        <p className='size'><span>BY</span> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}><strong>{item.authored_by}</strong></a>
                          <span> / </span><span>{item.created_at}</span> </p><br />
                      </div>
                    </div>
                  </div>
                </div>

              )
            })}

          </SwiperSlide>
        </Swiper>
      </div> */}
      <div className="updt-content-wrapper">
        <div className="updt-section">
          <div className='arctl-headings'>
            <h2 className="updt-section-title">Post Articles</h2>
            <button>View All</button>
          </div>
          <div className="updt-articles">
            {props.dataObject?.locations?.SliderWidget.slice(0, 3).map((item, index) => {
              return (
                <a className='mst-anchor' href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>
                  <div key={index} className="updt-article">
                    <div className='updt-artcl'>
                      <img alt="" className="img-fluid" src={item.image} />
                    </div>
                    <div className="updt-article-text">
                      <h3>{item.title}</h3>
                      <p>{item.authored_by}</p>
                      <p>{item.created_at}</p>
                      <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>READ MORE</a>
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default PostArticles