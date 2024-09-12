import { fetchcooperation } from "./work-together-api";

export const formEl = document.querySelector('.work-form')
const emailInput = document.querySelector('#input-email');
const messageInput = document.querySelector('#input-message');
const modal = document.querySelector('.backdrop');
const btnClose = document.querySelector('.modal-close-btn');

// let user = {
//     email: '',
//     comment: '',
// };

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function onSuccess(){
    // event.preventDefault()
    const emailValue = emailInput.value;
    console.log(emailValue);
    if (emailRegex.test(emailValue)){
    emailInput.classList.add('success');
    emailInput.classList.remove('error');
   
} else {
    emailInput.classList.remove('success');
        emailInput.classList.add('error');
    
}
};

const scroll = {
    disableScroll() {
        document.body.style.overflow = 'hidden';
    },
    enableScroll() {
        document.body.style.overflow = 'visible';
    }
        }

async function onFormSubmit(event){
    event.preventDefault();

    const {email, comments} = event.currentTarget.elements;

    onSuccess()

    const user = {
        email: email.value.trim(),
        comment: comments.value.trim(),
    };
    console.log(user)
    
    try{
    const contact = await fetchcooperation(user);
    modal.classList.add('is-open');

   scroll.disableScroll();
    console.log(contact);
} catch {
    console.log(error);
}
formEl.reset();
emailInput.classList.remove('success');
messageInput.classList.remove('error');
messageInput.textContent = '';




};
function onCloseModal(){
    modal.classList.remove('is-open');
    };
    
emailInput.addEventListener('input', onSuccess);
formEl.addEventListener('submit', onFormSubmit);
btnClose.addEventListener('click', onCloseModal);
