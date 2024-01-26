const swiper = new Swiper(".swiper", {
    loop: true,
    allowTouchMove:false,
    autoplay:{
    delay: 5500,
    disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});