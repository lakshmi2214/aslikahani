import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useRef, useState } from 'react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useNavigate } from "react-router-dom";
// import { EffectFlip, Pagination, Navigation } from 'swiper/modules';


function PostArticles(props) {
    const navigate = useNavigate();
   const handleNavigation = (item) => {
      // console.log(item);

      navigate(`/${item.category}/${item.url}`, { state: { item } });
   } 
  return (
    <>
    
    {/* <Swiper
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
         {props.dataObject?.locations?.SliderWidget.slice(0, 2).map((item, index) => {
return (
             <div key={index}>
        
                    <div className="col-md-10">							
							<div className="slider-adds">
								<a href={item.url} target='blank'>
                                <img style={{width:"100%", height:"100%"}} src={item.image}/>
                                </a>
                                <div className="article-desc">
									<h4>
								<a href={item.url} target='blank'>{item.description}</a>
                                
                                </h4>                                    
								</div>         
							</div>
						</div>
                        
                  </div>
      )})}
                  </SwiperSlide>
                  <SwiperSlide>
         {props.dataObject?.locations?.SliderWidget.slice(0, 2).map((item, index) => {
                  return (
             <div key={index}>
        
        <div className="col-md-10">							
							<div className="slider-adds">
								<a href={item.url} target='blank'>
                                <img style={{width:"100%", height:"100%"}} src={item.image}/>
                                </a>
                                <div className='article-desc' >
										<h5> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.title}</a></h5>
										<p className='size'><span>BY</span> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}><strong>{item.authored_by}</strong></a>
											<span> / </span><span>{item.created_at}</span> </p>
									</div>        
							</div>
						</div>
                  </div>
                
      )})}
      
                  </SwiperSlide>
             </Swiper> */}
                <div className='title-article'>
					<h3><span>Post Widget</span></h3>
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
         {props.dataObject?.locations?.SliderWidget.slice(2,3).map((item, index) => {
return (
             <div key={index}>
        
                    <div className="col-md-12">							
							<div className="slider-adds">
								<a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url} target='blank'>
                                <img style={{width:"100%", height:"100%"}} src={item.image}/>
                                </a>
                                <div className='article-desc' >
										<h5> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.title}</a></h5>
										<p className='size'><span>BY</span> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}><strong>{item.authored_by}</strong></a>
											<span> / </span><span>{item.created_at}</span> </p>
									</div>         
							</div>
						</div>
                        
                  </div>
      )})}
                  </SwiperSlide>
                  <SwiperSlide>
         {props.dataObject?.locations?.SliderWidget.slice(1,2).map((item, index) => {
                  return (
             <div key={index}>
        
        <div className="col-md-12">							
							<div className="slider-adds">
								<a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url} target='blank'>
                                <img style={{width:"100%", height:"100%"}} src={item.image}/>
                                </a>
                                <div className='article-desc' >
										<h5> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.title}</a></h5>
										<p className='size'><span>BY</span> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}><strong>{item.authored_by}</strong></a>
											<span> / </span><span>{item.created_at}</span> </p><br/>
									</div>        
							</div>
						</div>
                  </div>
                
      )})}
      
                  </SwiperSlide>
                  <SwiperSlide>
         {props.dataObject?.locations?.SliderWidget.slice(3,4).map((item, index) => {
                  return (
             <div key={index}>
        
        <div className="col-md-12">							
							<div className="slider-adds">
								<a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url} target='blank'>
                                <img style={{width:"100%", height:"100%"}} src={item.image}/>
                                </a>
                                <div className='article-desc' >
										<h5> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.title}</a></h5>
										<p className='size'><span>BY</span> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}><strong>{item.authored_by}</strong></a>
											<span> / </span><span>{item.created_at}</span> </p><br/>
									</div>        
							</div>
						</div>
                  </div>
                
      )})}
      
                  </SwiperSlide>
                  <SwiperSlide>
         {props.dataObject?.locations?.SliderWidget.slice(4,5).map((item, index) => {
                  return (
             <div key={index}>
        
        <div className="col-md-12">							
							<div className="slider-adds">
								<a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url} target='blank'>
                                <img style={{width:"100%", height:"100%"}} src={item.image}/>
                                </a>
                                <div className='article-desc' >
										<h5> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}>{item.title}</a></h5>
										<p className='size'><span>BY</span> <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + item.category + '/' + item.url}><strong>{item.authored_by}</strong></a>
											<span> / </span><span>{item.created_at}</span> </p><br/>
									</div>        
							</div>
						</div>
                  </div>
                
      )})}
      
                  </SwiperSlide>
                  </Swiper>
    
    </>
  )
}

export default PostArticles