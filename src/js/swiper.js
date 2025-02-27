new Swiper('.swiper', {
  // Optional parameters
    slidesPerView: 1,
    spaceBetween: 16,
//     autoplay: {
//     delay: 3000,
// },

pagination: {
    el: '.swiper-pagination',
},

breakpoints: {
    768: {
        slidesPerView: 2,
        
    },
    1200: {
        slidesPerView: 3,
        spaceBetween: 28,
    }
}

});