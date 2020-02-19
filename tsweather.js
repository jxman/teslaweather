var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}

$(".btnGetloc").on("click",getLocation);

$(".btnGetWeather").on("click",getWeather);

function getWeather() {
  $.ajax({
    url: wurl,
    type: 'GET',
    success: function(res) {
        var text = res.responseBody;
        console.log ("Weather "+text);
        // then you can manipulate your text as you wish
    }
});  
}

var wurl="http://api.openweathermap.org/data/2.5/weather?lat=42.205272099999995&lon=-71.23885059999999&appid=e61a28138132f74719b96edf26b9c26b"

// api.openweathermap.org/data/2.5/weather?lat=42.205272099999995&lon=-71.23885059999999&appid=e61a28138132f74719b96edf26b9c26b