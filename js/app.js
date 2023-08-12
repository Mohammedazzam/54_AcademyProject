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

    var header_h = $('header').height();
    var nav_h = $('nav.navbar').height();
    $('.content').css('margin-top', nav_h);
    if ($(window).width() < 990) {
        $('nav.navbar').addClass('nav_fixed');
    }
    $(window).scroll(function () {
        var clickToScroll = $('.scroll-top');
        if ($(window).scrollTop() > header_h || $(window).width() < 990) {
            $('nav.navbar').addClass('nav_fixed');
        } else {
            $('nav.navbar').removeClass('nav_fixed');
        }
        if ($(window).scrollTop() > 600) {
            if (clickToScroll.is(':hidden')) {
                clickToScroll.fadeIn(500);
            }
        } else { clickToScroll.fadeOut(500); }
    });

    $('.publicat').on('click', function (e) {
        e.preventDefault();
        var target = $(this).attr('datat-latest');
        $(this).addClass('active').siblings().removeClass('active');
        $('.latest-contect').fadeOut().removeClass('active');
        $('#' + target).fadeIn();
    });

    $('.category_div').on('click', function (e) {
        e.preventDefault();
        var target = $(this).attr('data-target');
        $(this).addClass('active').siblings().removeClass('active');
        $('.upcoming_content').fadeOut('100').removeClass('active');
        $(target).fadeIn().addClass('active');
    });
    $('.payment_card').on('click', function (e) {
        e.preventDefault();
        var target = $(this).attr('data-target');
        $(this).addClass('active').siblings().removeClass('active');
        $('.payment_form').fadeOut('100').removeClass('active');
        $(target).fadeIn().addClass('active');
    });

    $('.get-login').on('click', function () {
        var target = $(this).attr('data-form');
        $(this).addClass('active').siblings().removeClass('active');
        $('.form_div').fadeOut().addClass('d-none');
        $(target).fadeIn().removeClass('d-none');
    });


    //   start ReadMore 
    function AddReadMore() {
        //This limit you can set after how much characters you want to show Read More.
        var carLmt = 130;
        // Text to show when text is collapsed
        var readMoreTxt = " ... Read More";
        // Text to show when text is expanded
        var readLessTxt = " Read Less";


        //Traverse all selectors with this class and manupulate HTML part to show Read More
        $(".addReadMore").each(function () {

            if ($(this).find(".firstSec").length)
                return;
            var allstr = $(this).text();
            if (allstr.length > carLmt) {
                var firstSet = allstr.substring(0, carLmt);
                var secdHalf = allstr.substring(carLmt, allstr.length);
                var strtoadd = firstSet + "<span class='SecSec'>" + secdHalf + "</span><span class='readMore'  title='Click to Show More'>" + readMoreTxt + "</span><span class='readLess' title='Click to Show Less'>" + readLessTxt + "</span>";
                $(this).html(strtoadd);
            }

        });
        //Read More and Read Less Click Event binding
        $(document).on("click", ".readMore,.readLess", function () {
            // carLmt = $(this).attr('data-carlmt');
            // console.log(carLmt);
            $(this).closest(".addReadMore").toggleClass("showlesscontent showmorecontent");
        });
    }
    $(function () {
        //Calling function after Page Load
        AddReadMore();
    });
    $(".more-less").click(function () {
        let $more = $(this).siblings('ul.more').toggleClass("main");

        if ($more.hasClass('main')) {
            $(this).text('Read Less');
        } else {
            $(this).text('... Read More');
        }
    });

    //   start carousle 
    $(document).ready(function () {

        $('#training_card').owlCarousel({
            //loop: true,
            margin: 20,
            nav: true,
            navText: [
                '<i class="fa-solid fa-xl fa-angle-left"></i>',
                '<i class="fa-solid fa-xl fa-angle-right"></i>'],
            dots: true,
            // rtl: true,
            // autoplay:true,
            autoplayTimeout: 2000,
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 2
                },
                1024: {
                    items: 3
                },
                1400: {
                    items: 4
                }
            }
        });
        $('#upcoming_card').owlCarousel({
            //loop: true,
            margin: 20,
            nav: true,
            navText: [
                '<i class="fa-solid fa-xl fa-angle-left"></i>',
                '<i class="fa-solid fa-xl fa-angle-right"></i>'],
            dots: true,
            // rtl: true,
            // autoplay:true,
            autoplayTimeout: 2000,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1400: {
                    items: 3
                }
            }
        });
        $('#city_card').owlCarousel({
            //loop: true,
            margin: 20,
            nav: true,
            navText: [
                '<i class="fa-solid fa-xl fa-angle-left"></i>',
                '<i class="fa-solid fa-xl fa-angle-right"></i>'],
            dots: true,
            // rtl: true,
            // autoplay:true,
            autoplayTimeout: 2000,
            responsive: {
                0: {
                    items: 3
                },
                600: {
                    items: 4
                },
                900: {
                    items: 5
                },
                1400: {
                    items: 7
                }
            }
        });
        $('#blog_details_carousel').owlCarousel({
            //loop: true,
            margin: 10,
            nav: true,
            items: 3,
            navText: [
                '<i class="fa-solid fa-xl fa-angle-left"></i>',
                '<i class="fa-solid fa-xl fa-angle-right"></i>'],
            dots: true,
            // rtl: true,
            // autoplay:true,
            autoplayTimeout: 2000,
        });
        $('#team_work_carousel').owlCarousel({
            margin: 20,
            nav: false,
            dots: false,
            autoplayTimeout: 2000,
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 3
                },
                900: {
                    items: 4
                },
                1400: {
                    items: 4
                }
            }
        });
        $('#customer_carousel').owlCarousel({
            margin: 20,
            nav: false,
            dots: true,
            autoplayTimeout: 2000,
            responsive: {
                0: {
                    items: 3
                },
                600: {
                    items: 3
                },
                900: {
                    items: 5
                },
            }
        });
        $('#upComingCarousel').owlCarousel({
            margin: 0,
            nav: false,
            dots: true,
            loop: true,
            autoplay: true,
            items: 1,
            autoplayTimeout: 2000,
        });

    });

});