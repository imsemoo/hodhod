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

  var hero = $('.main-news-hero');
  var article = $('.main-article');

  $('.owl-news-cards').owlCarousel({
    items: 2,
    margin: parseInt(getComputedStyle(document.documentElement).getPropertyValue('--space-md')),
    loop: true,
    rtl: true,
    nav: true,
    navText: [
      '<i class="fas fa-chevron-right"></i>',
      '<i class="fas fa-chevron-left"></i>'
    ],
    responsive: {
      0: { items: 1 },
      768: { items: 2 }
    }
  }).on('click', '.owl-item .item', function () {
    var $this = $(this);
    hero.css('background-image', 'url(' + $this.data('img') + ')');
    article.find('.headline').text($this.data('title'));
    article.find('.meta').html(
      '<span class="author"><i class="fas fa-pen"></i> ' + $this.data('author') + '</span>' +
      '<span class="date mx-2"><i class="fas fa-calendar-alt"></i> ' + $this.data('date') + '</span>'
    );
    // Optional: update summary if provided
    if ($this.data('summary')) {
      article.find('.summary').text($this.data('summary'));
    }
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
