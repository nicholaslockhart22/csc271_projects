// PRICE LIST FOR HAIRCUT TYPES 
var SERVICE_PRICES = {
  standard: 25,
  fade: 30,
  buzz: 20
};

//  BUTTON CLICK EVENT 
document.getElementById("bookBtn").addEventListener("click", function() {

  //  Collect User Input 
  var fullName = document.getElementById("fullname").value.trim();
  var chosenDay = document.getElementById("day").value;
  var chosenTime = document.getElementById("time").value;
  var serviceType = document.getElementById("service").value;
  var beardTrim = document.getElementById("beardTrim").checked;

  //  Stop if required fields are not filled 
  if (!fullName || !chosenDay || !chosenTime || !serviceType) {
    return;
  }

  // Calculate Price 
  var basePrice = SERVICE_PRICES[serviceType];
  var addOnPrice = beardTrim ? 10;
  var totalPrice = basePrice + addOnPrice;

  //  Output Message 
  var message = "Thank you " + fullName +
                " for booking a " + serviceType +
                " haircut at " + chosenTime +
                " on " + chosenDay +
                ". Your total is $" + totalPrice +
                ". We are looking forward to seeing you!";

  //  Show Message 
  var msgEl = document.getElementById("confirmation-message");
  msgEl.textContent = message;

});
