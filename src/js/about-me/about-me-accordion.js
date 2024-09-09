import Accordion from 'accordion-js';


const elBtn = document.querySelectorAll('.title-wrap');

const scrollDown = (currentElement) => {
    const elementRect = currentElement.getBoundingClientRect();
    const elementY = elementRect.top;
    const viewportHeight = window.innerHeight;

    window.scrollTo({
        top: elementY + window.scrollY - (viewportHeight / 2) + (elementRect.height / 2),
        behavior: 'smooth'
    });

};

new Accordion('.accordion-container',{
    duration: 500,
    showMultiple: true,
    openOnInit: [0],
    onOpen: currentElement => scrollDown(currentElement),
});