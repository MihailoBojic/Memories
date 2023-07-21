$(function() {

    

    "use strict";

    

    //===== Prealoder

    

    $(window).on('load', function(event) {

        $('.preloader').delay(500).fadeOut(500);

    });

    

    

    //===== Sticky



    $(window).on('scroll', function (event) {

        var scroll = $(window).scrollTop();

        if (scroll < 20) {

            $(".header_navbar").removeClass("sticky");

            $(".header_navbar img").attr("src", "assets/images/logo.svg");

        } else {

            $(".header_navbar").addClass("sticky");

            $(".header_navbar img").attr("src", "assets/images/logo-2.svg");

        }

    });

    

    

    //===== Section Menu Active



    var scrollLink = $('.page-scroll');

    // Active link switching

    $(window).scroll(function () {

        var scrollbarLocation = $(this).scrollTop();



        scrollLink.each(function () {



            var sectionOffset = $(this.hash).offset().top - 73;



            if (sectionOffset <= scrollbarLocation) {

                $(this).parent().addClass('active');

                $(this).parent().siblings().removeClass('active');

            }

        });

    });

    

    //===== close navbar-collapse when a  clicked



    $(".navbar-nav a").on('click', function () {

        $(".navbar-collapse").removeClass("show");

    });



    $(".navbar-toggler").on('click', function () {

        $(this).toggleClass("active");

    });



    $(".navbar-nav a").on('click', function () {

        $(".navbar-toggler").removeClass('active');

    });

    

    

    //===== Counter Up

    

    $('.counter').counterUp({

        delay: 10,

        time: 3000

    });

    

    

    

    //===== Back to top

    

    // Show or hide the sticky footer button

    $(window).on('scroll', function(event) {

        if($(this).scrollTop() > 600){

            $('.back-to-top').fadeIn(200)

        } else{

            $('.back-to-top').fadeOut(200)

        }

    });

    

    

    //Animate the scroll to yop

    $('.back-to-top').on('click', function(event) {

        event.preventDefault();

        

        $('html, body').animate({

            scrollTop: 0,

        }, 1500);

    });

    

    

    //===== Nice Select

    

    $('select').niceSelect();

    

    

    //=====  WOW active

    

    var wow = new WOW({

        boxClass: 'wow', //

        mobile: false, // 

    })

    wow.init();

    

    
    var swiper = new Swiper('.swiper-1', {
        // Opcioni parametri za podešavanje
        slidesPerView: 2.5, // Broj vidljivih slajdova
        spaceBetween: 30, // Rastojanje između slajdova (u pikselima)
        direction: 'horizontal',
        loop: true, // Postavite loop na true za beskonačnu petlju
        autoplay: {
            delay: 2500, // Interval u milisekundama između prebacivanja slajdova
          },
        navigation: {
          nextEl: '.swiper-button-next', // Klasa za navigacionu strelicu sledeći slajd
          prevEl: '.swiper-button-prev', // Klasa za navigacionu strelicu prethodni slajd
        },
        observer: true,        
      });
    
      
        var swiper2 = new Swiper(".swiper-2", {
          // Dodajte opciju za različite širine ekrana
          breakpoints: {
            // Kada je širina ekrana veća ili jednaka 768px (veliki ekrani), prikazujte 2 kartice
            768: {
              slidesPerView: 2,
            },
            // Kada je širina ekrana manja od 768px (mobilni uređaji), prikazujte samo 1 karticu
            0: {
              slidesPerView: 1,
            },
          },
          // Beskonačno pomjeranje za Swiper-2
          loop: true,
          // Dodajte autoplay opciju za automatsko pomjeranje kartica
          autoplay: {
            delay: 3000, // Vrijeme prikaza svake kartice (3 sekunde)
            disableOnInteraction: false, // Omogućava automatsko pomjeranje čak i nakon interakcije korisnika
          },
          // Dodajte paginaciju za Swiper-2 (opciono)
          pagination: {
            el: ".swiper-pagination-2",
          },
        });
      
});
