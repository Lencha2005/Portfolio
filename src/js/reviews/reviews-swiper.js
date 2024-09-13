import Swiper from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

export const swiper = new Swiper('.reviews-swiper', {
    modules: [Navigation, Keyboard,Mousewheel],
    speed: 1000,
    direction: 'horizontal',
    navigation: {
        nextEl: '.review-swiper-button-next',
        prevEl: '.review-swiper-button-prev',
    },
    mousewheel: {
        enabled: true,
        invert: true,
        eventsTarget: '.reviews-list',
      },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    slidesPerView: 1,

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        768: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        1440: {
            slidesPerView: 4,
          spaceBetween: 16,
        },
    }
})
