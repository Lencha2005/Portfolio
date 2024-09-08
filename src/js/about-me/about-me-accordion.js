import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const elBtn = document.querySelector('.title-wrap');
console.log(elBtn);




const accordion = new Accordion('.accordion-container',{
    duration: 500,
    showMultiple: true,

})