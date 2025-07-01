$(document).ready(function () {

  // Initialize Infographic slider with RTL support
  $('.infographic-slider').owlCarousel({
    rtl: true,               // enable RTL mode
    items: 1,                // one slide at a time
    loop: true,              // infinite loop
    margin: 16,              // space between slides (in px)
    dots: true,              // show pagination dots
    nav: false,              // hide prev/next arrows
    autoplay: true,          // enable auto-play
    autoplayTimeout: 5000,   // 5 seconds per slide
    autoplayHoverPause: true,// pause on hover
    animateOut: 'fadeOut'    // fade transition
  });
  // Initialize caricature slider with RTL support
  $('.caricature-slider').owlCarousel({
    rtl: true,
    items: 1,
    loop: true,
    margin: 16,
    nav: true,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>'
    ],
    dots: false,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    animateOut: 'fadeOut'
  });




  const track = document.querySelector(".news-list");
  let x = 0;
  const speed = 0.3; // slower speed for smoother scroll

  function scrollNews() {
    x += speed;
    if (x >= track.scrollWidth / 2) x = 0;
    track.style.transform = `translateX(${x}px)`;
    requestAnimationFrame(scrollNews);
  }
  scrollNews();

  // Professional comment: Hide the loader when the full page (including images) has loaded
  $(window).on('load', function () {
    $('#preloadr').fadeOut(500);
  });

  // Professional comment: Fallback in case 'load' never fires (e.g. on some mobile browsers)
  setTimeout(function () {
    if ($('#preloadr').is(':visible')) {
      $('#preloadr').fadeOut(500);
    }
  }, 7000); // 10 seconds max wait

  // Professional comment: Also allow tapping the loader itself to dismiss it manually
  $('#preloadr').on('click', function () {
    $(this).fadeOut(300);
  });

});
