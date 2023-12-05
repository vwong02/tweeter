$(document).ready(function () {
  // --- our code goes here ---
  console.log("HELLLOOO");

  $("#new-tweet-form").on('keypress', "textarea", function () {
    console.log(this); //The this keyword is a reference to the button

    const charCount = $(this).val().length;
    const charsLeft = 140 - charCount;

    const counter = $(this).parent().children().children('.counter');
    counter.text(charsLeft);

  });

});
