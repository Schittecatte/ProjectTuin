function scrollToDiv(anchor) {
  $('html, body').animate({scrollTop: $('#'+anchor).offset().top}, 1000, 'easeInOutCubic');
}

function setMainHeight() {
  let windowheight = $(window).innerHeight();
  $('#main-container').height(windowheight - $('#header').height());
  $('#about-container').height(windowheight);
}

$(window).resize(function() {
  setMainHeight();
});

$(function() {
  $(document).scrollTop(0);
  setMainHeight();
});
