<script>

{/* /* /* <!-- Here we have div called "randomNumber" where our random number will go --> */ */ */}
  <h1 class="text-center" id="random-number"></h1>
{/* 
  // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");

    // First each crystal will be given the class ".crystals".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("crystals");

    // Each imageCrystal will be given a src link to the crystal image
    imageCrystal.attr("src", "C:\Users\cranc\Desktop\Camp\unit-4-game\assets\images\pink.png"); */}

$(document).ready(function() {



// On click functions for each crystal
document.getElementById('foo').addEventListener('click', function (e) {

// Make variables for each function that must be produced
var score = "";
var wins = "";
var losses = "";
var result = "";
var randomDisplay = "";


crystals = ['assets/images/ruby.png', 'assets/images/blue.png', 'assets/images/pink.png', 'assets/images/green.png'];

for (i = 0; i < numbers.length; i++) {
           var imageCrystal = $('<img>');
           imageCrystal.attr('data-num', numbers[i]);
           imageCrystal.attr('src', crystals[i]);
           imageCrystal.attr('alt', 'crystals');
           imageCrystal.addClass('crystalImage')
           $('#crystals').append(imageCrystal);
       }
  
  
  
  
    //    Have a random number produce and appear when you click the crystals 
         $(document).ready(function() {
      
             $("#crystals").on("click", function() {

        // generate a random number
        var random = Math.floor(Math.random() * 1000) + 1;

        // dump the random number into html section Result.
        $("#random-number").text(random);





 // Set the HTML of the #score to the text of what was clicked
             $("#score").text($(this).text());




</script>