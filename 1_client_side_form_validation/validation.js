const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    //get the values from the inputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        //show error
        //add error class
        setErrorFor(username, 'Username cannot be blank');
    } else {
        //add success class
        setSuccessFor(username);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; //-form-control
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = message;
    //add error class
    formControl.className = formControl.className + ' error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = formControl.className + ' success';
}