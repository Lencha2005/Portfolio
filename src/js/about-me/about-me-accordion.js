import Accordion from 'accordion-js';


const tabletViewport = 768;

const scrollDown = (currentElement) => {
    const elementRect = currentElement.getBoundingClientRect();
    const elementY = elementRect.top;
    const viewportHeight = window.innerHeight;

    window.scrollTo({
        top: elementY + window.scrollY - (viewportHeight / 2) + (elementRect.height / 2),
        behavior: 'smooth'
    });

};

function changePaddingElement (currentElement, padding) {
    if(window.innerWidth < tabletViewport) {
        currentElement.style.paddingBottom = padding;
    }
};

function onInitAccordion(){
    const firstItemEl = document.querySelector('.about-me-wrap-item');
    changePaddingElement(firstItemEl, '20px');
}

new Accordion('.accordion-container',{
    duration: 500,
    showMultiple: false,
    openOnInit: [0],
    onOpen: currentElement => scrollDown(currentElement),
    
    beforeOpen: (currentElement) => {
            changePaddingElement(currentElement, '20px');
            },
    beforeClose: (currentElement) => {
        changePaddingElement(currentElement, '32px')
}
});

onInitAccordion()