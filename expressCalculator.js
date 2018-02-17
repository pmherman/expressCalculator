// Dependencies
var express = require("express");

// Create express app instance.
var app = express();

var PORT = process.env.PORT || 3002;

// Routes
// What routes do you need to have? Which ones are optional?
// TODO Add your routes here
app.get("/:operation/:numOne/:numTwo", function(req, res) {

    var operation = req.params.operation; //sets as a variable so we can manipulate it.
    var numOne = parseFloat(req.params.numOne);
    var numTwo = parseFloat(req.params.numTwo);

  // TODO parse out the variables from the request
  // Parameters are received from the URL
  // TODO make sure they're converted to integers (and not strings)
  // Parameters are converted to integers

  // Initialize the result variable to send later
  var result;
  // Switch statement chooses operation based on the operation parameter.
  switch (operation) {
    // BONUS - How could you use * + etc. inside the app.get()?
    case "add":
       result = numOne + " + " + numTwo + " = " + (numOne + numTwo);
       console.log("Addition: " + result);
      break;
    case "subtract":
      result = numOne + " - " + numTwo + " = " + (numOne - numTwo);
      console.log("Subtraction: " + result);
      break;
    case "multiply":
      result = numOne + " x " + numTwo + " = " + (numOne * numTwo);
      console.log("Multiply: " + result);
      break;
    case "divide":
      result = numOne + " ÷ " + numTwo + " = " + (numOne / numTwo);
      console.log("Division: " + result);
      break;
    default:
      // Handle anything that isn't specified
      result =
        "Sorry! The only valid operations are add, subtract, multiply, and divide.";
  }

  // We return the result back to the user in the form of a string
  res.send(result.toString());

});

// Initiate the listener.
app.listen(PORT, function() {
  console.log("App is listening on PORT " + PORT);
})
