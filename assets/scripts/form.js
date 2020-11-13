const form = document.getElementById('form');
const userName = document.getElementById('userName');
const userLastName = document.getElementById('userLastName');
const email = document.getElementById('email');
const country = document.getElementById('country');
const message = document.getElementById('message');
const agree = document.getElementById('agree');


form.addEventListener('submit', e => {
    e.preventDefault()
    checkInputs();
    errors = document.getElementsByClassName('error') // Cuenta los campos con error
    if (errors.length === 0){
        form.submit();
        // alert() o mensaje de que ya todo fue exitoso
        // limpiasForm()
    }
});

function checkInputs() {
    const userNameValue = userName.value.trim();
    const userLastNameValue = userLastName.value.trim();
    const emailValue = email.value.trim();
    const countryValue = country.value.trim();
    const messageValue = message.value.trim();


    if (userNameValue === '') {
        setErrorFor(userName, 'Nombre no puede estar vacío');
    } else {
        setSuccessFor(userName);
    }

    // if (userLastNameValue === '') {
    //     setErrorFor(userLastName, 'Apellido no puede estar vacío');
    // } else {
    //     setSuccessFor(userLastName);
    // }


    if (emailValue === '') {
        setErrorFor(email, 'Email no puede estar vacío');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'No es un correo válido');
    } else {
        setSuccessFor(email);
    }

    // if (countryValue === '') {
    //     setErrorFor(country, 'País no puede estar vacío');
    // } else {
    //     setSuccessFor(country);
    // }

    if (messageValue === '') {
        setErrorFor(message, 'Mensaje no puede estar vacío');
    } else {
        setSuccessFor(message);
    }

    if (!this.form.checkbox.checked) {
        setErrorFor(agree, 'Debe aceptar Términos & Condiciones');
    } else {
        setSuccessFor(agree);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


