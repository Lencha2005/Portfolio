import Accordion from 'accordion-js';
import pathSprite from '../../img/sprite.svg';

const dataInfo = [
    {
        title: "What programming languages ​​are most often used in your project?",
        description: "In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."
    },
    {
        title: "What are the deadlines for the project?",
        description: "The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."
    },
    {
        title: "What payment methods do you accept?",
        description: "Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others."
    },
    {
        title: "How can I contact you?",
        description: "In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."
    },
    {
        title: "Do you provide advice or support?",
        description: "The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."
    },
    {
        title: "What does the process of developing a software product look like from idea to implementation?",
        description: "Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others."
    }
];
const listEl = document.querySelector('.faq-list');

// function renderListDescription(items){
//     return items.map(item => `<li class="faq-item">${item}</li>`).join("");
// }
// renderListDescription(dataInfo);

function renderContentAccordion(data){
    const markupItem = data.map(item => 
        ` <li class="faq-item ac">
        <h3 class="faq-item-title ac-header">
        <button class="faq-item-btn ac-trigger"><span class="faq-span-title">${item.title}</span></button>
        </h3>
        <div class="ac-panel">
        <p class="faq-item-text ac-text">${item.description}</p>
        </div>
        </li>`).join('');
    
    listEl.insertAdjacentHTML('beforeend', markupItem);
};
console.log(renderContentAccordion(dataInfo));

const addIconTriggerBtn = () => {
    const triggerBtns = document.querySelectorAll('.faq-item-btn');
    triggerBtns.forEach(triggerBtn => {
        const markup = ` <svg class="faq-item-icon">
          <use href="${pathSprite}#arrow-top"></use>
        </svg>`
        triggerBtn.insertAdjacentHTML("beforeend", markup)

    });
};

addIconTriggerBtn();
const scrollDown = (currentElement) => {
    const elementRect = currentElement.getBoundingClientRect();
    const elementY = elementRect.top;
    const viewportHeight = window.innerHeight;

    window.scrollTo({
        top: elementY + window.scrollY - (viewportHeight / 2) + (elementRect.height / 2),
        behavior: 'smooth'
    });

};

new Accordion('.accordion',{
    duration: 500,
    showMultiple: true,
    onOpen: currentElement => scrollDown(currentElement),
});