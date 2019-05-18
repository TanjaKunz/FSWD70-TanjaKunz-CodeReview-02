console.log("Hello from the console :)")

var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

var n = new Date();

var year = n.getFullYear();
var month = n.getMonth();
var date = n.getDate();
var d = n.getDay();

document.getElementById("date").innerHTML = days[d-1] + ", " + date + "." + month + "." + year;
