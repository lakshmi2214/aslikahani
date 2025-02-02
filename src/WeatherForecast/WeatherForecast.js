import React from 'react'

function WeatherForecast() {
    var isoCountries = {
        'AF': 'Afghanistan',
        'AX': 'Aland Islands',
        'AL': 'Albania',
        'DZ': 'Algeria',
        'AS': 'American Samoa',
        'AD': 'Andorra',
        'AO': 'Angola',
        'AI': 'Anguilla',
        'AQ': 'Antarctica',
        'AG': 'Antigua And Barbuda',
        'AR': 'Argentina',
        'AM': 'Armenia',
        'AW': 'Aruba',
        'AU': 'Australia',
        'AT': 'Austria',
        'AZ': 'Azerbaijan',
        'BS': 'Bahamas',
        'BH': 'Bahrain',
        'BD': 'Bangladesh',
        'BB': 'Barbados',
        'BY': 'Belarus',
        'BE': 'Belgium',
        'BZ': 'Belize',
        'BJ': 'Benin',
        'BM': 'Bermuda',
        'BT': 'Bhutan',
        'BO': 'Bolivia',
        'BA': 'Bosnia And Herzegovina',
        'BW': 'Botswana',
        'BV': 'Bouvet Island',
        'BR': 'Brazil',
        'IO': 'British Indian Ocean Territory',
        'BN': 'Brunei Darussalam',
        'BG': 'Bulgaria',
        'BF': 'Burkina Faso',
        'BI': 'Burundi',
        'KH': 'Cambodia',
        'CM': 'Cameroon',
        'CA': 'Canada',
        'CV': 'Cape Verde',
        'KY': 'Cayman Islands',
        'CF': 'Central African Republic',
        'TD': 'Chad',
        'CL': 'Chile',
        'CN': 'China',
        'CX': 'Christmas Island',
        'CC': 'Cocos (Keeling) Islands',
        'CO': 'Colombia',
        'KM': 'Comoros',
        'CG': 'Congo',
        'CD': 'Congo, Democratic Republic',
        'CK': 'Cook Islands',
        'CR': 'Costa Rica',
        'CI': 'Cote D\'Ivoire',
        'HR': 'Croatia',
        'CU': 'Cuba',
        'CY': 'Cyprus',
        'CZ': 'Czech Republic',
        'DK': 'Denmark',
        'DJ': 'Djibouti',
        'DM': 'Dominica',
        'DO': 'Dominican Republic',
        'EC': 'Ecuador',
        'EG': 'Egypt',
        'SV': 'El Salvador',
        'GQ': 'Equatorial Guinea',
        'ER': 'Eritrea',
        'EE': 'Estonia',
        'ET': 'Ethiopia',
        'FK': 'Falkland Islands (Malvinas)',
        'FO': 'Faroe Islands',
        'FJ': 'Fiji',
        'FI': 'Finland',
        'FR': 'France',
        'GF': 'French Guiana',
        'PF': 'French Polynesia',
        'TF': 'French Southern Territories',
        'GA': 'Gabon',
        'GM': 'Gambia',
        'GE': 'Georgia',
        'DE': 'Germany',
        'GH': 'Ghana',
        'GI': 'Gibraltar',
        'GR': 'Greece',
        'GL': 'Greenland',
        'GD': 'Grenada',
        'GP': 'Guadeloupe',
        'GU': 'Guam',
        'GT': 'Guatemala',
        'GG': 'Guernsey',
        'GN': 'Guinea',
        'GW': 'Guinea-Bissau',
        'GY': 'Guyana',
        'HT': 'Haiti',
        'HM': 'Heard Island & Mcdonald Islands',
        'VA': 'Holy See (Vatican City State)',
        'HN': 'Honduras',
        'HK': 'Hong Kong',
        'HU': 'Hungary',
        'IS': 'Iceland',
        'IN': 'India',
        'ID': 'Indonesia',
        'IR': 'Iran, Islamic Republic Of',
        'IQ': 'Iraq',
        'IE': 'Ireland',
        'IM': 'Isle Of Man',
        'IL': 'Israel',
        'IT': 'Italy',
        'JM': 'Jamaica',
        'JP': 'Japan',
        'JE': 'Jersey',
        'JO': 'Jordan',
        'KZ': 'Kazakhstan',
        'KE': 'Kenya',
        'KI': 'Kiribati',
        'KR': 'Korea',
        'KW': 'Kuwait',
        'KG': 'Kyrgyzstan',
        'LA': 'Lao People\'s Democratic Republic',
        'LV': 'Latvia',
        'LB': 'Lebanon',
        'LS': 'Lesotho',
        'LR': 'Liberia',
        'LY': 'Libyan Arab Jamahiriya',
        'LI': 'Liechtenstein',
        'LT': 'Lithuania',
        'LU': 'Luxembourg',
        'MO': 'Macao',
        'MK': 'Macedonia',
        'MG': 'Madagascar',
        'MW': 'Malawi',
        'MY': 'Malaysia',
        'MV': 'Maldives',
        'ML': 'Mali',
        'MT': 'Malta',
        'MH': 'Marshall Islands',
        'MQ': 'Martinique',
        'MR': 'Mauritania',
        'MU': 'Mauritius',
        'YT': 'Mayotte',
        'MX': 'Mexico',
        'FM': 'Micronesia, Federated States Of',
        'MD': 'Moldova',
        'MC': 'Monaco',
        'MN': 'Mongolia',
        'ME': 'Montenegro',
        'MS': 'Montserrat',
        'MA': 'Morocco',
        'MZ': 'Mozambique',
        'MM': 'Myanmar',
        'NA': 'Namibia',
        'NR': 'Nauru',
        'NP': 'Nepal',
        'NL': 'Netherlands',
        'AN': 'Netherlands Antilles',
        'NC': 'New Caledonia',
        'NZ': 'New Zealand',
        'NI': 'Nicaragua',
        'NE': 'Niger',
        'NG': 'Nigeria',
        'NU': 'Niue',
        'NF': 'Norfolk Island',
        'MP': 'Northern Mariana Islands',
        'NO': 'Norway',
        'OM': 'Oman',
        'PK': 'Pakistan',
        'PW': 'Palau',
        'PS': 'Palestinian Territory, Occupied',
        'PA': 'Panama',
        'PG': 'Papua New Guinea',
        'PY': 'Paraguay',
        'PE': 'Peru',
        'PH': 'Philippines',
        'PN': 'Pitcairn',
        'PL': 'Poland',
        'PT': 'Portugal',
        'PR': 'Puerto Rico',
        'QA': 'Qatar',
        'RE': 'Reunion',
        'RO': 'Romania',
        'RU': 'Russian Federation',
        'RW': 'Rwanda',
        'BL': 'Saint Barthelemy',
        'SH': 'Saint Helena',
        'KN': 'Saint Kitts And Nevis',
        'LC': 'Saint Lucia',
        'MF': 'Saint Martin',
        'PM': 'Saint Pierre And Miquelon',
        'VC': 'Saint Vincent And Grenadines',
        'WS': 'Samoa',
        'SM': 'San Marino',
        'ST': 'Sao Tome And Principe',
        'SA': 'Saudi Arabia',
        'SN': 'Senegal',
        'RS': 'Serbia',
        'SC': 'Seychelles',
        'SL': 'Sierra Leone',
        'SG': 'Singapore',
        'SK': 'Slovakia',
        'SI': 'Slovenia',
        'SB': 'Solomon Islands',
        'SO': 'Somalia',
        'ZA': 'South Africa',
        'GS': 'South Georgia And Sandwich Isl.',
        'ES': 'Spain',
        'LK': 'Sri Lanka',
        'SD': 'Sudan',
        'SR': 'Suriname',
        'SJ': 'Svalbard And Jan Mayen',
        'SZ': 'Swaziland',
        'SE': 'Sweden',
        'CH': 'Switzerland',
        'SY': 'Syrian Arab Republic',
        'TW': 'Taiwan',
        'TJ': 'Tajikistan',
        'TZ': 'Tanzania',
        'TH': 'Thailand',
        'TL': 'Timor-Leste',
        'TG': 'Togo',
        'TK': 'Tokelau',
        'TO': 'Tonga',
        'TT': 'Trinidad And Tobago',
        'TN': 'Tunisia',
        'TR': 'Turkey',
        'TM': 'Turkmenistan',
        'TC': 'Turks And Caicos Islands',
        'TV': 'Tuvalu',
        'UG': 'Uganda',
        'UA': 'Ukraine',
        'AE': 'United Arab Emirates',
        'GB': 'United Kingdom',
        'US': 'United States',
        'UM': 'United States Outlying Islands',
        'UY': 'Uruguay',
        'UZ': 'Uzbekistan',
        'VU': 'Vanuatu',
        'VE': 'Venezuela',
        'VN': 'Viet Nam',
        'VG': 'Virgin Islands, British',
        'VI': 'Virgin Islands, U.S.',
        'WF': 'Wallis And Futuna',
        'EH': 'Western Sahara',
        'YE': 'Yemen',
        'ZM': 'Zambia',
        'ZW': 'Zimbabwe'
    };

    window.addEventListener("load", function (event) {
        navigator.geolocation.getCurrentPosition(function (position) {

            var xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function () {
                if (xhr.readyState !== 4)
                    return;

                if (xhr.status !== 200) {
                    console.log("Error while getting weather forecast data from openweathermap.org");
                    console.log(xhr.statusText);
                    return;
                }

                console.log("Success!");
                console.log(JSON.parse(xhr.response));

                // display weather
                var country = document.querySelector("span.country");
                var region = document.querySelector("span.region");
                var description = document.querySelector("div.description");
                var img = document.querySelector("img");

                var obj = JSON.parse(xhr.response);

                // location
                country.innerHTML = ((isoCountries.hasOwnProperty(obj.sys.country)) ? isoCountries[obj.sys.country] : obj.sys.country) + ".";
                region.innerHTML = obj.name + ".";

                // icon
                img.src = "http://openweathermap.org/img/w/" + obj.weather[0].icon + ".png";

                appendWeatherLine(description, "Main", obj.weather[0].main);
                appendWeatherLine(description, "Description", obj.weather[0].description);
                appendWeatherLine(description, "Temperature", "<span id=\"tempValue\">" + obj.main.temp + "&#8451;</span>");
                appendWeatherLine(description, "Atmospheric pressure", obj.main.pressure + "hPa");
                appendWeatherLine(description, "Humidity", obj.main.humidity + "%");
                appendWeatherLine(description, "Wind", obj.wind.speed + "m/s, " + defineWindDirection(obj.wind.deg));
                appendWeatherLine(description, "Cloudiness", obj.clouds.all + "%");

                if (obj.rain && obj.rain['3h'])
                    appendWeatherLine(description, "Rain", obj.rain['3h']);

                if (obj.snow && obj.snow['3h'])
                    appendWeatherLine(description, "Snow", obj.snow['3h']);

                // choose background image
                setBackgroundImage(obj);


                // add toggleBtn event (toggle between Celcius and Fahrenheit)
                var tempFlag = 0;  // 0 - Celcius, 1 - Fahrenheiht
                var celcius = obj.main.temp;
                var fahrenheight = Math.round((celcius * 1.8 + 32) * 100) / 100;
                document.querySelector("#toggleBtn span").addEventListener("click", function (event) {
                    var tempVal = description.querySelector("span#tempValue");
                    if (tempFlag === 0) {
                        tempVal.innerHTML = fahrenheight + " &#8457;";
                        this.innerHTML = "Toggle to &#8451;";
                    } else {
                        tempVal.innerHTML = celcius + " &#8451;";
                        this.innerHTML = "Toggle to &#8457;";
                    }

                    tempFlag = (tempFlag + 1) % 2;
                });
            };

            xhr.open("GET", "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?APPID=239c2edd5d23580c81fc9f6f05897824&lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&units=metric", true);

            xhr.send();
        });
    });

    function appendWeatherLine(parent, title, value) {
        var elem = document.createElement("div");
        var btn = document.getElementById("toggleBtn");
        elem.innerHTML = "<strong>" + title + ":</strong> " + value + "<br/>";
        parent.insertBefore(elem, btn);
    }

    // function prefixZ(val) {
    //     val = parseInt(val);
    //     if (val < 10)
    //         return "0" + val;

    //     return val;
    // }

    function setBackgroundImage(obj) {
        var wcode = obj.weather[0].id;
        if (wcode >= 200 && wcode < 300) {
            // thunderstorm
            var indx = Math.floor(Math.random() * 2 + 1);
            document.body.style.backgroundImage = "url(http://res.cloudinary.com/dngcku70s/image/upload/v1497182948/weather/thunderstorm_" + indx + ".jpg)";
        } else if (wcode >= 300 && wcode < 400) {
            // drizzle
            indx = Math.floor(Math.random() * 2 + 1);
            document.body.style.backgroundImage = "url(http://res.cloudinary.com/dngcku70s/image/upload/v1497182948/weather/drizzle_" + indx + ".jpg)";
        } else if (wcode >= 500 && wcode < 600) {
            // rain
            indx = Math.floor(Math.random() * 2 + 1);
            document.body.style.backgroundImage = "url(http://res.cloudinary.com/dngcku70s/image/upload/v1497182948/weather/rain_" + indx + ".jpg)";
        } else if (wcode >= 600 && wcode < 700) {
            // snow
            indx = Math.floor(Math.random() * 2 + 1);
            document.body.style.backgroundImage = "url(http://res.cloudinary.com/dngcku70s/image/upload/v1497182948/weather/rain_" + indx + ".jpg)";
        } else if (wcode === 701) {
            // mist
            indx = Math.floor(Math.random() * 3 + 1);
            document.body.style.backgroundImage = "url(http://res.cloudinary.com/dngcku70s/image/upload/v1497182948/weather/mist_" + indx + ".jpg)";
        } else if (wcode === 711) {
            // smoke
            document.body.style.backgroundImage = "url(http://res.cloudinary.com/dngcku70s/image/upload/v1497182948/weather/smoke.png)";
        } else if (wcode === 721) {
            // haze
            document.body.style.backgroundImage = "url(http://res.cloudinary.com/dngcku70s/image/upload/v1497182948/weather/haze.jpg)";
        } else if (wcode === 731) {
            // sand
            document.body.style.backgroundImage = "url(http://res.cloudinary.com/dngcku70s/image/upload/v1497182948/weather/sand.jpg)";
        } else if (wcode === 741) {
            // fog
            document.body.style.backgroundImage = "url(http://res.cloudinary.com/dngcku70s/image/upload/v1497182948/weather/fog.jpg)";
        } else if (wcode === 751) {
            // sand
            document.body.style.backgroundImage = "url(http://res.cloudinary.com/dngcku70s/image/upload/v1497182948/weather/sand.jpg)";
        } else if (wcode === 761) {
            // dust
            document.body.style.backgroundImage = "url(http://res.cloudinary.com/dngcku70s/image/upload/v1497182948/weather/dust.jpg)";
        } else if (wcode === 762) {
            // volcanic ash
            document.body.style.backgroundImage = "url(http://res.cloudinary.com/dngcku70s/image/upload/v1497182948/weather/volcanic_ash.jpg)";
        } else if (wcode === 771) {
            // squalls
            document.body.style.backgroundImage = "url(http://res.cloudinary.com/dngcku70s/image/upload/v1497182948/weather/squalls.jpg)";
        } else if (wcode === 781 || wcode === 900 || wcode === 960 || wcode === 961) {
            // tornado
            indx = Math.floor(Math.random() * 2 + 1);
            document.body.style.backgroundImage = "url(http://res.cloudinary.com/dngcku70s/image/upload/v1497182948/weather/tornado_" + indx + ".jpg)";
        } else if (wcode === 800) {
            // clear sky
            indx = Math.floor(Math.random() * 3 + 1);
            document.body.style.backgroundImage = "url(http://res.cloudinary.com/dngcku70s/image/upload/v1497182948/weather/clear_sky_" + indx + ".jpg)";
        } else if (wcode === 801) {
            // few clouds
            document.body.style.backgroundImage = "url(http://res.cloudinary.com/dngcku70s/image/upload/v1497182948/weather/few_clouds.jpg)";
        } else if (wcode === 802) {
            // scattered clouds
            document.body.style.backgroundImage = "url(http://res.cloudinary.com/dngcku70s/image/upload/v1497182948/weather/scattered_clouds.jpg)";
        } else if (wcode === 803) {
            // broken clouds
            document.body.style.backgroundImage = "url(./img/broken_clouds.jpg)";
        } else if (wcode === 804) {
            // overcast clouds
            document.body.style.backgroundImage = "url(http://res.cloudinary.com/dngcku70s/image/upload/v1497182948/weather/overcast_clouds.jpg)";
        } else if (wcode === 901) {
            // tropical storm
            document.body.style.backgroundImage = "url(./img/tropical_strom.jpg)";
        } else if (wcode === 902 || wcode === 962) {
            // hurricane
            document.body.style.backgroundImage = "url(http://res.cloudinary.com/dngcku70s/image/upload/v1497182948/weather/hurricane.jpg)";
        } else if (wcode === 903) {
            // cold
            document.body.style.backgroundImage = "url(http://res.cloudinary.com/dngcku70s/image/upload/v1497182948/weather/cold.jpg)";
        } else if (wcode === 904) {
            // hot
            document.body.style.backgroundImage = "url(http://res.cloudinary.com/dngcku70s/image/upload/v1497182948/weather/hot.jpg)";
        } else if (wcode === 905) {
            // windy
            document.body.style.backgroundImage = "url(http://res.cloudinary.com/dngcku70s/image/upload/v1497182948/weather/windy.jpg)";
        } else if (wcode === 906) {
            // hail
            document.body.style.backgroundImage = "url(http://res.cloudinary.com/dngcku70s/image/upload/v1497182948/weather/hail.jpg)";
        } else if (wcode === 951) {
            // calm
            document.body.style.backgroundImage = "url(http://res.cloudinary.com/dngcku70s/image/upload/v1497182948/weather/calm.jpg)";
        } else if (wcode === 952) {
            // light breeze
            document.body.style.backgroundImage = "url(http://res.cloudinary.com/dngcku70s/image/upload/v1497182948/weather/light_breeze.jpg)";
        } else if (wcode === 953) {
            // gentle breeze
            document.body.style.backgroundImage = "url(http://res.cloudinary.com/dngcku70s/image/upload/v1497182948/weather/gentle_breeze.jpeg)";
        } else if (wcode === 954) {
            // moderate breeze
            document.body.style.backgroundImage = "url(http://res.cloudinary.com/dngcku70s/image/upload/v1497182948/weather/moderate_breeze.jpg)";
        } else if (wcode === 955) {
            // fresh breeze
            document.body.style.backgroundImage = "url(http://res.cloudinary.com/dngcku70s/image/upload/v1497182948/weather/fresh_reeze.jpg)";
        } else if (wcode === 956) {
            // strong breeze
            document.style.backgroundImage = "url(http://res.cloudinary.com/dngcku70s/image/upload/v1497182948/weather/strong_breeze.jpg)";
        } else if (wcode === 957) {
            // high wind
            document.body.style.backgroundImage = "url(http://res.cloudinary.com/dngcku70s/image/upload/v1497182948/weather/high_wind.jpg)";
        } else if (wcode === 958) {
            // gale
            document.body.style.backgroundImage = "url(http://res.cloudinary.com/dngcku70s/image/upload/v1497182948/weather/gale.jpg)";
        } else if (wcode === 959) {
            // severe gale
            document.body.style.backgroundImage = "url(http://res.cloudinary.com/dngcku70s/image/upload/v1497182948/weather/severe_gale.JPG)";
        }
    }

    function defineWindDirection(deg) {
        if (deg >= 348.75 || deg < 11.25)
            return "N";

        if (deg >= 11.25 && deg < 33.75)
            return "NNE";

        if (deg >= 33.75 && deg < 56.25)
            return "NE";

        if (deg >= 56.25 && deg < 78.75)
            return "ENE";

        if (deg >= 78.75 && deg < 101.25)
            return "E";

        if (deg >= 101.25 && deg < 123.75)
            return "ESE";

        if (deg >= 123.75 && deg < 146.25)
            return "SE";

        if (deg >= 146.25 && deg < 168.75)
            return "SSE";

        if (deg >= 168.75 && deg < 191.25)
            return "S";

        if (deg >= 191.25 && deg < 213.75)
            return "SSW";

        if (deg >= 213.75 && deg < 236.25)
            return "SW";

        if (deg >= 236.25 && deg < 258.75)
            return "WSW";

        if (deg >= 258.75 && deg < 281.25)
            return "W";

        if (deg >= 281.25 && deg < 303.75)
            return "WNW";

        if (deg >= 303.75 && deg < 326.25)
            return "NW";

        if (deg >= 326.25 && deg < 348.75)
            return "NNW";
    }


    return (
        <div>

            <div className="containers">
                <h1>Weather Forecast</h1>
                <div className="locationDiv">
                    <div className="innerLocationDiv"><b>Country:</b> <span className="country"></span></div>
                    <div className="innerLocationDiv"><b>City/Region:</b> <span className="region"></span></div>
                </div>

                <div className="description">
                    <div id="toggleBtn"><span>Toggle to &#8457;</span></div>
                </div>

                <div id="footer">Powered by <a href="http://openweathermap.org/">openweathermap.org</a></div>
            </div>

        </div>
    )
}

export default WeatherForecast