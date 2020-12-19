$(document).ready(function () {
  new Swiper(".swiper-container", {
    slidesPerView: "auto",
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  walkAndChill();
  setInterval(walkAndChill, 10000);

  function walkAndChill() {
    $(".walk-chill").each(function () {
      var obj = {};
      obj.top = Math.random() * 100 * Math.pow(-1, Math.floor(Math.random() * 2));
      obj[$(this).data("pst")] = Math.random() * 200 * Math.pow(-1, Math.floor(Math.random() * 2));
      $(this).animate(obj, 10000, "linear");
    });
  }
});

$(document).ready(function () {
  $(window).scroll(function () {
    if (window.innerWidth > 576 && window.pageYOffset > 82) {
      if (!$("header").hasClass("active")) {
        $("header").addClass("active");
      }
    } else {
      $("header").removeClass("active");
    }
  });

  $(window).scroll(function () {
    $(".animate").each(function () {
      var offset = $(this).offset().top;
      var animateType = $(this).data("animate");
      if (!$(this).hasClass("animated") && offset - window.innerHeight + 80 <= window.pageYOffset) {
        $(this).addClass("animated " + animateType);
      }
    });
  });

  $(".go-el").click(function (e) {
    var el = $(this).attr("href");
    $('.header__left').removeClass('active');
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $(el).offset().top - 100,
      },
      500
    );
  });

  $("#backtotop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });

  // Open close header mobile menu

  $(".bars").click(function () {
    $(".header__left").addClass("active");
  });
  $(".header .close").click(function () {
    $(".header__left").removeClass("active");
  });
});
