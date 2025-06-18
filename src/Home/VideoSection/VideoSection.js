import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './VideoSection.css';

// import required modules
import { FreeMode, Navigation, Pagination, Thumbs, Autoplay, Mousewheel, Keyboard } from 'swiper/modules';

function VideoSection() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [lang, setLanguage] = useState("English")
    const [eachLanguageData, setEachLanguageData] = useState({ shorts: null, videos: null});
    const [allLangData, setAllLangData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const toggleLanguage = (selectedLang) => {
        setLanguage(selectedLang);
        if (selectedLang === "English"){
            setEachLanguageData({ shorts: allLangData.english_shorts, videos: allLangData.english_videos });
        }else{
            setEachLanguageData({ shorts: allLangData.kannada_shorts, videos: allLangData.kannada_videos });
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_HOST}/api/v1/youtube/list`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                console.log(result);
                setAllLangData(result);
                setEachLanguageData({ shorts: result.english_shorts, videos: result.english_videos });
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
      }, []);
    return (
        <section className='videoSctin'>
            <div className="videoContainer">
                <div className="videoHeader">
                    <h3>Videos</h3>
                    <div className="vdBtns">
                        <button className={lang === "English" ? "bt-rvrs": ""} onClick={() => toggleLanguage("English")}>English</button>
                        <button className={lang === "Kannada" ? "bt-rvrs": ""} onClick={() => toggleLanguage("Kannada")}>Kannada</button>
                    </div>
                </div>
                <div className="row no-gutters">
                    <div className="col-md-9 col-12">
                        <div className="videoSlider">
                            <>
                                <Swiper
                                    style={{
                                        '--swiper-navigation-color': '#fff',
                                        '--swiper-pagination-color': '#fff',
                                    }}
                                    loop={true}
                                    spaceBetween={10}
                                    navigation={true}
                                    thumbs={{ swiper: thumbsSwiper }}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mySwiper2"
                                >
                                    {
                                        eachLanguageData?.videos?.slice(0,5).map((item,index) => {
                                            return (
                                                <SwiperSlide key={index}>
                                                    <iframe width="100%" height="315" src={item.url} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                                </SwiperSlide>
                                            )
                                        })
                                    }

                                </Swiper>
                                <Swiper
                                    onSwiper={setThumbsSwiper}
                                    loop={true}
                                    spaceBetween={10}
                                    slidesPerView={4}
                                    freeMode={true}
                                    watchSlidesProgress={true}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mySwiper"
                                >
                                    {
                                        eachLanguageData?.videos?.slice(0,5).map((item,index) => {
                                            return (
                                                <SwiperSlide key={index}>
                                                    <img className='img-fluid' src={item.thumbnail_image} />
                                                </SwiperSlide>
                                            )
                                        })
                                    }

                                    <SwiperSlide>
                                        <img className='img-fluid' src="https://img.youtube.com/vi/Rs-lS8fj1Ns/hqdefault.jpg" />
                                        {/* <iframe width="100%" height="" src="https://www.youtube.com/embed/Rs-lS8fj1Ns?si=q--mzEUcPjRlG_QD?" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className='img-fluid' src="https://img.youtube.com/vi/UYMvkcPktn8/hqdefault.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className='img-fluid' src="https://img.youtube.com/vi/8fqRaz02qNU/hqdefault.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className='img-fluid' src="https://img.youtube.com/vi/4WiDtxX229M/hqdefault.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className='img-fluid' src="https://img.youtube.com/vi/3wsUYtS1_W0/hqdefault.jpg" />
                                    </SwiperSlide>

                                </Swiper>
                            </>
                        </div>
                    </div>
                    <div className="col-md-3 col-12">
                        <div className='verticalSlider'>
                            <>
                                {/* <Swiper
                                    direction={'vertical'}
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
                                    modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
                                    className="mySwiper"
                                > */}
                                <Swiper
                                    direction="vertical"
                                    cssMode={true}
                                    // navigation={true}
                                    pagination={{ clickable: true }}
                                    mousewheel={true}
                                    keyboard={true}
                                    autoplay={{
                                        delay: 7500,
                                        disableOnInteraction: false,
                                    }}
                                    modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
                                    className="verticalSlider"
                                >
                                    {
                                        eachLanguageData?.shorts?.slice(0,5).map((item,index) => {
                                            return (
                                                <SwiperSlide key={index}><iframe width="100%" height="150" src={item.url} title="6 Children Killed By A Drunk Driver"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></SwiperSlide>
                                            )
                                        })
                                    }
                                    {/* <SwiperSlide><iframe width="100%" height="150" src="https://www.youtube.com/embed/e7gZsJ-AjNs" title="6 Children Killed By A Drunk Driver"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></SwiperSlide>
                                    <SwiperSlide><iframe width="100%" height="150" src="https://www.youtube.com/embed/Q2oxhWzqjiA" title="A bus carrying workers crashes into a mine, resulting in 12 fatalities and 14 injuries"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></SwiperSlide>
                                    <SwiperSlide><iframe width="100%" height="150" src="https://www.youtube.com/embed/7kStbaXRkT0" title="Data Breach at BoAt"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></SwiperSlide>
                                    <SwiperSlide><iframe width="100%" height="150" src="https://www.youtube.com/embed/M1Cxc2tRMfQ" title="Breaking traditions for health Bengaluru Police"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></SwiperSlide>
                                    <SwiperSlide><iframe width="100%" height="150" src="https://www.youtube.com/embed/SRj0-T017qk" title="Here’s a powerful demonstration of activism!"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></SwiperSlide>
                                    <SwiperSlide><iframe width="100%" height="150" src="https://www.youtube.com/embed/2V7Q64jQ-Zs" title="Tragic news from Baltimore: The Francis Scott Key Bridge collapsed"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></SwiperSlide>
                                    <SwiperSlide><iframe width="100%" height="150" src="https://www.youtube.com/embed/jcx54Bl36YU" title="Mirabai Chanu’s journey from Manipur to the global stage is quite remarkable"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></SwiperSlide>
                                    <SwiperSlide><iframe width="100%" height="150" src="https://www.youtube.com/embed/pO7k-vYWv0A" title="On Tuesday, an Indian Air Force plane encountered a mishap in Rajasthan’s Jaisalmer"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></SwiperSlide> */}

                                </Swiper>
                            </>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default VideoSection;