var emailField = document.querySelector('#email');

emailField.onfocus = function() {
        emailField.value = 'onfocussss';
}

emailField.onblur = function() {
        emailField.value = 'onblurrrrr';
}