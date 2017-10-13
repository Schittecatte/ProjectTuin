function scrollToDiv(anchor) {
  animateTitle()
  $('html, body').animate({scrollTop: $('#'+anchor).offset().top}, 1000, 'easeInOutCubic');
}

function animateTitle() {
  $('#title').animate({
    top: "+=100",
    opacity: 0}, 500, 'easeInCubic');
    $('#title').animate({
      top: "-=200"}, 10);
  $('#title').animate({
    top: "+=100",
    opacity: 100}, 500, 'easeOutCubic');
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
