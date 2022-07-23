(function ($) {
  "use strict";
  var GLOB = {};
  $.fn.exists = function () {
    return this.length > 0;
  };

  /* ---------------------------------------------- /*
     * Pre load
    /* ---------------------------------------------- */
  // GLOB.PreLoad = function () {
  //   document.getElementById("preloader").style.display = "none";
  // };

  /* ---------------------------------------------- /*
     * Toggle Menu
    /* ---------------------------------------------- */
  GLOB.toggleMenu = function () {
    if ($(".menu-btn").length > 0) {
      $(".menu-btn").click(function () {
        const isActive = $(this).hasClass("active");

        if (!isActive) {
          $(this).addClass("active");
          $(".mobile-menu").addClass("show");
          $("body").css("overflow", "hidden");
        } else {
          $(this).removeClass("active");
          $(".mobile-menu").removeClass("show");
          $("body").css("overflow", "auto");
        }
      });
    }
  };

  /* ---------------------------------------------- /*
     * News text clip
    /* ---------------------------------------------- */
  GLOB.textClip = function () {
    const content = $(".latest__posts .card-box .card-box__text");
    const text = $.trim(content.text());
    const len = text.length;
    const textLen = 27;

    if (len >= textLen) {
      content.html(`${text.slice(0, textLen)}...`);
    } else {
      content.html(text);
    }
  };

  /* ---------------------------------------------- /*
     * Feature News text clip
    /* ---------------------------------------------- */
  GLOB.featureTextClip = function () {
    const content = $(".feature__post .card-box .card-box__text");
    const text = $.trim(content.text());
    const len = text.length;
    const textLen = 180;

    if (len >= textLen) {
      content.html(`${text.slice(0, textLen)}...`);
    } else {
      content.html(text);
    }
  };

  /* ---------------------------------------------- /*
     * Streamers Slider
    /* ---------------------------------------------- */
  GLOB.cardSlider = function (container, space = 10) {
    var splide = new Splide(container, {
      type: "loop",
      perPage: 1,
      gap: 10,
      arrows: false,
      autoplay: true,
      interval: 3000,
      mediaQuery: "min",
      breakpoints: {
        576: {
          perPage: 2,
          gap: space,
        },
        768: {
          perPage: 2,
        },
        992: {
          perPage: 3,
        },
        1200: {
          perPage: 4,
          type: "slide",
          pagination: false,
        },
      },
    });

    splide.mount();
  };

  /* ---------------------------------------------- /*
     * Features Slider
    /* ---------------------------------------------- */
  GLOB.featuresSlider = function (container) {
    var splide = new Splide(container, {
      type: "loop",
      perPage: 1,
      arrows: false,
      gap: 10,
      autoplay: true,
      interval: 3000,
      mediaQuery: "min",
      breakpoints: {
        576: {
          perPage: 2,
        },
        768: {
          gap: 20,
        },
        992: {
          perPage: 3,
          gap: 30,
          type: "slide",
          pagination: false,
        },
      },
    });

    splide.mount();
  };

  /* ---------------------------------------------- /*
     * Newsfeed Slider
    /* ---------------------------------------------- */
  GLOB.newsfeedSlider = function (container) {
    var splide = new Splide(container, {
      type: "loop",
      perPage: 1,
      gap: 30,
      arrows: false,
      autoplay: true,
      interval: 3000,
      mediaQuery: "min",
      breakpoints: {
        576: {
          perPage: 2,
        },
        768: {
          type: "slide",
          perPage: 3,
          pagination: false,
        },
      },
    });

    splide.mount();
  };

  /* ---------------------------------------------- /*
     * Team List Slider
    /* ---------------------------------------------- */
  GLOB.teamListSlider = function (container) {
    var splide = new Splide(container, {
      type: "loop",
      perPage: 3,
      gap: 10,
      arrows: false,
      autoplay: true,
      interval: 3000,
      mediaQuery: "min",
      breakpoints: {
        576: {
          perPage: 5,
        },
        768: {
          destroy: true,
        },
      },
    });

    splide.mount();
  };

  /* ---------------------------------------------- /*
     * Betting Slider
    /* ---------------------------------------------- */
  GLOB.bettingSlider = function () {
    var main = new Splide("#betting-main-carousel", {
      type: "fade",
      rewind: true,
      pagination: false,
      arrows: false,
      perPage: 1,
    });

    var thumbnails = new Splide("#betting-thumbnail-carousel", {
      fixedWidth: 146,
      fixedHeight: 96,
      gap: 12,
      rewind: true,
      pagination: false,
      isNavigation: true,
      breakpoints: {
        600: {
          fixedWidth: 60,
          gap: 5,
          fixedHeight: 44,
        },
      },
    });

    main.sync(thumbnails);
    main.mount();
    thumbnails.mount();
  };

  /* ---------------------------------------------- /*
     * Testimonial Slider
    /* ---------------------------------------------- */
  GLOB.testimonialSlider = function () {
    var splide = new Splide("#testimonial__slider", {
      type: "loop",
      perPage: 1,
      perMove: 1,
      gap: 30,
      arrows: false,
      mediaQuery: "min",
      breakpoints: {
        640: {
          perPage: 2,
        },
        992: {
          perPage: 3,
        },
      },
    });

    splide.mount();
  };

  /* ---------------------------------------------- /*
     * Set Video Source
    /* ---------------------------------------------- */
  GLOB.setSrc = function () {
    const video = document.getElementById("bgHeroVideo");
    const source = document.getElementById("bgVideoSrc");

    source.setAttribute("src", "./assets/videos/hero-bg.mp4");

    video.load();
    video.play();
  };

  /* ---------------------------------------------- /*
     * Copy Token Text
    /* ---------------------------------------------- */
  GLOB.copyToken = function () {
    if ($("#copy-btn").length > 0) {
      $("#copy-btn").click(function () {
        const check = `<i class="fa-solid fa-check-double"></i>`;
        const token = $(".token-search .form-control");

        token.select();
        navigator.clipboard.writeText(token.val());

        $(this).html(check);
      });
    }
  };

  // Window on Load
  $(window).on("load", function () {
    GLOB.setSrc();
  });

  // Document on Ready
  $(document).ready(function () {
    GLOB.toggleMenu();
    GLOB.copyToken();
    GLOB.cardSlider("#streamer-splide");
    GLOB.cardSlider("#nft-splide");
    GLOB.featuresSlider("#features-splide");
    GLOB.cardSlider("#go-premium-splide", 30);
    GLOB.bettingSlider();
    GLOB.newsfeedSlider("#newsfeed-splide");
    GLOB.teamListSlider("#team-list-splide");
    GLOB.testimonialSlider();
    GLOB.textClip();
    GLOB.featureTextClip();
  });

  // Document on Scrool
  $(window).scroll(function () {});

  // Window on Resize
  $(window).resize(function () {});
})(jQuery);
