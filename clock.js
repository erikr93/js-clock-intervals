var msSecond = 1000;
var msMinute = 60000;
var msHour = 3600000;

var secondRotation = document.getElementById("second");
deg = 6;
setInterval(function(){
	secondRotation.style.transform = "rotate(" + deg + "deg)";
	deg = (deg + 6) % 360
},msSecond);


var hourRotation = document.getElementById("hour");
setInterval(function(){
	hourRotation.style.transform = "rotate(" + 360 + "deg)";
	deg = (deg + 30 ) % 360
},msHour);

var minuteRotation = document.getElementById("minute");
setInterval(function(){
	minuteRotation.style.transform = "rotate(" + deg + "deg)";
	deg = (deg + 6) % 360
},msMinute);

secondRotation();
minuteRotation();
hourRotation();

