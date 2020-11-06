// variables for new event page
var userInput = document.getElementById("userSelect");
var days = document.getElementById("dayValue");
var time = document.getElementById("timeValue");
var duration = document.getElementById("durationValue");
var eventTextArea = document.querySelector("#event-description");
var submitButton = document.querySelector("#event-btn-submit");
var eventArray = [];
var userArray = [];
var colorSelect = "";

if (JSON.parse(localStorage.getItem("event") !== null)) {
  eventArray = JSON.parse(localStorage.getItem("event"));
} else {
  eventArray = [];
}

if (JSON.parse(localStorage.getItem("userNames") !== null)) {
  userArray = JSON.parse(localStorage.getItem("userNames"));
} else {
  userArray = [];
}

submitButton.addEventListener("click", function () {
  for (i = 0; i < userArray.length; i++) {
    if (userInput.value.trim() === userArray[i].name) {
      colorSelect = userArray[i].color;
    }
  }
  var event = {
    userSelect: userInput.value.trim(),
    userColor: colorSelect,
    daySelect: days.value,
    timeSelect: time.value,
    durSelect: duration.value,
    eventText: eventTextArea.value.trim(),
  };
  eventArray.push(event);
  localStorage.setItem("event", JSON.stringify(eventArray));
});

window.addEventListener("load", function () {
  for (i = 0; i < userArray.length; i++) {
    $(".userDropdown").append(
      '<option id="' +
        userArray[i].name +
        '">' +
        userArray[i].name +
        "</option>"
    );
  }
});
