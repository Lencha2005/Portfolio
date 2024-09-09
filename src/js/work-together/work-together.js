export const formEl = document.querySelector('.work-form')
const emailInput = document.querySelector('#input-email');
const messageInput = document.querySelector('#input-message');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

console.log(emailInput);
console.log(formEl);

function onSuccess(event){
    event.preventDefault();
     const email = event.target[0];
     const emailValue = email.value.trim();
    console.dir(email);
    // return emailValue;

    if (emailRegex.test(emailValue)){
        emailInput.classList.add('success');
        emailInput.classList.remove('error');
        messageInput.textContent = 'Success!';
        messageInput.classList.add('success');
        messageInput.classList.remove('error');
    } else {
        emailInput.classList.remove('success');
        emailInput.classList.add('error');
        messageInput.textContent = 'Invalid email, try again!';
        messageInput.classList.remove('success');
        messageInput.classList.add('error');
    }
    // return emailValue;
};

formEl.addEventListener('submit', onSuccess);