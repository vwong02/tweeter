$(document).ready(function () {
  
  console.log("composer-char-counter.js ready")
  // --- our code goes here ---
  $("#new-tweet-form").on('input', "textarea", function () {
    console.log(this); //The this keyword is a reference to the button

    const charCount = $(this).val().length;
    const charsLeft = 140 - charCount;

    const counter = $(this).parent().find('.counter');
    counter.text(charsLeft);

    if (charsLeft < 0) {
      counter.css("color", "#f13a1a");
    } else {
      counter.css("color", "#545149");
    }


  });

});
