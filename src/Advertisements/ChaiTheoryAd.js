import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "./Chaitheory.css";
// import App from '../Weather/App';
// import Weather from './Weather';
// import WeatherReport from './WeatherReport';
// import Swiper from 'react-id-swiper';
// import CurrentLocation from "../Weather/currentLocation"

function ChaiTheoryAd(props) {
  return(                    
      <div className="widget widget-bg">
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
      item.advertisements.TopPosterAd2?.slice(0,1).map((item, index) => {
         console.log(item)

         return (
             <div key={index}>
        
                    <div className="single-testimonial-slider">							
							<div className="client-meta">
								<a href={item.url} target='blank'>
                                <img className="testimonial-body" style={{width:"100%", height:"100%"}} src={item.image}/>
                                </a>
								<a href={item.url} target='blank'>
									 <div className="last-icon">
									{item.description}
								</div>   </a>             
								<div style={{height:"30px"}}></div>
								               
							</div>
						</div>
                  </div>
                
      )}))})}
                  </SwiperSlide>
                  <SwiperSlide>
                  {props.addObject?.categories?.slice(0, 1).map((item) => {
               return (
                  item.advertisements.TopPosterad1?.slice(0,1).map((item, index) => {
                     console.log(item)
         return (
             <div key={index}>
        
                    <div className="single-testimonial-slider">							
							<div className="client-meta">
							<a href={item.url} target='blank'>
								<img className="testimonial-body" style={{width:"100%"}} src={item.image}/></a>
									<a href={item.url} target='blank'> <div className="last-icon">
									{item.description}
								</div> </a>               
								<div style={{height:"30px"}}></div>
								               
							</div>
						</div>
                  </div>
                
      )}))})}
      
                  </SwiperSlide>
             </Swiper>
               {/* <div className="container" style={{height:"467px", maxWidth:"fit-content"}}>
         <CurrentLocation />
         </div> */}
         {/* <App /> */}
             {/* <Weather />
             <WeatherReport /> */}
    </div>       
         
      
   )
      
}
export default ChaiTheoryAd;

// {props.addObject?.categories?.slice(0, 1).map((item) => {
//    return (
//       item.advertisements.TopPosterAd2.map((item, index) => {
//          console.log(item)

//          return (
//             <div key={index}>
              
                  
//                   <div className="ad-div style-box">

//                      <a href={item.url} target='blank'>
//                         <img src={item.image} className="img-responsive d-block w-100 " alt="" />
//                      </a>
//                   </div>
//                   <div className="detail">
//                      <div className="caption" >
//                         <h5>
//                            <a href={item.url} target='blank'>{item.description}</a>
//                         </h5>
//                      </div>
//                   </div>
//                </div>
           

//          )
//       }))
// })}



 {/* <SwiperSlide>

         <div className="single-testimonial-slider">							
							<div className="client-meta">
								<h3>Rachana Agarwal<span>Chai Lover</span></h3>
								<p className="testimonial-body">
								ChaiCharm's spiced chai is a comforting embrace in a cup. The blend of cinnamon, 
								cardamom, and ginger is perfectly balanced, creating a harmonious dance of flavors. Served piping hot with a hint of sweetness, it's a delightful pick-me-up on a chilly afternoon.
								</p>
								{/* <div className="last-icon">
									<i className="fas fa-quote-right"></i>
								</div>                */}
							{/* </div>
						</div></SwiperSlide>  */}









// import React from 'react';
// import '../css/style.css';
// import '../css/animate.min.css';
// import '../css/megaMenu.css';
// import '../css/colors/amethyst.css';
// import '../css/colors/blue.css';
// import '../css/colors/carrat.css';
// import '../css/colors/defualt.css';
// import '../css/colors/golden.css';
// import '../css/colors/java-color.css';
// import '../css/colors/sea-green.css';
// import '../css/themify-icons.css';
// import '../css/royal-slider/royalslider.css';
// import '../css/tranparentmenu.css';
// import '../css/magnific-popup.css';
// import '../css/bootstrap-normal-container.min.css';
// import '../css/bootstrap.min.css';
// import '../css/owl.theme.default.css';
// import '../css/breakingNews.css';
// import '../css/font-awesome.min.css';
// import '../css/zerogrid.css';
// import '../css/royal-slider/rs-default.css';
// import '../css/owl.carousel.css';


// function ChaiTheoryAd(props) {
  
//    return (
//       <>
//          <div className="widget widget-bg">
            
//             {props.addObject?.categories?.slice(0, 1).map((item) => {
//                return (
//                   item.advertisements.TopPosterAd2.map((item, index) => {
//                      console.log(item)

//                      return (
//                         <div key={index}>
//                            <div className="ad-div style-box">
//                               <a href={item.url} target='blank'>
//                                  <img src={item.image} className="img-responsive " alt="" />
//                               </a>
//                            </div>
//                            <div className="detail">
//                               <div className="caption" >
//                                  <h5>
//                                     <a href={item.url} target='blank'>{item.description}</a>
//                                  </h5>
//                               </div>
//                            </div>
//                         </div>
//                      )
//                   }))
//             })}

//          </div>
//       </>
//    )
// }
// export default ChaiTheoryAd;


