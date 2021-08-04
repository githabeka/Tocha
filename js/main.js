$(".open-popup").click(function(){
    $('.popup__bg').fadeIn(300);
    $('html').addClass('no-scroll');
});
$(".close-popup").click(function(){
    $('.popup__bg').fadeOut(300);
    $('html').removeClass('no-scroll');
});

$(".open__popup").click(function(){
    $('.popup__background').fadeIn(300);
    $('html').addClass('no-scroll');
});
$(".close-popup").click(function(){
    $('.popup__background').fadeOut(300);
    $('html').removeClass('no-scroll');
});

$(window).on('load resize', function() {
    if ($(window).width() < 768) {
      $('.rate__inner').slick({

        slidesToShow: 2,
        arrows: false,
        infinite: true,
        slidesToScroll: 1,
        dots: true,
        responsive: [
          {
            breakpoint: 694,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
              
            }
          },
          {
          breakpoint: 462,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              variableWidth: true,
              centerMode: true,
            }
          }
        ]
      });
    } else {
      $(".rate__inner.slick-initialized").slick("unslick");
    }
  });

$(document).ready(function() {
  $('.header__burger').click(function(event) {
    $('.header__burger,.header__authorization').toggleClass('active');
    $('body').toggleClass('lock');
  });
});