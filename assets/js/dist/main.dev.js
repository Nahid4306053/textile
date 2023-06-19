"use strict";

$(document).ready(function () {
  $(function () {
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 100) {
        $("#navbars").addClass("fixed-top");
      } else {
        //remove the background property so it comes transparent again (defined in your css)
        $("#navbars").removeClass("fixed-top");
      }
    });
  });
  $('#project').counterUp({
    delay: 10,
    time: 10000
  });
  $('#project-1').counterUp({
    delay: 10,
    time: 1000
  });
  $('.counters').counterUp({
    delay: 10,
    time: 2000
  });
  $('.countersi').counterUp({
    delay: 10,
    time: 2000
  });
  var owl = $('#banner-crasoul .owl-carousel');
  owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    animateOut: 'fadeOut'
  });
  var owl = $('#client .owl-carousel');
  owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true
  });
  var owl = $('.project-blog');
  owl.owlCarousel({
    items: 2,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true
  });
  AOS.init();
});