// variables for new event page
var user = document.getElementById("userValue");
var days = document.getElementById("dayValue");
var time = document.getElementById("timeValue");
var duration = document.getElementById("durationValue");
var eventTextArea = document.querySelector("#event-description");
var submitButton = document.querySelector("#event-btn-submit");
var eventArray = [];
var userArray = [];
var userColor = "";

if (JSON.parse(localStorage.getItem("userNames") !== null)) {
  userArray = JSON.parse(localStorage.getItem("userNames"));
} else {
  userArray = [];
}

if (JSON.parse(localStorage.getItem("event") !== null)) {
  eventArray = JSON.parse(localStorage.getItem("event"));
} else {
  eventArray = [];
}

submitButton.addEventListener("click", function (userArray, eventArray) {
  var event = {
    userSelect: user.value,
    // colorCode: userColor,
    daySelect: days.value,
    timeSelect: time.value,
    durSelect: duration.value,
    eventText: eventTextArea.value.trim(),
  };

  eventArray.push(event);
  console.log(event);
  localStorage.setItem("event", JSON.stringify(eventArray));
  console.log(eventArray);
});

window.addEventListener("load", function () {
  for (i = 0; i < userObject.length; i++) {
    $(".userDropdown").append("<option>" + userObject[i].name + "</option>");
  }
});
