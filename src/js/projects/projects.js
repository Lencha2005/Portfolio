import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const swiper = new Swiper('.swiper.swiper-projects', {
    speed: 1000,
    modules: [Navigation, Keyboard, Mousewheel],
    direction: 'horizontal',
    navigation: {
        nextEl: '.swiper-projects-button-next',
        prevEl: '.swiper-projects-button-prev'
    },
    mousewheel: {
        enabled: true,
        invert: true,
        eventsTarget: '.swiper-projects'
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    // centerInsufficientSlides: true,
    breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
    
        768: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
    
        1440: {
          slidesPerView: 1,
          spaceBetween: 36,
        },
      },
})