import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getRequest } from "./work-together-api";
import { modalCloseOptions, scrollOptions } from './modal-handler';
import { markup } from './work-together-markup';


const formEl = document.querySelector('.work-form')
const emailInput = document.querySelector('#input-email');
const messageInput = document.querySelector('#input-message');
const backdrop = document.querySelector('.backdrop');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function onSuccess(){
    
    const emailValue = emailInput.value;
   
    if (emailRegex.test(emailValue)){
    emailInput.classList.add('success');
    emailInput.classList.remove('error');
    messageInput.textContent = '';

    return
   
} else {
    emailInput.classList.remove('success');
        emailInput.classList.add('error');
        messageInput.textContent = 'Invalid email, try again!';
} 
};

async function onFormSubmit(event){
    event.preventDefault();

    const {email, comments} = event.currentTarget.elements;

    onSuccess();

    const formData = {
        email: email.value.trim(),
        comment: comments.value.trim(),
    };

    try{
    const {title, message} = await getRequest(formData);

    backdrop.classList.add('is-open');
   scrollOptions.disableScroll();
   backdrop.innerHTML = markup(title, message);

    modalCloseOptions.onBind(backdrop);
    modalCloseOptions.onBackdropClick();

    formEl.reset();
} catch (error) {
    showError(`❌ ${error.response.data.message}`)
} finally {
    emailInput.classList.remove('success');
        emailInput.classList.remove('error');
}
};

function showError(message) {
    iziToast.error({
      message: `${message}`,
      position: 'topRight',
    });
};
    
emailInput.addEventListener('input', onSuccess);
formEl.addEventListener('submit', onFormSubmit);
