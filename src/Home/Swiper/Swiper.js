import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from "react-router-dom";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import './Swiper.css';

function SwiperCustom({ dataObject }) {
    const navigate = useNavigate();
    const items = dataObject?.locations?.Slider || [];

    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth <= 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    const groupedSlides = [];
    for (let i = 0; i + 6 < items.length; i += 7) {
        const group = [...items.slice(i, i + 6), items[i + 6]];
        groupedSlides.push(group);
    }

    if (isMobile) {
        return (
            <div className="mobile-scroll-wrapper">
                {items.map((item, idx) => (
                    <div
                        key={idx}
                        className="mobile-scroll-tile"
                        style={{ backgroundImage: `url(${item.image})` }}
                        onClick={() => navigate(`/${item.category}/${item.url}`, { state: { item } })}
                    >
                        <div className="text-overlay">{item.title}</div>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <Swiper
            navigation
            spaceBetween={5}
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay: 10000,
                disableOnInteraction: false,
            }}
            speed={4000}
            className="swiper-wrapper-custom"
            modules={[Navigation, Autoplay]}
        >
            {groupedSlides.map((group, index) => (
                <SwiperSlide key={index}>
                    <div className="custom-grid">
                        <div
                            className="feature-tile"
                            style={{ backgroundImage: `url(${group[0]?.image})` }}
                            onClick={() => navigate(`/${group[0]?.category}/${group[0]?.url}`, { state: { item: group[0] } })}
                        >
                            <div className="text-overlay large">{group[0]?.title}</div>
                        </div>
                        <div className="small-grid">
                            {group.slice(1, 7).map((item, idx) => (
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
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default SwiperCustom;
