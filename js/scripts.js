$(document).ready(function() {
  $("#formOne").submit(function(event) {
  var firstNameInput =
  $("input#firstName").val();
  var lastNameInput =
  $("input#lastName").val();

  $(".firstName").text(firstNameInput);
  $(".lastName").text(lastNameInput);

  $(".story").show();

    $("body").addClass("testColor");
    event.preventDefault();
  });
});
