var today = new Date();
var date = (today.toLocaleString('default', { month: 'long' }))+' '+today.getDate()+', '+today.getFullYear();
var headerDate = document.getElementById("currentDay");

console.log(date);

var time = new Date();
console.log(
  time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
);

headerDate.innerHTML = date + "<br>" + time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

