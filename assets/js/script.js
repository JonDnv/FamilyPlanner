//Day of Week Variables
var sun;
var sunForm;
var mon;
var monForm;
var tue;
var tueForm;
var wed;
var wedForm;
var thu;
var thuForm;
var fri;
var friForm;
var sat;
var satForm;
var year;

sun = moment().startOf("week");
sunForm = sun.format("YYYYMD");
mon = moment(sun).add(1, "day");
monForm = mon.format("YYYYMD");
tue = moment(sun).add(2, "day");
tueForm = tue.format("YYYYMD");
wed = moment(sun).add(3, "day");
wedForm = wed.format("YYYYMD");
thu = moment(sun).add(4, "day");
thuForm = thu.format("YYYYMD");
fri = moment(sun).add(5, "day");
friForm = fri.format("YYYYMD");
sat = moment(sun).add(6, "day");
satForm = sat.format("YYYYMD");
year = moment().year();

//Holiday API
var weekdayArray = [
  sunForm,
  monForm,
  tueForm,
  wedForm,
  thuForm,
  friForm,
  satForm,
];

var holidayObject = {};
var holidayReturn = [];
var calendarificUrl =
  "https://calendarific.com/api/v2/holidays?&api_key=55789e35dae8fd62a69fde0736dc696a87e318a3&country=US&year=" +
  year;

function holiday(dateFormatted) {
  fetch(calendarificUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.response.holidays.length; i++) {
        holidayObject = {
          date:
            data.response.holidays[i].date.datetime.year.toString() +
            data.response.holidays[i].date.datetime.month.toString() +
            data.response.holidays[i].date.datetime.day.toString(),
          name: data.response.holidays[i].name,
        };
        holidayReturn.push(holidayObject);
      }
    });
}

holiday();

//Open Weather API
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
