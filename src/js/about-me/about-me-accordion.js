import Accordion from 'accordion-js';

const elBtn = document.querySelector('.title-wrap');
console.log(elBtn);




const accordion = new Accordion('.accordion-container',{
    duration: 500,
    showMultiple: true,
    elementClass: 'about-me-item',
    triggerClass: 'btn-open-description',
    panelClass: 'ac-panel',
    activeClass: 'is-active',
});
accordion.open(0);