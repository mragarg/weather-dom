
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