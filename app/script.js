$(document).ready(function() {
    var stringArray = [ "A cat!", "A dog!", "A bird!", "A penguin!" ];

    function randomString(array) {
      return array[Math.floor(Math.random() * (array.length))];
    } // end randomString

  $("#generate").on("click", function() {
        //When the button gets clicked, go to the quote page and output (here) the response from THAT page.
        //Where to go...                     //and what to do when it gets there
        //The callback function we provide is our way of accessing the response to our ajax request.
        $.get("/quote", function(response){
          $("#ajax-text").text(response);
        });

        //$("#string").empty(); // clear the div
        //$("#ajax-text").text("hello, world");
        // Display a random string in the array stringArray
        //$("#string").append(randomString(stringArray));
      } // end function
    ); // end .on

  $("#cooljsonparty").on("click",function(){
      $.get("/hesitantthinking", function(response){
        $("#ajax-json-text").text(response); //not working as intended right now :(
      });
    });

  //Our event handler, that fires when the form is submitted
  $("#piglatin").on("submit", function(e) {
    e.preventDefault(); //on submit, when you click on them, prevents their default action
    //(the default action for jquery on submit is to refresh your entire page. We don't want that!
    // so we add this line to keep jQuery from doing what it wants to do.)

    //this selector grabs everything that's an input tag,
    //and THEN grabs everything that has the specified attribute pair (name=firstname)
    var firstName = $("input[name=firstname]").val(); //val grabs the input data from that field
    var lastName = $("input[name=lastname]").val(); //(i.e. what the user typed in)

    var name = { firstName: firstName, lastName: lastName };

    //...and now, we use $.post to send the data to the server and
    //update the <p> tag when the response comes back.

    //("piglatin" is the route on our server. we don't app.get that route, but we DO app.post,
      //meaning that when we post to it, the app.post("/piglatin") in server.js will run,
      //getting the data we sent!)
    $.post("piglatin", name, function(response) {
      var pigLatinName = response.firstname + " " + response.lastname;
      $("#pigLatinName").text(pigLatinName);
    });
  });

  } // end ready function
); // end $(document).ready