$(document).ready(function () {
  $('.owl-news').owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 600,
    rtl: true,
    animateOut: 'slideOutUp',
    animateIn: 'slideInUp'
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
});
