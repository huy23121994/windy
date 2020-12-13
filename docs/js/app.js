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
  });

  $(window).scroll(function () {
    $('.animate').each(function () {
      var offset = $(this).offset().top;
      var animateType = $(this).data('animate');
      if (!$(this).hasClass('animated') && (offset - window.innerHeight + 80) <= window.pageYOffset) {
        $(this).addClass('animated ' + animateType);
      }
    })
  })
});