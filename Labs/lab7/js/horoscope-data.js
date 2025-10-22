// Author: Nick Lockhart
// Date: October 22, 2025
// Lab 7 – Horoscope Data Script

var zodiacSign = "Aquarius";
var birthMonth = "January";
var birthday = 25;
var luckyNumber = 8.4;
var horoscopeDescription = "Independent, creative, and driven by big ideas.";
var believeInAstrology = false;

document.getElementById("mySign").textContent = zodiacSign;
document.getElementById("birthday").textContent += " " + birthMonth + " " + birthday + "th";
document.getElementById("luckyNumber").textContent += " " + luckyNumber;
document.getElementById("horoscopeText").textContent = horoscopeDescription;
document.getElementById("beliefText").innerHTML +=
  " <strong>Believes in astrology: " + believeInAstrology + "</strong>";

// === MOOD RATINGS ===
var myMoodRating = 4.5;
var geminiMood = 3.6;
var averageMood = (myMoodRating + geminiMood) / 2;
var moodMessage = "Today's mood rating for " + zodiacSign + ": " + myMoodRating + ". ";
moodMessage += "The average mood rating of " + zodiacSign + " and Gemini is: " + averageMood.toFixed(1) + ".";
document.getElementById("moodMessage").textContent = moodMessage;

// === ZODIAC SIGN ARRAY ===
var zodiacSigns = [
  "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
  "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
];

var myZodiac = zodiacSigns[10]; // Aquarius
var mithileshZodiac = zodiacSigns[2]; 
var angelZodiac = zodiacSigns[2]; // Gemini


var zodiacMessage =
  "My zodiac sign is: " + myZodiac + ". " +
  "Mithilesh’s zodiac sign is: " + mithileshZodiac + ". " +
  "Angel’s zodiac sign is: " + angelZodiac + ".";
document.getElementById("zodiacMessage").textContent = zodiacMessage;

// === HOROSCOPE DESCRIPTIONS ===
var horoscopeDescriptions = [
  "Today is a day for new beginnings. Embrace change and seize opportunities.",
  "Your determination will lead to success today. Stay focused on your goals.",
  "Communication is key today. Express yourself clearly and listen to others.",
  "Trust your intuition. It will guide you in making the right decisions.",
  "Your creativity shines today. Use it to inspire and lead others.",
  "Pay attention to the details. Your meticulous work will pay off.",
  "Balance is essential. Find harmony in all aspects of your life.",
  "Embrace transformation. Let go of what no longer serves you.",
  "Adventure awaits. Explore new horizons and expand your horizons.",
  "Hard work leads to success. Keep pushing toward your goals.",
  "Your unique perspective is an asset. Share your ideas with others.",
  "Trust your emotions. They will guide you in making the right choices."
];

// Access descriptions
var myHoroscope = horoscopeDescriptions[10];      
var mithileshHoroscope = horoscopeDescriptions[6]; 
var angelHoroscope = horoscopeDescriptions[4];     

// Change one message 
horoscopeDescriptions[10] = "Think outside the box — innovation leads the way today!";

// Display 
var horoscopeMessage =
  myZodiac + " Horoscope: " + horoscopeDescriptions[10] + " " +
  mithileshZodiac + " Horoscope: " + mithileshHoroscope + " " +
  angelZodiac + " Horoscope: " + angelHoroscope;
document.getElementById("horoscopeMessage").textContent = horoscopeMessage;
