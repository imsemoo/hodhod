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

  // Hero click update
  $('.news-card').on('click', function () {
    var img = $(this).data('img');
    var title = $(this).find('.title').text();
    var date = $(this).find('.meta span').first().text();
    var author = $(this).find('.meta span').last().text();
    $('.main-news-hero').css('background-image', 'url(' + img + ')');
    $('.main-article .headline').text(title);
    $('.main-article .meta').html(
      '<span class="author"><i class="fas fa-pen"></i> ' + author + '</span>' +
      '<span class="date mx-2"><i class="fas fa-calendar-alt"></i> ' + date + '</span>'
    );
  });

  // Slider navigation
  var wrapper = $('.cards-wrapper');
  var cardWidth = $('.news-card').outerWidth(true);
  $('.next').click(function () {
    wrapper.animate({ scrollLeft: '+=' + cardWidth }, 300);
  });
  $('.prev').click(function () {
    wrapper.animate({ scrollLeft: '-=' + cardWidth }, 300);
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
