$(document).ready(function () {
  // --- our code goes here ---
  console.log("HELLLOOO");

  $("#new-tweet-form").on('input', "textarea", function () {
    console.log(this); //The this keyword is a reference to the button

    const charCount = $(this).val().length;
    const charsLeft = 140 - charCount;

    const counter = $(this).parent().children().children('.counter');
    counter.text(charsLeft);

    if (charsLeft < 0) {
      counter.css("color", "#f13a1a");
    } else {
      counter.css("color", "#545149");
    }


  });

});
