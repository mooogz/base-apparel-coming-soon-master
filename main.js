const btn = document.querySelector('#submit-button');
const inputField = document.querySelector('#email');
const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const emailError = document.querySelector('.error-msg');
const errorIcon = document.querySelector('.error');

btn.addEventListener('click', function() {
    if (inputField.value.length === 0 || !inputField.value.match(emailValidation)) {
        emailError.style.display = 'inline';
        errorIcon.style.display = 'inline';
        emailError.style.color = "red";
        emailError.textContent = "Please provide a valid email address";
    } else {
        emailError.style.display = "inline";
        emailError.style.color = "green";
        errorIcon.style.display = "none";
        emailError.textContent = "Thank you for subscribing!";
    }
})