import { fetchcooperation } from "./work-together-api";

export const formEl = document.querySelector('.work-form')
const emailInput = document.querySelector('#input-email');
const messageInput = document.querySelector('#input-message');
const modal = document.querySelector('.backdrop');
const btnClose = document.querySelector('.modal-close-btn');

let user = {
    email: '',
    comment: '',
};

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
}



// function onSuccess() {
//     if (emailRegex.test(user.email)){
//         emailInput.classList.add('success');
//         emailInput.classList.remove('error');
//         // messageInput.textContent = 'Success!';
//         messageInput.classList.add('success');
//         messageInput.classList.remove('error');
//     } else {
//         emailInput.classList.remove('success');
//         emailInput.classList.add('error');
//         messageInput.textContent = 'Invalid email, try again!';
//         messageInput.classList.remove('success');
//         messageInput.classList.add('error');
//     } 
// };

async function onFormSubmit(event){
    event.preventDefault();
    console.dir(event.currentTarget.elements);
    user = {
        email: event.currentTarget[0].value.trim(),
        comment: event.currentTarget[1].value.trim(),
    };
    
onSuccess()
    
    try{
    const contact = await fetchcooperation(user);
    console.log(contact);
} catch {
    console.log(error);
}
formEl.reset();
emailInput.classList.remove('success');
messageInput.classList.remove('error');
messageInput.textContent = '';

modal.classList.add('is-open')


};
function onCloseModal(){
    modal.classList.remove('is-open');
    };
    
emailInput.addEventListener('input', onSuccess);
formEl.addEventListener('submit', onFormSubmit);
btnClose.addEventListener('click', onCloseModal);
