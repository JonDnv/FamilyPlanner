var eventArray = [];

if (JSON.parse(localStorage.getItem("event") !== null)) {
  eventArray = JSON.parse(localStorage.getItem("event"));
  console.log(JSON.parse(localStorage.getItem("event")));
} else {
  eventArray = [];
}

function displayDateTime() {
  for (var i = 0; i < eventArray.length; i++) {
    var durationArray = [];
    var duration;
    var startDate;
    var startTime;

    var startDay =
      eventArray[i].daySelect.charAt(0).toLowerCase() +
      eventArray[i].daySelect.charAt(1).toLowerCase() +
      eventArray[i].daySelect.charAt(2).toLowerCase();

    var amPM = eventArray[i].timeSelect;
    amPM = amPM.slice(-2);

    if (eventArray[i].durSelect === "day") {
      startTime = 7;
    } else {
      startTime = eventArray[i].timeSelect;
      startTime = startTime.slice(0, -2);
    }

    if (amPM === "pm" && parseInt(startTime) < 12) {
      startTime = parseInt(startTime) + 12;
    }

    startDate = startDay + startTime;
    durationArray.push(startDate);

    var dataDisplay = document.getElementById(startDate);
    dataDisplay.append(
      eventArray[i].userSelect + " - " + eventArray[i].eventText
    );

    document.getElementById(startDate).style.color = "white";

    if (eventArray[i].durSelect !== "day") {
      duration = eventArray[i].durSelect;
      duration = duration.slice(0, -2);
    } else {
      duration = 14;
    }

    var startTimeInt = parseInt(startTime);
    var durationInt;
    var timePeriod = startTimeInt;

    if (parseInt(duration) + startTimeInt > 20) {
      durationInt = 22;
    } else {
      durationInt = parseInt(duration) + startTimeInt;
    }

    for (var j = startTimeInt; j < durationInt - 1; j++) {
      var timePeriod = timePeriod + 1;
      var dateTimePeriod = startDay + timePeriod;
      durationArray.push(dateTimePeriod);
    }

    for (var k = 0; k < durationArray.length; k++) {
      console.log(durationArray[k]);
      document.getElementById(durationArray[k]).style.backgroundColor =
        eventArray[i].userColor;
    }
  }
}

window.addEventListener("load", function () {
  displayDateTime();
});
