import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const swiper = new Swiper('.swiper-project', {
    speed: 1000,
    modules: [Navigation, Keyboard, Mousewheel],
    // loop: false,
    direction: 'horizontal',
    navigation: {
        nextEl: '.swiper-button-next',
        prevWl: '.swiper-button-prev'
    },
    mousewheel: {
        enabled: true,
        invert: true,
        eventsTarget: '.swiper-project'
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