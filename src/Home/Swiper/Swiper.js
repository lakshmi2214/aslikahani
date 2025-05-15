import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from "react-router-dom";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import './Swiper.css';

// import required modules
import { Autoplay, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

// export default function SwiperCustom(props) {
function SwiperCustom(props) {
    const navigate = useNavigate();
    const handleNavigation = (item) => {
        // console.log(item);

        navigate(`/${item.category}/${item.url}`, { state: { item } });
    }
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const grid = props.dataObject;
    return (
        <div className='sliderOuter'>
            {/* <Swiper
                cssMode={true}
                navigation={true}
                pagination={{
                    clickable: true,
                  }}
                mousewheel={true}
                keyboard={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                modules={[Autoplay,Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                {grid?.locations?.Slider.map((item, index) => {
                    return (
                        <SwiperSlide>
                            <div className='big-left-Img girdImagesHome'>
                                <div key={index} className='home-image-main mainHightlight' onClick={() => handleNavigation(item, index)}>
                                    <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url} className='img-redirection'>
                                        <img src={item.image} className='img-fluid' alt='img1' />
                                    </a>
                                </div>
                                <div className='overlayImg-text' onClick={() => handleNavigation(item, index)}>
                                    <h4> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url} >{item.title}</a></h4>
                                    <p><a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.created_at} </a></p>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper> */}
            <>
                <div className='swiper-wrapper-custom '>
                    <Swiper
                        cssMode={true}

                        pagination={{
                            clickable: true,
                        }}
                        style={{
                            '--swiper-navigation-color': '#fff',
                            '--swiper-pagination-color': '#fff',
                        }}
                        mousewheel={true}
                        keyboard={true}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[Autoplay,FreeMode, Navigation, Thumbs]}
                        className="mySwiper bigSwiper"
                        loop={true}
                        autoplay={{
                            delay: 11000,
                            disableOnInteraction: false,
                        }}
                    >
                        {grid?.locations?.Slider.map((item, index) => {
                            return (
                                <SwiperSlide>
                                    <div className='big-left-Img girdImagesHome'>
                                        <div key={index} className='home-image-main mainHightlight' onClick={() => handleNavigation(item, index)}>
                                            <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url} className='img-redirection'>
                                                <img src={item.image} className='img-fluid' alt='img1' />
                                            </a>
                                        </div>
                                        <div className='overlayImg-text' onClick={() => handleNavigation(item, index)}>
                                            <h4> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url} >{item.title}</a></h4>
                                            <p><a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.created_at} </a></p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>

                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    loop={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper smallGridswiper"
                >
                    {grid?.locations?.Slider.map((item, index) => {
                        return (
                            <SwiperSlide>
                                <div className='big-left-Img girdImagesHome miniGridSwwiper'>
                                    <div key={index} className='home-image-main mainHightlight'
                                    // onClick={() => handleNavigation(item, index)}
                                    >
                                        <a className='img-redirection'>
                                            <img src={item.image} className='img-fluid' alt='img1' />
                                        </a>
                                    </div>
                                    <div className='overlayImg-text'
                                    // onClick={() => handleNavigation(item, index)}
                                    >
                                        <h4> <a href="javascript:void(0)"  >{item.title}</a></h4>
                                        <p><a href="javascript:void(0)">{item.created_at} </a></p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </>
        </div>
    );
}
export default SwiperCustom
