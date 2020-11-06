// variables for new event page
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
    daySelect: days.value,
    timeSelect: time.value,
    durSelect: duration.value,
    eventText: eventTextArea.value.trim(),
  };
  eventArray.push(event);
  localStorage.setItem("event", JSON.stringify(eventArray));
  console.log(eventArray);
});
