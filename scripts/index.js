
// Implement the following functions to fulfill the tests!
function getLocationName(city) {
    return city.name;
}

function getLocationCountry(city) {
    return city.sys.country;
}

function getLocationLatitude(city) {
    return city.coord.lat;
}

function getLocationLongitude(city) {
    return city.coord.lon;
}

function getDescription(city) {
    return city.weather[0].description;
}

function getWindSpeed(city) {
    return city.wind.speed;
}

function getSunrise(city) {
    return city.sys.sunrise;
}

function getLocationTemperature(city) {
    fDegree = 1.8 * ((city.main.temp) - 273.15) + 32;
    return fDegree.toFixed(1) + "\xB0 F";
}

function getWeatherIcon(city) {
    let iconLabel = city.weather[0].icon;
    return "http://openweathermap.org/img/w/" + iconLabel + ".png";
}

function showWeatherIcon(url) {
    const weatherIcon = document.createElement("img");
    weatherIcon.src = url;
    weatherInfo.appendChild(weatherIcon);
}
// Please ignore the following
try {
    module.exports = {
        getLocationName,
        getLocationCountry,
        getLocationLatitude,
        getLocationLongitude,
        getDescription,
        getWindSpeed,
        getSunrise
    }
} catch (e) {
    
}

// Start DOM elements practice here

const body = document.querySelector("body");
const weatherInfo = document.querySelector("[data-weatherInfo]");
const mapLocation = document.querySelector("[data-map]");
const URL = "https://api.openweathermap.org/data/2.5/weather?q=atlanta&appid=2d5f8fa271ed1d35a26ff618bbe03598";
let theWeather;
fetch(URL).then(function (response){ 
    return response.json(); 
}).then(function (data){
    theWeather = data;


    // Go through data and create a `p` tag for them (city name, temperature, wind speed)
    const cityName = document.createElement("p");
    cityName.textContent = "City Name: " + getLocationName(theWeather);
    
    const cityTemp = document.createElement("p");
    cityTemp.textContent = "Temperature: " + getLocationTemperature(theWeather);
    
    const cityWindSpeed = document.createElement("p");
    cityWindSpeed.textContent = "Wind Speed: " + getWindSpeed(theWeather);
    
    weatherInfo.appendChild(cityName);
    weatherInfo.appendChild(cityTemp);
    weatherInfo.appendChild(cityWindSpeed);
    showWeatherIcon(getWeatherIcon(theWeather));
    
    mapLocation.src = "http://maps.google.com/maps?q=" + getLocationLatitude(theWeather) + ", " + getLocationLongitude(theWeather) +  "&z=15&output=embed";
    
    // Append them to the weatherDiv
    // Append weatherDiv to body 
    
    // body.prepend(weatherDiv); 
    // appendChild is after and prepend is before 
    // NOTE: Remember to appendChild to body at the end to save computionally `energy`
    body.appendChild(weatherInfo);
    
    console.log(getWeatherIcon(theWeather));
    console.log(theWeather);

    
});
