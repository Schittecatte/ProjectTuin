let scrollTriggered = false;

$(function() {
  setMainHeight();
  positionNav();
  $('html, body').animate({scrollTop: 0}, 500, 'easeInOutCubic');
});

function scrollToDiv(anchor) {
  animateTitle()
  $('html, body').animate({scrollTop: $('#'+anchor).offset().top}, 1000, 'easeInOutCubic', function() { scrollTriggered = false;});
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
}

function positionNav() {
  $('#nav').offset({left: $(window).width() - $('#nav').width() - 40});
}

$(window).resize(function() {
  setMainHeight();
  positionNav();
});
