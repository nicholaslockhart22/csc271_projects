
//
  //Author: Nick Lockhart
  //Date: Nov 18, 2025
  //File: booking.js
  //Description: js for booking apt.
// PRICE LIST FOR HAIRCUT TYPES 
var SERVICE_PRICES = {
  standard: 25,
  fade: 30,
  buzz: 20
};



//  Select form elements 
var fullNameInput = document.getElementById("fullname");
var serviceInput = document.getElementById("service");
var dayInput = document.getElementById("day");
var timeInput = document.getElementById("time");
var form = document.getElementById("bookingForm");
var msgEl = document.getElementById("confirmation-message");

// Focus Events: Give user feedback 
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
  msgEl.textContent = "Select a time slot available between 9AM–5PM.";
});

// Blur Events: 

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

// FORM SUBMISSION EVENT 
form.addEventListener("submit", function(event) {
  event.preventDefault(); // stop form from reloading page
  msgEl.textContent = "Your responses were successfully recorded!";
});

// BUTTON CLICK EVENT 
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

  // Calculate Price 
  var basePrice = SERVICE_PRICES[serviceType];
  var addOnPrice = beardTrim ? 10 : 0;
  var totalPrice = basePrice + addOnPrice;

  // Output Message 
  var message = "Thank you " + fullName +
                " for booking a " + serviceType +
                " haircut at " + chosenTime +
                " on " + chosenDay +
                ". Your total is $" + totalPrice +
                ". We are looking forward to seeing you!";

  // Show Message  
  msgEl.textContent = message;
});
