// import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import './Flipbook.css';
import cover from "./Jpeg/1 Cover Page.jpg";
import two from "./Jpeg/02.jpg";
import three from "./Jpeg/03.jpg";
import four from "./Jpeg/04.jpg";
import five from "./Jpeg/05.jpg";
import six from "./Jpeg/06.jpg";
import seven from "./Jpeg/07.jpg";
import eight from "./Jpeg/08.jpg";
import nine from "./Jpeg/09.jpg";
import ten from "./Jpeg/10.jpg";
import eleven from "./Jpeg/11.jpg";
import { useLocation } from "react-router-dom";


function App() {
    const location = useLocation();
    const [data, setData] = useState([]);
    useEffect(() => {
        if (location) {
            var urlcomponent = location.pathname.split('/');
            var tmp = urlcomponent[urlcomponent.length - 2];

        }
        const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/emagzines/get?url=${tmp}`
        fetch(url).then(res => res.json())
            .then(res => {
                setData(res)
                console.log(res)
            })
    }, [])

  return (
    <div className='body'>
      <div class="book">
        <input type="checkbox" id="c1"/>
          <input type="checkbox" id="c2"/>
            <input type="checkbox" id="c3"/>
              <div id="cover">
                
                <img src={cover}/>
              {/* <label class="back-btn" for="c1">Back</label> */}
             
              </div>
              <div class="flip-book">

                
                <div class="flip" id="p1">
                  <div class="back">
                    <img src={two}/>
                      <label class="back-btn" for="c1">Back</label>
                  </div>
                  <div class="front">
                    <img src={three}/>
                    <label class="next-btn" for="c1">Next</label>
                  </div>
                </div>
                <div class="flip" id="p2">
                  <div class="back">
                    <img src={four}/>
                      <label class="back-btn" for="c2">Back</label>
                  </div>
                  <div class="front">
                    <img src={five}/>
                    <label class="next-btn" for="c2">Next</label>
                  </div>
                </div>

                <div class="flip" id="p3">
                  <div class="back">
                    <img src={six}/>
                      <label class="back-btn" for="c3">Back</label>
                  </div>
                  <div class="front">
                    <img src={seven}/>
                    <label class="next-btn" for="c3">Next</label>
                  </div>
                </div>

                <div class="flip" id="p4">
                  <div class="back">
                    <img src={eight}/>
                      <label class="back-btn" for="c4">Back</label>
                  </div>
                  <div class="front">
                    <img src={nine}/>
                    <label class="next-btn" for="c4">Next</label>
                  </div>
                </div>

                <div class="flip" id="p5">
                  <div class="back">
                    <img src={ten}/>
                      <label class="back-btn" for="c5">Back</label>
                  </div>
                  <div class="front">
                    <img src={eleven}/>
                    <label class="next-btn" for="c5">Next</label>
                  </div>
                </div>

                </div>
              </div>
            </div>
        
          );
}

          export default App;
