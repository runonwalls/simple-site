$(document).ready(function() {
    var stringArray = [ "A cat!", "A dog!", "A bird!", "A penguin!" ];

    function randomString(array) {
      return array[Math.floor(Math.random() * (array.length))];
    } // end randomString

  $("#generate").on("click", function() {
        //When the button gets clicked, go to the quote page and output (here) the response from THAT page.
        //Where to go...                     //and what to do when it gets there
        //The callback function we provide is our way of accessing the response to our ajax request.
        $.get("http://localhost:3000/quote", function(response){
          $("#ajax-text").text(response);
        });

        //$("#string").empty(); // clear the div
        //$("#ajax-text").text("hello, world");
        // Display a random string in the array stringArray
        //$("#string").append(randomString(stringArray));
      } // end function
    ); // end .on

  $("#cooljsonparty").on("click",function(){
      $.get("http://localhost:3000/hesitantthinking", function(response){
        $("#ajax-json-text")
      });
    });
  } // end wrapper function
); // end .ready