const swiper1 = new Swiper('.image-gallery-one', {
  // Optional parameters
  direction: 'horizontal',
  /* loop: true, */
  slidesPerView: 2,
  spaceBetween: 70,
  freeMode: true,

  breakpoints: {
    // when window width is >= 768px
    319: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.5,
      spaceBetween: 20,

    },
    1500: {
      slidesPerView: 2,
      spaceBetween: 70,
    }
  }

});

const swiper2 = new Swiper('.image-gallery-two', {
  // Optional parameters
  direction: 'horizontal',
  /* loop: true, */
  slidesPerView: 3,
  spaceBetween: 70,
  freeMode: true,

  breakpoints: {
    // when window width is >= 768px
    319: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.5,
      spaceBetween: 20,

    },

    1500: {
      slidesPerView: 3,
      spaceBetween: 70,
    },

    1024: {
      slidesPerView: 2.5,
      spaceBetween: 40,
    },

    1440: {
      slidesPerView: 3,
      spaceBetween: 70,
    }
  }
});

const swiper3 = new Swiper('.image-gallery-three', {
  // Optional parameters
  direction: 'horizontal',
  /* loop: true, */
  slidesPerView: 1.8,
  spaceBetween: 70,
  freeMode: true,

  breakpoints: {
    // when window width is >= 768px
    319: {
      slidesPerView: 1.2,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },

    1440: {
      slidesPerView: 1.8,
      spaceBetween: 70,
    },

    1500: {
      slidesPerView: 1.8,
      spaceBetween: 70,
    }
  }
});

swiper1.mousewheel.enable();
swiper2.mousewheel.enable();
swiper3.mousewheel.enable();