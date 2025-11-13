/*
  Author: Nick Lockhart
  Date: October 21, 2025
  File: decisionTree.js
  Description: Interactive haircut recommendation 
*/

// Section 1: Haircut Decision Tree 


var app = document.getElementById("decisionTree");

// Step 1: Haircut data and starting setup
var recommendations = {
  crew: "Crew Cut — clean, classic, and easy to maintain.",
  fade: "Fade Haircut — modern, sharp, and stylish.",
  curly: "Curly Top — show off your natural curls and volume.",
  textured: "Long Textured Style — relaxed and layered for straight hair."
};

var step = 1;
var questionEl = document.createElement("h2");
var buttonContainer = document.createElement("div");
var resultEl = document.createElement("p");
resultEl.id = "result";
buttonContainer.className = "button-group";

app.appendChild(questionEl);
app.appendChild(buttonContainer);
app.appendChild(resultEl);

// Start the process
startDecisionTree();

// Function to restart
function resetDecisionTree() {
  step = 1;
  resultEl.textContent = "";
  startDecisionTree();
}

// Main logic controller
function startDecisionTree() {
  buttonContainer.innerHTML = "";
  if (step === 1) {
    questionEl.textContent = "Do you prefer short or long hair?";
    createButtons(["Short", "Long"], handleLength);
  } else if (step === 2) {
    questionEl.textContent = "Do you want a low-maintenance or styled look?";
    createButtons(["Low-Maintenance", "Styled"], handleMaintenance);
  } else if (step === 3) {
    questionEl.textContent = "Is your hair curly or straight?";
    createButtons(["Curly", "Straight"], handleTexture);
  }
}

//  Create buttons 
function createButtons(options, callback) {
  buttonContainer.innerHTML = "";
  for (var i = 0; i < options.length; i++) {
    var btn = document.createElement("button");
    btn.textContent = options[i];
    btn.className = "optionBtn";
    btn.addEventListener("click", function() {
      callback(this.textContent);
    });
    buttonContainer.appendChild(btn);
  }
}

// Length Decision Node
function handleLength(choice) {
  // Boolean evaluation example 1
  var shortHair = (choice === "Short");
  var longHair = (choice === "Long");

  if (shortHair) {
    step = 2;
    startDecisionTree();
  } else if (longHair) {
    step = 3;
    startDecisionTree();
  }
}

// Maintenance Decision Node
function handleMaintenance(choice) {
  // Boolean evaluation example 2 
  var lowMaintenance = (choice === "Low-Maintenance");
  var styled = (choice === "Styled");
  var validShortChoice = (step === 2 && (lowMaintenance || styled));

  if (validShortChoice && lowMaintenance) {
    resultEl.textContent = recommendations.crew;
  } else if (validShortChoice && styled) {
    resultEl.textContent = recommendations.fade;
  } else {
    resultEl.textContent = "Invalid choice. Please try again.";
  }
  showRestart();
}

// Step 3: Texture Decision Node
function handleTexture(choice) {
  // Boolean evaluation example 3
  var curly = (choice === "Curly");
  var straight = (choice === "Straight");

  if (curly) {
    resultEl.textContent = recommendations.curly;
  } else if (straight) {
    resultEl.textContent = recommendations.textured;
  } else {
    resultEl.textContent = "Please select curly or straight.";
  }
  showRestart();
}

// Restart button
function showRestart() {
  buttonContainer.innerHTML = "";
  var restartBtn = document.createElement("button");
  restartBtn.textContent = "Try Again";
  restartBtn.className = "restartBtn";
  restartBtn.addEventListener("click", resetDecisionTree);
  buttonContainer.appendChild(restartBtn);
}

// Dynamic Content with Loops
// FOR LOOP — display featured services
var services = ["Fade Haircut", "Crew Cut", "Buzz Cut", "Beard Trim"];
var serviceList = document.getElementById("loop-output1");
serviceList.innerHTML = "<h3>Featured Services:</h3>";

for (var i = 0; i < services.length; i++) {
  serviceList.innerHTML += "<p>💈 " + services[i] + "</p>";
}

// WHILE LOOP — simulate countdown to next available booking slot
var timeEl = document.getElementById("loop-output2");
var countdown = 3; // next available booking in 3 hours
var message = "<h3>Next Available Booking Countdown:</h3>";

while (countdown >= 1) {
  message += "<p>⏳ " + countdown + " hour(s) remaining...</p>";
  countdown--;
}

// Section 3: Looping Through a NodeList


// Get NodeList of navigation list items
var navItems = document.querySelectorAll("nav ul li");

// Check if any elements were found
if (navItems.length > 0) {
  // Loop through each list item
  for (var i = 0; i < navItems.length; i++) {
    // Add a haircut emoji icon and emphasize the text
    navItems[i].style.fontWeight = "bold";
    navItems[i].style.color = "#304d30";
    navItems[i].innerHTML = " 💈 " + navItems[i].innerHTML;
  }
} else {
  console.log("No navigation list items found.");
}

message += "<p>✅ A chair is now open! Book your appointment.</p>";
timeEl.innerHTML = message;
