var today = new Date();
var date =
  today.toLocaleString("default", { month: "long" }) +
  " " +
  today.getDate() +
  ", " +
  today.getFullYear();
var headerDate = document.getElementById("currentDay");

console.log(date);

var time = new Date();

headerDate.innerHTML =
  date +
  "<br>" +
  moment().format("HHmm");

// Save text to local Storage per button click, get per key after reload
document.getElementById("buttonOne").addEventListener("click", function () {
  localStorage.setItem(
    "textAreaOne",
    document.getElementById("textAreaOne").value
  );
});
document.getElementById("textAreaOne").innerHTML =
  localStorage.getItem("textAreaOne");

document.getElementById("buttonTwo").addEventListener("click", function () {
  localStorage.setItem(
    "textAreaTwo",
    document.getElementById("textAreaTwo").value
  );
});
document.getElementById("textAreaTwo").innerHTML =
  localStorage.getItem("textAreaTwo");

document.getElementById("buttonThree").addEventListener("click", function () {
  localStorage.setItem(
    "textAreaThree",
    document.getElementById("textAreaThree").value
  );
});
document.getElementById("textAreaThree").innerHTML =
  localStorage.getItem("textAreaThree");

document.getElementById("buttonFour").addEventListener("click", function () {
  localStorage.setItem(
    "textAreaFour",
    document.getElementById("textAreaFour").value
  );
});
document.getElementById("textAreaFour").innerHTML =
  localStorage.getItem("textAreaFour");

document.getElementById("buttonFive").addEventListener("click", function () {
  localStorage.setItem(
    "textAreaFive",
    document.getElementById("textAreaFive").value
  );
});
document.getElementById("textAreaFive").innerHTML =
  localStorage.getItem("textAreaFive");

document.getElementById("buttonSix").addEventListener("click", function () {
  localStorage.setItem(
    "textAreaSix",
    document.getElementById("textAreaSix").value
  );
});
document.getElementById("textAreaSix").innerHTML =
  localStorage.getItem("textAreaSix");

document.getElementById("buttonSeven").addEventListener("click", function () {
  localStorage.setItem(
    "textAreaSeven",
    document.getElementById("textAreaSeven").value
  );
});
document.getElementById("textAreaSeven").innerHTML =
  localStorage.getItem("textAreaSeven");

document.getElementById("buttonEight").addEventListener("click", function () {
  localStorage.setItem(
    "textAreaEight",
    document.getElementById("textAreaEight").value
  );
});
document.getElementById("textAreaEight").innerHTML =
  localStorage.getItem("textAreaEight");

document.getElementById("buttonNine").addEventListener("click", function () {
  localStorage.setItem(
    "textAreaNine",
    document.getElementById("textAreaNine").value
  );
});
document.getElementById("textAreaNine").innerHTML =
  localStorage.getItem("textAreaNine");

// row color
let rowHourOne = document.getElementById("hourOne").textContent;
let rowHourTwo = document.getElementById("hourTwo").textContent;
let rowHourThree = document.getElementById("hourThree").textContent;
let rowHourFour = document.getElementById("hourFour").textContent;
let rowHourFive = document.getElementById("hourFive").textContent;
let rowHourSix = document.getElementById("hourSix").textContent;
let rowHourSeven = document.getElementById("hourSeven").textContent;
let rowHourEight = document.getElementById("hourEight").textContent;
let rowHourNine = document.getElementById("hourNine").textContent;
 
let currentHour = moment().format("HH") + 0 +  0

if (rowHourOne === currentHour) {
    var presentHour = document.getElementById("textAreaOne");
    presentHour.classList.add("present");
  } else if (currentHour > rowHourOne) {
      var presentHour = document.getElementById("textAreaOne");
    presentHour.classList.add("past");
  } else {
      var presentHour = document.getElementById("textAreaOne");
      presentHour.classList.add("future");
  }

  if (rowHourTwo === currentHour) {
    var presentHour = document.getElementById("textAreaTwo");
    presentHour.classList.add("present");
  } else if (currentHour > rowHourTwo) {
      var presentHour = document.getElementById("textAreaTwo");
    presentHour.classList.add("past");
  } else {
      var presentHour = document.getElementById("textAreaTwo");
      presentHour.classList.add("future");
  }

  if (rowHourThree === currentHour) {
    var presentHour = document.getElementById("textAreaThree");
    presentHour.classList.add("present");
  } else if (currentHour > rowHourThree) {
      var presentHour = document.getElementById("textAreaThree");
    presentHour.classList.add("past");
  } else {
      var presentHour = document.getElementById("textAreaThree");
      presentHour.classList.add("future");
  }

  if (rowHourFour === currentHour) {
    var presentHour = document.getElementById("textAreaFour");
    presentHour.classList.add("present");
  } else if (currentHour > rowHourFour) {
      var presentHour = document.getElementById("textAreaFour");
    presentHour.classList.add("past");
  } else {
      var presentHour = document.getElementById("textAreaFour");
      presentHour.classList.add("future");
  }

if (rowHourFive === currentHour) {
    var presentHour = document.getElementById("textAreaFive");
    presentHour.classList.add("present");
  } else if (currentHour > rowHourFive) {
      var presentHour = document.getElementById("textAreaFive");
    presentHour.classList.add("past");
  } else {
      var presentHour = document.getElementById("textAreaFive");
      presentHour.classList.add("future");
  }

  if (rowHourSix === currentHour) {
    var presentHour = document.getElementById("textAreaSix");
    presentHour.classList.add("present");
  } else if (currentHour > rowHourSix) {
      var presentHour = document.getElementById("textAreaSix");
    presentHour.classList.add("past");
  } else {
      var presentHour = document.getElementById("textAreaSix");
      presentHour.classList.add("future");
  }

  if (rowHourSeven === currentHour) {
    var presentHour = document.getElementById("textAreaSeven");
    presentHour.classList.add("present");
  } else if (currentHour > rowHourSeven) {
      var presentHour = document.getElementById("textAreaSeven");
    presentHour.classList.add("past");
  } else {
      var presentHour = document.getElementById("textAreaSeven");
      presentHour.classList.add("future");
  }

  if (rowHourEight === currentHour) {
    var presentHour = document.getElementById("textAreaEight");
    presentHour.classList.add("present");
  } else if (currentHour > rowHourEight) {
      var presentHour = document.getElementById("textAreaEight");
    presentHour.classList.add("past");
  } else {
      var presentHour = document.getElementById("textAreaEight");
      presentHour.classList.add("future");
  }

  if (rowHourNine === currentHour) {
    var presentHour = document.getElementById("textAreaNine");
    presentHour.classList.add("present");
  } else if (currentHour > rowHourNine) {
      var presentHour = document.getElementById("textAreaNine");
    presentHour.classList.add("past");
  } else {
      var presentHour = document.getElementById("textAreaNine");
      presentHour.classList.add("future");
  }