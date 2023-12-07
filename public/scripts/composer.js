$(document).ready(function () {

/* Character Counter */
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

/* Top of Page Button */
  $("#top-page-icon").hide();

  $(window).scroll(function() {
    if ($(window).scrollTop() > 50) {
      $("#top-page-icon").fadeIn();
    } else {
      $("#top-page-icon").fadeOut();
    }
  });

  $("#top-page-icon").on("click", function() {
    $('html, body').animate({ scrollTop: 0 }, 360);
  });

});
