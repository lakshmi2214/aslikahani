import React from 'react'
import "./weather.css"

function WeatherReport() {


    
  return (
    <div>

<div class="containers">
    <div class="weather-app flex">
        <div class="col">
            {/* <img id="weatherImg" src="https://lh3.googleusercontent.com/sixFkRy6wOnYkstBT_l7Nx5DMiaTvlLBjieDtYTH42sc9Vcl8lXliQGpniQNpYEshxwt0foVv9y9f8N1J0U4GVXoRmF4FOje8tiO70BWjAGwiC1Zb6NrusXfR3X4kPSTdQScSpZa92Zm2AmzUrhDtfJmZnDmSZKH2tp2tGMjKDeiD-MhugwVoGmtO3fRB95xJi-RoxxAj53kFwiRKMKoQVa0GXWQ4VzflUk6v81fFwIVx9GxIx6HbqjnbPx2tcdKm5CMXSXyfLDQ7WSLP8TGTzXClk2DJXboJ97GkdhODmVC32ReIEaEop-vKlBlr3FDhWSAyTHrui_5NpiTp6eEfk-Tn5Lux79VITHFKgXawpZXi0bLdivIKyQJSIrLRco0ieXrvBub0SNtIKW1PlOtSUY0iEFfXZeNpvXrOMV5yKtDuwhgOnLL7IsIbQWx-G9MeTplpUq4LKbXx99L2tYbGGa28kZGYWzxFpbTDaTDx_LLyWGw6Gu0kqQQaBWbR2mmLkTC1RwqRmoygajMbSa5YuwAypnPxDjm6Sy8YZRnUEvEhzchgx2jtrmuqOlNxpSQJo5FIXYDvuClbTBpT6yZp7pG7Xnr6YKvxbrnmzkOQt-LFzvkmQnG=w188-h300-no"/> */}
        </div>
        <div class="col-2 flex p-md">
            <div class="col-2 flex flex-col">
                <div>
                    <p class="col-sm text-dark">Current Weather</p>
                    <h2 id="townName" class="border-bottom">Location</h2>
                    <p class="text-xs text-darker">
                        lat <span id="lat">00000000</span><br/>
                        lon <span id="lon">00000000</span>
                    </p>
                </div>
                <div>
                    <h2 class="text-dark">
                        <span id="fahrenheit" class="toggle-unit">°F</span> | <span id="celsius" class="toggle-unit toggled">°C</span>
                    </h2>
                </div>
            </div>
            <div class="col flex flex-col">
                <div class="flex align-center d-inline-block m-auto">
                    <canvas id="icon" width="88" height="88"></canvas>
                </div>
                <div class="d-inline-block m-auto">
                    <p id="time" class="text-sm text-right text-dark border-bottom">00:00AM</p>
                    <h1 class="text-right d-block">
                        <span id="temp">0</span>°<span id="tempUnit" class="text-darker">C</span>
                    </h1>
                </div>
            </div>
        </div>
    </div>
    {/* <p class="copyright text-sm text-center text-darker">
        Coded by <a class="text-dark" href="https://codepen.io/jethazelhurst" target="_blank">Jethro Hazelhurst</a>
    </p> */}
</div>

    </div>
  )
}

export default WeatherReport