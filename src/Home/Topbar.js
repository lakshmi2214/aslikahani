import React, { useState, useEffect } from 'react';
import "./Topbar.css";
import { useVisualCrossing } from "react-open-weather";


function Topbar() {
   const [currentDateTime, setCurrentDateTime] = useState(new Date());

   // const [article, setAricle] = useState([]);
   useEffect(() => {
      const intervalId = setInterval(() => {
         setCurrentDateTime(new Date());
      }, 1000);
      // Clean up the interval when the component unmounts
      return () => clearInterval(intervalId);
   }, []);

   const optionsDate = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
   };

   const optionsTime = {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
   };
   const formattedDate = currentDateTime.toLocaleString(undefined, optionsDate);
   const formattedTime = currentDateTime.toLocaleString(undefined, optionsTime);
   // ========= weather ============
   const [location, setLocation] = useState({ lat: null, lon: null });
   const [city, setCity] = useState("Fetching location...");

   useEffect(() => {
      if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(
            (position) => {
               const lat = position.coords.latitude;
               const lon = position.coords.longitude;
               setLocation({ lat, lon });

               // Reverse Geocoding to Get City Name
               fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`)
                  .then((res) => res.json())
                  .then((data) => {
                     const place =
                        data.address.city ||
                        data.address.town ||
                        data.address.village ||
                        data.address.county ||
                        "Unknown Location";
                     setCity(place);
                  })
                  .catch(() => setCity("Location not found"));
            },
            (error) => {
               console.error("Error getting location:", error);
               setCity("Location access denied");
            }
         );
      } else {
         setCity("Geolocation not supported");
      }
   }, []);

   const { data, isLoading, errorMessage } = useVisualCrossing({
      key: "K5Q9L49GM6H3LP7JWE2TC87A2", // Ensure your API key is correct
      lat: location.lat || "12.9716", // Default to Bengaluru if undefined
      lon: location.lon || "77.5946",
      lang: "en",
      unit: "metric",
   });

   console.log("Weather API Data:", data); // Debugging: Check API response
   // ========= weather ============
   return (
      <>
         {/* <section className="topbar w-100">
            <div className="container-fluid">
               <div className="row">
                  <div className="col-md-6 col-sm-6 col-4">
                     <div className='tranding'>
                        <ul className="social-media-icons-top">
                           <li><a href=" https://www.facebook.com/aslikahani.in"><i className="ti-facebook"></i> </a></li>
                           <li><a href="https://twitter.com/kahaniasli"><i className="ti-twitter"></i></a></li>
                           <li><a href="https://www.youtube.com/@AsliKahani"><i className="ti-youtube"></i></a></li>
                           <li><a href=" https://www.instagram.com/aslikahani/"><i className="ti-instagram"></i></a></li>

                        </ul>
                        <div className='time-stamp'>
                           <h3>{formattedDate}</h3>
                           <p>{formattedTime} |<span>  Explore Trending Articles </span></p>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6 col-sm-9 col-8">
                     <ul className="subs-topbar" >
                        <li className="subscribeBtn"><a href={process.env.REACT_APP_DOMAIN_NAME + '/subscribe'}>Subscribe</a></li>
                        <li className="magzinebook"><a href={process.env.REACT_APP_DOMAIN_NAME + '/emagazine'}>E-Magazine</a></li>
                        <li><a href="https://open.spotify.com/show/3Xg7iOie2Yct06H4GyXnGj"><span>Aslikahani Podcast</span><span> </span><i className="fa fa-spotify"></i></a></li>
                     </ul>
                  </div>
               </div>
            </div>
         </section> */}
         <section className='topNavebar'>
            <div className='container'>
               <div className='topNav'>
                  <div className='timerLeft'>
                     <div className='magzNav'>
                        <a href={process.env.REACT_APP_DOMAIN_NAME + '/emagazine'}><i class="fa-solid fa-book-open-reader"></i>E-Magazine</a>
                     </div>
                     <div className='timeSlot'>
                        <p>{formattedDate}</p>
                        <span>{formattedTime}</span>
                     </div>
                     <div className='weather'>
                        <p>
                           <span>
                              <i className="fa-solid fa-location-dot"></i>{" "}
                              {isLoading || !location.lat ? "Fetching location..." : city}
                           </span>
                           <span>
                              <i className="fa-solid fa-temperature-low"></i>{" "}
                              {isLoading
                                 ? "Loading weather data..."
                                 : errorMessage
                                    ? `Error: ${errorMessage}`
                                    : data?.current?.temperature?.current
                                       ? `${data.current.temperature.current}°C`
                                       : "Unavailable"}</span>
                        </p>
                     </div>
                  </div>
                  <div className='socialRight'>
                     <ul className="socialIcons">
                        <li><a href="https://open.spotify.com/show/3Xg7iOie2Yct06H4GyXnGj"><i className="fa-brands fa-spotify"></i></a></li>
                        <li><a href=" https://www.facebook.com/aslikahani.in"><i className="fa-brands fa-facebook"></i> </a></li>
                        <li><a href="https://twitter.com/kahaniasli"><i className="fa-brands fa-x-twitter"></i></a></li>
                        <li><a href="https://www.youtube.com/@AsliKahani"><i className="fa-brands fa-youtube"></i></a></li>
                        <li><a href=" https://www.instagram.com/aslikahani/"><i className="fa-brands fa-instagram"></i></a></li>

                     </ul>
                  </div>
               </div>
            </div>
         </section >
      </>
   );
}
export default Topbar;