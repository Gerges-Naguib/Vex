$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 30,
  nav: false,
  autoplay:false,
  autoplayTimeout:2000,
  autoplayHoverPause:true,
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    768: {
      items: 3,
    },
    992: {
      items: 4,
    },
  },
});
