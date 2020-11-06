// variables for new event page
<<<<<<< HEAD
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
=======
var days = document.getElementById("dayValue");
var daySelectInput = days.value;
var time = document.getElementById("timeValue");
var appointmentTime = time.value;
var duration = document.getElementById("durationValue");
var appointmentDuration = duration.value;
var eventTextArea = document.querySelector("#event-description");
var submitButton = document.querySelector("#event-btn-submit");
var eventArray = [];

submitButton.addEventListener("click", function () {
  if (JSON.parse(localStorage.getItem("event") !== null)) {
    eventArray = JSON.parse(localStorage.getItem("event"));
  } else {
    eventArray = [];
  }
  var event = {
>>>>>>> f40c25ffebe44bf459fb1d3764a1928be014cf49
    daySelect: days.value,
    timeSelect: time.value,
    durSelect: duration.value,
    eventText: eventTextArea.value.trim(),
  };
<<<<<<< HEAD

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
=======
  eventArray.push(event);
  localStorage.setItem("event", JSON.stringify(eventArray));
  console.log(eventArray);
});
>>>>>>> f40c25ffebe44bf459fb1d3764a1928be014cf49
