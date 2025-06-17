

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from "react-router-dom";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules'; // ⬅️ Add Autoplay
import './Swiper.css';

function SwiperCustom(props) {
    const navigate = useNavigate();
    const items = props?.dataObject?.locations?.Slider || [];

    const groupedSlides = [];
    let i = 0;

    while (i + 6 <= items.length) {
        const group = [
            ...items.slice(i, i + 6),  // 6 small items
            items[i + 6]              // 1 big item
        ];
        groupedSlides.push(group);
        i += 7;
    }

    return (
        <Swiper
            navigation
            spaceBetween={5}
            slidesPerView={1}
            loop={true} // ⬅️ Enable loop
            autoplay={{
                delay: 3000,              // ⬅️ Adjust delay as needed
                disableOnInteraction: false,
            }}
            speed={3000} // ⬅️ Smooth transition speed in ms
            className="swiper-wrapper-custom"
            modules={[Navigation, Autoplay]} // ⬅️ Include Autoplay module
        >
            {groupedSlides.map((group, index) => (
                <SwiperSlide key={index}>
                    <div className="custom-grid">
                        <div className="small-grid">
                            {group.slice(0, 6).map((item, idx) => (
                                <div
                                    key={idx}
                                    className="grid-tile"
                                    style={{ backgroundImage: `url(${item.image})` }}
                                    onClick={() => navigate(`/${item.category}/${item.url}`, { state: { item } })}
                                >
                                    <div className="text-overlay">{item.title}</div>
                                </div>
                            ))}
                        </div>
                        <div
                            className="feature-tile"
                            style={{ backgroundImage: `url(${group[6]?.image})` }}
                            onClick={() => navigate(`/${group[6]?.category}/${group[6]?.url}`, { state: { item: group[6] } })}
                        >
                            <div className="text-overlay large">{group[6]?.title}</div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default SwiperCustom;





