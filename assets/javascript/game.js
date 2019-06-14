
// // Make variables for each function that must be produced
// var score = "";
// var wins = "";
// var losses = "";
// var result = "";
// var randomDisplay = "";


crystals = ['assets/images/ruby.png','assets/images/blue.png', 'assets/images/pink.png', 'assets/images/green.png'];


  
  
  
//     //    Have a random number produce and appear when you click the crystals 
//          $(document).ready(function() {
      
//              $("#crystals").on("click", function() {

//         // generate a random number
//         var random = Math.floor(Math.random() * 1000) + 1;

//         // dump the random number into html section Result.
//         $("#random-number").text(random);


// Below are directions from past crystal activity to aid with pseudo coding

// var targetNumber = insertRandomNumberHere;

$("#number-to-guess").text(targetNumber);

var counter = 0;

// Create multiple crystals each with their own unique number value.

// We begin by expanding our array to include numerical range.
var numberOptions = [10, 5, 3, 7];

// Next we create a for loop to create crystals for every numberOption.
for (var i = 0; i < numberOptions.length; i++) {

  // For each iteration, create an imageCrystal
  var imageCrystal = $("<img>");

  // First each crystal will be given the class ".crystals".
  // This will allow the CSS to take effect.
  imageCrystal.addClass("crystals");

  // Each imageCrystal will be given a src link to the crystal image- need to rework this
  imageCrystal.attr("src", "C:\Users\cranc\Desktop\Camp\unit-4-game\assets\images\pink.png");

  // Each imageCrystal will be given a data attribute called data-crystalValue.
  // This data attribute will be set equal to the array value.
  imageCrystal.attr("data-crystalvalue", numberOptions[i]);



// click event applies to every single crystal on the page. Not just one.
$(".crystals").on("click", function() {

  // Determining the crystal's value requires us to extract the value from the data attribute.
  // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
  // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
  // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
// var crystalValue = ($(this).attr("data-crystalvalue"));
//     crystalValue = parseInt(crystalValue);
//     // We then add the crystalValue to the user's "counter" which is a global variable.
//     // Every click, from every crystal adds to the global counter.
//     counter += crystalValue;

//     // Apply game win-lose logic applies
//     alert("New score: " + counter);

//     if (counter === targetNumber) {
//         $("#wins").text($(this).text());
//     }

//     else if (counter >= targetNumber) {
//         $("#losses").text($(this).text());
    }

