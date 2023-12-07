$(document).ready(function() {

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
