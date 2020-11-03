//Day of Week Variables
var sun = moment().startOf("week");
var sunForm = sun.format("YYYYMD");
var sunDisp = sun.format("MM/DD/YYYY");
var mon = moment(sun).add(1, "day");
var monForm = mon.format("YYYYMD");
var monDisp = mon.format("MM/DD/YYYY");
var tue = moment(sun).add(2, "day");
var tueForm = tue.format("YYYYMD");
var tueDisp = tue.format("MM/DD/YYYY");
var wed = moment(sun).add(3, "day");
var wedForm = wed.format("YYYYMD");
var wedDisp = wed.format("MM/DD/YYYY");
var thu = moment(sun).add(4, "day");
var thuForm = thu.format("YYYYMD");
var thuDisp = thu.format("MM/DD/YYYY");
var fri = moment(sun).add(5, "day");
var friForm = fri.format("YYYYMD");
var friDisp = fri.format("MM/DD/YYYY");
var sat = moment(sun).add(6, "day");
var satForm = sat.format("YYYYMD");
var satDisp = sat.format("MM/DD/YYYY");
var year = moment().year();

//Object Declaration
var weekdayArray = [
  {
    dateDay: "sun",
    dateHoli: sunForm,
    dateDisp: sunDisp,
    holiday: [],
  },
  { dateDay: "mon", dateHoli: monForm, dateDisp: monDisp, holiday: [] },
  { dateDay: "tue", dateHoli: tueForm, dateDisp: tueDisp, holiday: [] },
  { dateDay: "wed", dateHoli: wedForm, dateDisp: wedDisp, holiday: [] },
  { dateDay: "thu", dateHoli: thuForm, dateDisp: thuDisp, holiday: [] },
  { dateDay: "fri", dateHoli: friForm, dateDisp: friDisp, holiday: [] },
  { dateDay: "sat", dateHoli: satForm, dateDisp: satDisp, holiday: [] },
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
      console.log(holidayReturn);
      for (var i = 0; i < weekdayArray.length; i++) {
        for (var j = 0; j < holidayReturn.length; j++) {
          if (weekdayArray[i].dateHoli === holidayReturn[j].date) {
            if (
              weekdayArray[i].dateDay == "sun" &&
              holidayReturn[j].date.length
            ) {
              weekdayArray[0].holiday.push(holidayReturn[j].name);
            }
            if (
              weekdayArray[i].dateDay == "mon" &&
              holidayReturn[j].date.length
            ) {
              weekdayArray[1].holiday.push(holidayReturn[j].name);
            }
          }
        }
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
