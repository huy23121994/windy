$(document).ready(function () {
  new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
});


$(document).ready(function () {
  $(window).scroll(function () {
    if (window.pageYOffset > 82) {
      if (!$('header').hasClass('active')) {
        $('header').addClass('active')
      }
    } else {
      $('header').removeClass('active');
    }
  })
});