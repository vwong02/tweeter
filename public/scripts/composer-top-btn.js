$(document).ready(function() {
  $("#top-page-icon").hide()

  const pageScroll = function() {
    $("#top-page-icon").on("scroll").show()
  }
})

pageScroll()