/*global $, window*/

$(function () {
  "use strict";

  // scroll to top
      
  $('.scroll-top').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 100);
  });
  /// hide & show scroll to top

  $(window).scroll(function () {
    var clickToScroll = $('.scroll-top');
    if ($(window).scrollTop() > 600) {
        if (clickToScroll.is(':hidden')) {
            clickToScroll.fadeIn(500);
        }
    } else {clickToScroll.fadeOut(500); }
  });

  $('.publicat').on('click', function(e){
    e.preventDefault();
    var target = $(this).attr('datat-latest');
    $(this).addClass('active').siblings().removeClass('active');
    $('.latest-contect').fadeOut().removeClass('active');
    $('#'+target).fadeIn();
  });


  $(document).ready(function(){

    $('#training_card').owlCarousel({
        //loop: true,
        margin: 20,
        nav: true,
        navText:[
        '<i class="fa-solid fa-xl fa-angle-left"></i>',
        '<i class="fa-solid fa-xl fa-angle-right"></i>'],
        dots: true,
        // rtl: true,
        // autoplay:true,
        autoplayTimeout:2000,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:2
            },
            1024:{
                items:3
            },
            1400:{
                items:4
            }
        }
    });
    $('#upcoming_card').owlCarousel({
        //loop: true,
        margin: 20,
        nav: true,
        navText:[
        '<i class="fa-solid fa-xl fa-angle-left"></i>',
        '<i class="fa-solid fa-xl fa-angle-right"></i>'],
        dots: true,
        // rtl: true,
        // autoplay:true,
        autoplayTimeout:2000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1400:{
                items:3
            }
        }
    });
    $('#city_card').owlCarousel({
        //loop: true,
        margin: 20,
        nav: true,
        navText:[
        '<i class="fa-solid fa-xl fa-angle-left"></i>',
        '<i class="fa-solid fa-xl fa-angle-right"></i>'],
        dots: true,
        // rtl: true,
        // autoplay:true,
        autoplayTimeout:2000,
        responsive:{
            0:{
                items:3
            },
            600:{
                items:4
            },
            900:{
                items:5
            },
            1400:{
                items:7
            }
        }
    });
    $('#blog_details_carousel').owlCarousel({
        //loop: true,
        margin: 40,
        nav: true,
        items:2,
        navText:[
        '<i class="fa-solid fa-xl fa-angle-left"></i>',
        '<i class="fa-solid fa-xl fa-angle-right"></i>'],
        dots: true,
        // rtl: true,
        // autoplay:true,
        autoplayTimeout:2000,
    });
    $('#team_work_carousel').owlCarousel({
        margin: 20,
        nav: false,
        dots: false,
        autoplayTimeout:2000,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            900:{
                items:4
            },
            1400:{
                items:4
            }
        }
    });
    $('#customer_carousel').owlCarousel({
        margin: 20,
        nav: false,
        dots: true,
        autoplayTimeout:2000,
        responsive:{
            0:{
                items:3
            },
            600:{
                items:3
            },
            900:{
                items:5
            },
        }
    });

  });

});