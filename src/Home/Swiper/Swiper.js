import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from "react-router-dom";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Swiper.css';

// import required modules
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

// export default function SwiperCustom(props) {
function SwiperCustom(props) {
    const navigate = useNavigate();
    const handleNavigation = (item) => {
        // console.log(item);

        navigate(`/${item.category}/${item.url}`, { state: { item } });
    }

    const grid = props.dataObject;
    return (
        <div className='sliderOuter'>
            <Swiper
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
            </Swiper>
        </div>
    );
}
export default SwiperCustom
