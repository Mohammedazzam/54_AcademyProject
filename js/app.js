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


});