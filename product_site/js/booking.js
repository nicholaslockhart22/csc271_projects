//
//  Author: Nick Lockhart
//  Date: Nov 18, 2025
//  File: booking.js
//  Description: js for booking apt + object constructor + validation
//

// ===============================
// PRICE LIST FOR HAIRCUT TYPES 
// ===============================
var SERVICE_PRICES = {
  standard: 25,
  fade: 30,
  buzz: 20
};

// ===============================
// BOOKING OBJECT CONSTRUCTOR
// ===============================
function Booking(name, service, day, time, beardTrim) {
  this.name = name;
  this.service = service;
  this.day = day;
  this.time = time;
  this.beardTrim = beardTrim;

  // method: calculate price
  this.calculateTotal = function() {
    var base = SERVICE_PRICES[this.service];
    var addOn = this.beardTrim ? 10 : 0;
    return base + addOn;
  };

  // method: formatted confirmation message
  this.confirmMessage = function() {
    return (
      this.name +
      " booked a " + this.service +
      " haircut on " + this.day +
      " at " + this.time +
      ". Total: $" + this.calculateTotal()
    );
  };
}

// Create two example booking objects
var example1 = new Booking("John Doe", "fade", "Tuesday", "2:00 PM", true);
var example2 = new Booking("Emily Smith", "buzz", "Friday", "11:00 AM", false);

// Display objects on page
var outputArea = document.getElementById("object-output");
if (outputArea) {
  outputArea.innerHTML =
    "<h3>Example Booking Objects</h3>" +
    "<p>" + example1.confirmMessage() + "</p>" +
    "<p>" + example2.confirmMessage() + "</p>";
}

// ===============================
//  Select form elements 
// ===============================
var fullNameInput = document.getElementById("fullname");
var serviceInput = document.getElementById("service");
var dayInput = document.getElementById("day");
var timeInput = document.getElementById("time");
var form = document.getElementById("bookingForm");
var msgEl = document.getElementById("confirmation-message");

// ===============================
// Focus Events
// ===============================
fullNameInput.addEventListener("focus", function() {
  msgEl.textContent = "Please enter your full name. It cannot be left blank.";
});

serviceInput.addEventListener("focus", function() {
  msgEl.textContent = "Choose a haircut from the list.";
});

dayInput.addEventListener("focus", function() {
  msgEl.textContent = "Pick a weekday for your appointment.";
});

timeInput.addEventListener("focus", function() {
  msgEl.textContent = "Select a time between 9AM–5PM.";
});

// ===============================
// Blur Events (validation)
// ===============================
fullNameInput.addEventListener("blur", function() {
  if (fullNameInput.value.trim() === "") {
    msgEl.textContent = "Error: Name cannot be blank.";
  } else {
    msgEl.textContent = "";
  }
});

serviceInput.addEventListener("blur", function() {
  if (serviceInput.value === "") {
    msgEl.textContent = "Error: You must choose a haircut service.";
  } else {
    msgEl.textContent = "";
  }
});

dayInput.addEventListener("blur", function() {
  if (dayInput.value === "") {
    msgEl.textContent = "Error: Please select a day.";
  } else {
    msgEl.textContent = "";
  }
});

timeInput.addEventListener("blur", function() {
  if (timeInput.value === "") {
    msgEl.textContent = "Error: You must choose a time.";
  } else {
    msgEl.textContent = "";
  }
});

// ===============================
// FORM SUBMISSION EVENT 
// ===============================
form.addEventListener("submit", function(event) {
  event.preventDefault();
  msgEl.textContent = "Your responses were successfully recorded!";
});

// ===============================
// BOOK BUTTON CLICK EVENT 
// ===============================
document.getElementById("bookBtn").addEventListener("click", function() {

  // Collect User Input 
  var fullName = fullNameInput.value.trim();
  var chosenDay = dayInput.value;
  var chosenTime = timeInput.value;
  var serviceType = serviceInput.value;
  var beardTrim = document.getElementById("beardTrim").checked;

  // Stop if required fields are not filled 
  if (!fullName || !chosenDay || !chosenTime || !serviceType) {
    msgEl.textContent = "Please complete all required fields before booking.";
    return;
  }

  // Create a Booking object from user input
  var userBooking = new Booking(fullName, serviceType, chosenDay, chosenTime, beardTrim);

  // Output Message  
  msgEl.textContent = userBooking.confirmMessage();
});
