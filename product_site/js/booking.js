// PRICE LIST FOR HAIRCUT TYPES 
var SERVICE_PRICES = {
  standard: 25,
  fade: 30,
  buzz: 20
};

// FUNCTION: calculateDiscount
// Applies 10% discount if student or military is checked
function calculateDiscount(total, isStudent, isMilitary) {
  if (isStudent || isMilitary) {
    total = total - (total * 0.10);
  }
  return total;
}

// BUTTON CLICK EVENT
document.getElementById("bookBtn").addEventListener("click", function() {

  // Collect User Input 
  var fullName = document.getElementById("fullname").value.trim();
  var chosenDay = document.getElementById("day").value;
  var chosenTime = document.getElementById("time").value;
  var serviceType = document.getElementById("service").value;
  var beardTrim = document.getElementById("beardTrim").checked;
  var isStudent = document.getElementById("studentDiscount").checked;
  var isMilitary = document.getElementById("militaryDiscount").checked;

  // Stop if required fields are not filled 
  if (!fullName || !chosenDay || !chosenTime || !serviceType) {
    return;
  }

  // Calculate Base Price 
  var basePrice = SERVICE_PRICES[serviceType];
  var addOnPrice = beardTrim ? 10 : 0;
  var totalPrice = basePrice + addOnPrice;

  // Apply discount (10% off if either box is checked)
  totalPrice = calculateDiscount(totalPrice, isStudent, isMilitary);

  // Output Confirmation Message 
  var message = "Thank you " + fullName +
                " for booking a " + serviceType +
                " haircut at " + chosenTime +
                " on " + chosenDay + ". ";

  if (isStudent || isMilitary) {
    message += "Your 10% discount has been applied. ";
  }

  message += "Your total is $" + totalPrice +
             ". We are looking forward to seeing you!";

  // Display Confirmation 
  var msgEl = document.getElementById("confirmation-message");
  msgEl.textContent = message;
});
