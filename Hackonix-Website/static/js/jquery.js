$(window).scroll(function () {
  if ($(window).scrollTop() < 600) {
    $(".navbar").addClass("fixed-navbar-prop");
  } else {
    $(".navbar").removeClass("fixed-navbar-prop");
  }
});
