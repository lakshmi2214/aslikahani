import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function SideAdd1(props) {
  return (
    <>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          {props.addObject?.categories?.slice(0, 1).map((item) => {
            return (
              item.advertisements.TopPosterAd2?.slice(0, 1).map((item, index) => {
                //  console.log(item)

                return (
                  <div key={index}>

                    <div className="col-md-12">
                      <div className="slider-adds">
                        <a href={item.url} target='blank'>
                          <img style={{ width: "100%", height: "100%" }} src={item.image} />
                        </a>
                        <div className="article-desc">
                          <h4>
                            <a href={item.url} target='blank'>{item.description}</a>
                          </h4>
                        </div>
                      </div>
                    </div>

                  </div>

                )
              }))
          })}
        </SwiperSlide>
        <SwiperSlide>
          {props.addObject?.categories?.slice(0, 1).map((item) => {
            return (
              item.advertisements.TopPosterad1?.slice(0, 1).map((item, index) => {
                //  console.log(item)
                return (
                  <div key={index}>
                    <div className="col-md-12">
                      <div className="slider-adds">
                        <a href={item.url} target='blank'>
                          <img style={{ width: "100%", height: "100%" }} src={item.image} />
                        </a>
                        <div className="article-desc">
                          <h4>
                            <a href={item.url} target='blank'>{item.description}</a>

                          </h4> <br />
                        </div>
                      </div>
                    </div>
                  </div>

                )
              }))
          })}

        </SwiperSlide>
      </Swiper>

    </>
  )
}

export default SideAdd1