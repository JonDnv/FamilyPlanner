function weatherBalloon(cityID) {
  var key = "c2b19ce1b72a2b30136891642cb070b5";
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=Denver&units=imperial" +
      cityID +
      "&appid=" +
      key
  )
    .then(function (resp) {
      return resp.json();
    }) // Convert data to json
    .then(function (data) {
      console.log(data);
    })
    .catch(function () {
      // catch any errors
    });
}

window.onload = function () {
  weatherBalloon(5419384);
};
