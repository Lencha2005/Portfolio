import Swiper from "swiper";
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const swiper = new Swiper('.swiper', {
    modules: [Navigation, Keyboard, Mousewheel],
    speed: 1000,
    loop: true,
    direction: 'horizontal',
    navigation: {
        nextEl: '.skills-swiper-button',
    },

    mousewheel: {
        enabled: true,
        invert: true,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },

    slidesPerView: 1,

    on: {
        transitionStart: () => {
            document.querySelectorAll('.about-me-item-skills').forEach(slide => {
                slide.style.transition = 'background-color 100ms cubic-bezier(0.4, 0, 0.2, 1)';
                slide.style.backgroundColor = 'var(--black)';
                slide.style.border = '1px solid rgba(250, 250, 250, 0.2)';
                slide.style.borderRadius = '50%';
            });

            const firstSlide = swiper.slides[swiper.activeIndex];
            firstSlide.style.transition = 'background-color 1000ms cubic-bezier(0.4, 0, 0.2, 1)';
            firstSlide.style.backgroundColor = 'var(--red)';
            firstSlide.style.borderColor = 'transparent';

        },
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        375: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
        1440: {
            slidesPerView: 6,
            spaceBetween: 0,
        },
    },

    
  });

  