<script>

{/* /* <!-- Here we have div called "randomNumber" where our random number will go --> */ */}
  <h1 class="text-center" id="random-number"></h1>


    $(document).ready(function() {

      
      $("#random-button").on("click", function() {

        // generate a random number
        var random = Math.floor(Math.random() * 1000) + 1;

        // dump the random number into our random-number div.
        $("#random-number").text(random);




</script>