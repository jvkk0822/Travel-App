$(document).ready(function() {
  // Getting jQuery references for the person, city, country, and the actual comment
  var bodyInput = $("#body");
  var personInput = $("#person");
  var cityInput = $("#city");
  var countryInput = $("#country");
  
  // Adding an event listener for when the form is submitted
$("#submitButton").on('click', handleFormSubmit);
  
  // A function for handling what happens when the form to create a new comment 
  function handleFormSubmit(event) {
    event.preventDefault();
    // Don't submit unless the form is complete
    if (!personInput.val().trim() || !cityInput.val().trim() || !countryInput.val().trim() || !bodyInput.val().trim()) {
      return;
    }
    // Constructing a newComment object to hand to the database
    var newComment = {
      person: personInput
        .val()
        .trim(),
      city: cityInput
        .val()
        .trim(),
      country: countryInput
        .val()
        .trim(),
      body: bodyInput
        .val()
        .trim(),
    }; // submit the new comment
    submitComment(newComment);
    // pop up the modal
    $('#modal1').modal('open');
     // empty out the input fields
  $("#body").val("");
  $("#person").val("");
  $("#city").val("");
  $("#country").val("");
  }

  // Submits a new post and brings user to main page upon completion
  function submitComment(comment) {
    $.post("/api/comments", comment, function() {
      window.location.href = "/index";
    });
  }

});

