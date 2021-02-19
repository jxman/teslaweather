const x = document.querySelector("#status");
const getBtn = document.querySelector("#getLocbtn");

// Get Location Logic
getBtn.addEventListener("click", function () {
  x.innerText = "Getting weather for your current location...";
  navigator.geolocation.watchPosition(getWeather);
});

// Get weather after succesful Geolocation call
function getWeather(position) {
  // Get lat and longitutue from Geocall
  const getLat = position.coords.latitude;
  const getLon = position.coords.longitude;

  // Create API call to get weather back
  const wurl =
    "http://api.openweathermap.org/data/2.5/weather?lat=" +
    getLat +
    "&lon=" +
    getLon +
    "&appid=e61a28138132f74719b96edf26b9c26b";

  //make API call for weather with Geolocation
  fetch(wurl)
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      console.log(myJson);
      x.innerHTML =
        myJson.name +
        "<br>" +
        myJson.weather[0].description +
        "<br>" +
        convertTemp(myJson.main.temp);
    });
}

//Convert Temp to Fahrenheit
function convertTemp(x) {
  x = x * 1.8 - 459.67;
  return x.toFixed(2);
}

// Current weather
// api.openweathermap.org/data/2.5/weather?lat=42.205272099999995&lon=-71.23885059999999&appid=e61a28138132f74719b96edf26b9c26b
// Forecast
// api.openweathermap.org/data/2.5/forecast?lat=42.205272099999995&lon=-71.23885059999999&appid=e61a28138132f74719b96edf26b9c26b
// const wurl = 'http://api.openweathermap.org/data/2.5/weather?lat=42.205272099999995&lon=-71.23885059999999&appid=e61a28138132f74719b96edf26b9c26b';
