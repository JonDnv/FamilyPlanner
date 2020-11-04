//Day of Week Variables
var sun = moment().startOf("week");
var sunForm = sun.format("YYYYMD");
var sunDisp = sun.format("M/D/YYYY");
var mon = moment(sun).add(1, "day");
var monForm = mon.format("YYYYMD");
var monDisp = mon.format("M/D/YYYY");
var tue = moment(sun).add(2, "day");
var tueForm = tue.format("YYYYMD");
var tueDisp = tue.format("M/D/YYYY");
var wed = moment(sun).add(3, "day");
var wedForm = wed.format("YYYYMD");
var wedDisp = wed.format("M/D/YYYY");
var thu = moment(sun).add(4, "day");
var thuForm = thu.format("YYYYMD");
var thuDisp = thu.format("M/D/YYYY");
var fri = moment(sun).add(5, "day");
var friForm = fri.format("YYYYMD");
var friDisp = fri.format("M/D/YYYY");
var sat = moment(sun).add(6, "day");
var satForm = sat.format("YYYYMD");
var satDisp = sat.format("M/D/YYYY");
var year = moment().year();

//Object Declaration
var weekdayArray = [
  {
    dateDay: "sun",
    dateHoli: sunForm,
    dateDisp: sunDisp,
    holiday: [],
    weather: {},
  },
  {
    dateDay: "mon",
    dateHoli: monForm,
    dateDisp: monDisp,
    holiday: [],
    weather: {},
  },
  {
    dateDay: "tue",
    dateHoli: tueForm,
    dateDisp: tueDisp,
    holiday: [],
    weather: {},
  },
  {
    dateDay: "wed",
    dateHoli: wedForm,
    dateDisp: wedDisp,
    holiday: [],
    weather: {},
  },
  {
    dateDay: "thu",
    dateHoli: thuForm,
    dateDisp: thuDisp,
    holiday: [],
    weather: {},
  },
  {
    dateDay: "fri",
    dateHoli: friForm,
    dateDisp: friDisp,
    holiday: [],
    weather: {},
  },
  {
    dateDay: "sat",
    dateHoli: satForm,
    dateDisp: satDisp,
    holiday: [],
    weather: {},
  },
];

console.log(weekdayArray);

//Holiday API Fetch
var holidayObject = {};
var holidayReturn = [];
var sunHolidays = {};
var monHolidays = {};
var tueHolidays = {};
var wedHolidays = {};
var thuHolidays = {};
var friHolidays = {};
var satHolidays = {};
var holidayArray = [];

var calendarificUrl =
  "https://calendarific.com/api/v2/holidays?&api_key=55789e35dae8fd62a69fde0736dc696a87e318a3&country=US&year=" +
  year;

function holiday() {
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
    })
    .then(function () {
      for (var i = 0; i < weekdayArray.length; i++) {
        for (var j = 0; j < holidayReturn.length; j++) {
          if (weekdayArray[i].dateHoli === holidayReturn[j].date) {
            weekdayArray[i].holiday.push(holidayReturn[j].name);
          }
        }
      }
    });
}

//Function to Change Unix Time to Local Time
function toLocalDate(unixTime) {
  var unixDate = new Date(unixTime * 1000);
  return unixDate.toLocaleDateString("en-US");
}

//Open Weather API
var cityName = "";
var stateName = "";
var lattitude = "";
var longitude = "";
var key = "c2b19ce1b72a2b30136891642cb070b5";

function weatherBalloon(city, state) {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "," +
      state +
      "&units=imperial" +
      "&appid=" +
      key
  )
    .then(function (resp) {
      return resp.json();
    }) // Convert data to json
    .then(function (data) {
      lattitude = data.coord.lat;
      longitude = data.coord.lon;

      fetch(
        "https://api.openweathermap.org/data/2.5/onecall?lat=" +
          lattitude +
          "&lon=" +
          longitude +
          "&units=imperial&exclude=minutely,hourly,alerts" +
          "&appid=" +
          key
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (oneCallData) {
          for (var i = 0; i < weekdayArray.length; i++) {
            for (var j = 0; j < oneCallData.daily.length; j++) {
              if (weekdayArray[i].dateDisp < moment().format("M/D/YYY")) {
                (weekdayArray[i].weather.date = weekdayArray[i].dateDisp),
                  (weekdayArray[i].weather.lowTemp = "N/A"),
                  (weekdayArray[i].weather.highTemp = "N/A"),
                  (weekdayArray[i].weather.uvIndex = "N/A"),
                  (weekdayArray[i].weather.windSpeed = "N/A"),
                  (weekdayArray[i].weather.icon =
                    "https://openweathermap.org/img/wn/01n@2x.png");
              } else if (
                weekdayArray[i].dateDisp ===
                toLocalDate(oneCallData.daily[j].dt)
              ) {
                (weekdayArray[i].weather.date = toLocalDate(
                  oneCallData.daily[j].dt
                )),
                  (weekdayArray[i].weather.lowTemp =
                    oneCallData.daily[j].temp.min),
                  (weekdayArray[i].weather.highTemp =
                    oneCallData.daily[j].temp.max),
                  (weekdayArray[i].weather.uvIndex = oneCallData.daily[j].uvi),
                  (weekdayArray[i].weather.windSpeed =
                    oneCallData.daily[j].wind_speed),
                  (weekdayArray[i].weather.icon =
                    "https://openweathermap.org/img/wn/" +
                    oneCallData.daily[j].weather[0].icon +
                    "@2x.png");
              }
            }
          }
        });
    });
}

holiday();
weatherBalloon(cityName, stateName);
