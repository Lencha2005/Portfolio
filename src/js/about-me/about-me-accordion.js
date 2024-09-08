import Accordion from 'accordion-js';

const elBtn = document.querySelectorAll('.title-wrap');
const icons = document.querySelectorAll('.icon-btn-open');
console.log(elBtn);

icons.forEach(icon => {
    icon.classList.toggle('icon-return')
})
elBtn.forEach(btn => {
    btn.addEventListener('click', onOpenDescription)

})
function onOpenDescription(event){
    icons.forEach(icon => {
        console.log(event.target)
        if(event.currentTarget === icon){
            icon.classList.toggle('icon-return')
        }
    })
};
// onOpenDescription()
// elBtn.addEventListener('click', onOpenDescription);


const accordion = new Accordion('.accordion-container',{
    duration: 500,
    showMultiple: true,
    elementClass: 'about-me-item',
    triggerClass: 'btn-open-description',
    panelClass: 'ac-panel',
    activeClass: 'is-active',
});
accordion.open(0);