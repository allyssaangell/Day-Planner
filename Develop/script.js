var today = new Date();
var date = (today.toLocaleString('default', { month: 'long' }))+' '+today.getDate()+', '+today.getFullYear();
var headerDate = document.getElementById("currentDay");

console.log(date);

var time = new Date();
console.log(
  time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
);

headerDate.innerHTML = date + "<br>" + time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

// Save text to local Storage per button click, get per key after reload
document.getElementById("buttonOne").addEventListener("click", function(){localStorage.setItem("textAreaOne",document.getElementById("textAreaOne").value);});
document.getElementById("textAreaOne").innerHTML = localStorage.getItem("textAreaOne");

document.getElementById("buttonTwo").addEventListener("click", function(){localStorage.setItem("textAreaTwo",document.getElementById("textAreaTwo").value);});
document.getElementById("textAreaTwo").innerHTML = localStorage.getItem("textAreaTwo");

document.getElementById("buttonThree").addEventListener("click", function(){localStorage.setItem("textAreaThree",document.getElementById("textAreaThree").value);});
document.getElementById("textAreaThree").innerHTML = localStorage.getItem("textAreaThree");

document.getElementById("buttonFour").addEventListener("click", function(){localStorage.setItem("textAreaFour",document.getElementById("textAreaFour").value);});
document.getElementById("textAreaFour").innerHTML = localStorage.getItem("textAreaFour");

document.getElementById("buttonFive").addEventListener("click", function(){localStorage.setItem("textAreaFive",document.getElementById("textAreaFive").value);});
document.getElementById("textAreaFive").innerHTML = localStorage.getItem("textAreaFive");

document.getElementById("buttonSix").addEventListener("click", function(){localStorage.setItem("textAreaSix",document.getElementById("textAreaSix").value);});
document.getElementById("textAreaSix").innerHTML = localStorage.getItem("textAreaSix");

document.getElementById("buttonSeven").addEventListener("click", function(){localStorage.setItem("textAreaSeven",document.getElementById("textAreaSeven").value);});
document.getElementById("textAreaSeven").innerHTML = localStorage.getItem("textAreaSeven");

document.getElementById("buttonEight").addEventListener("click", function(){localStorage.setItem("textAreaEight",document.getElementById("textAreaEight").value);});
document.getElementById("textAreaEight").innerHTML = localStorage.getItem("textAreaEight");

document.getElementById("buttonNine").addEventListener("click", function(){localStorage.setItem("textAreaNine",document.getElementById("textAreaNine").value);});
document.getElementById("textAreaNine").innerHTML = localStorage.getItem("textAreaNine");



//appendChild to myTable to contain the table row tags and using a for loop add in the hours
//make the hour a key, so you can read and write to that key 
//for each hour, create a key in local storage
//on page load, iterate through the hours and show the hours that have data in them