let today = new Date();
let day = today.getDate();
let month = today.getMonth() + 1; // getMonth() returns a zero-based value, so we add 1
let year = today.getFullYear();
let options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
let dateString = today.toLocaleString('nl-Nl', options);
document.getElementById("date-now").innerHTML = dateString;

var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var currentMonth = currentDate.getMonth();
var currentDay = currentDate.getDate();
var currentHour = currentDate.getUTCHours();

var minDate = new Date(currentYear, currentMonth, currentDay, 0, 0, 0);
var maxDate = new Date(currentYear, currentMonth, currentDay + 7, 23, 59, 59);

document.getElementById("appointment-time").min = minDate.toISOString().substring(0, 16);
document.getElementById("appointment-time").max = maxDate.toISOString().substring(0, 16);

function checkAvailability() {
    var selectedTime = document.getElementById("appointment-time").value;
    var selectedTimeInMinutes = parseInt(selectedTime.substring(0,2))*60 + parseInt(selectedTime.substring(3,5));
    var availableTimeSlots = [[600,720],[780,900],[960,1080],[1140,1260],[1380,1560]];
    var isAvailable = false;
    for(var i=0; i<availableTimeSlots.length; i++){
        if(selectedTimeInMinutes >= availableTimeSlots[i][0] && selectedTimeInMinutes <= availableTimeSlots[i][1]){
            isAvailable = true;
            break;
        }
    }
    if (!isAvailable) {
        alert("Not available on this time");
        document.getElementById("appointment-time").value = "";
    }
}

document.getElementById("submit").addEventListener("submit", function(event){
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var people = document.getElementById("people").value;
    var appointmentTime = document.getElementById("appointment-time").value;
    var date = document.getElementById("date").value;
    var number = document.getElementById("number").value;

    var data = "Name: " + name + "\nEmail: " + email + "\nNumber of People: " + people + "\nAppointment Time: " + appointmentTime + "\nDate: " + date + "\nPhone Number: " + number + "\n-------------------------------\n";
    console.log(data)
    var file = new Blob([data], {type: 'text/plain'});
    var a = document.createElement("a"),
            url = URL.createObjectURL(file);
    console.log(a)    
    a.href = url;
    a.download = 'ticket-data.txt';
    document.body.appendChild(a);
    a.click();
});
