const x = document.getElementById("demo");
// const wurl = 'http://api.openweathermap.org/data/2.5/weather?lat=42.205272099999995&lon=-71.23885059999999&appid=e61a28138132f74719b96edf26b9c26b';

$(".btnGetloc").on("click",getLocation);

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getWeather);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function getWeather(position){
  const getLat=position.coords.latitude;
  const getLon=position.coords.longitude;

  const wurl = 'http://api.openweathermap.org/data/2.5/weather?lat='+ getLat + '&lon=' + getLon + '&appid=e61a28138132f74719b96edf26b9c26b';
  console.log(wurl);

  fetch(wurl)
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
    x.innerHTML = myJson.name +
    "<br>"+ myJson.weather[0].description +
    "<br>"+ convertTemp(myJson.main.temp);
  });
}

function convertTemp(x){
  x=((x*1.8)-459.67);
  return x.toFixed(2);
};

// Current weather
// api.openweathermap.org/data/2.5/weather?lat=42.205272099999995&lon=-71.23885059999999&appid=e61a28138132f74719b96edf26b9c26b
// Forecast
// api.openweathermap.org/data/2.5/forecast?lat=42.205272099999995&lon=-71.23885059999999&appid=e61a28138132f74719b96edf26b9c26b