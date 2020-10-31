(function () {
  var form = document.querySelector('#register-form');
  var emailInput = document.querySelector('#userEmail');
  var phoneInput = document.querySelector('#userPhone');

  function showErrorMessage(input, message) {
    var container = input.parentElement; // The .input-wrapper

    // To remove an existing error message
    var error = container.querySelector('.error-message');
    if (error) {
      container.removeChild(error);
    }

    // Now add the error, if the message is not empty
    if (message) {
      var error = document.createElement('div');
      error.classList.add('error-message');
      error.innerText = message;
      container.appendChild(error);
    }
  }

  function validateEmail() {
    var value = emailInput.value;

    if (!value) {
      showErrorMessage(emailInput, 'E-mail is a required field.');
      return false;
    }

    if (value.indexOf('@') === -1) {
      showErrorMessage(emailInput, 'Please enter a valid e-mail address.');
      return false;
    }

    showErrorMessage(emailInput, null);
    return true;
  }

  function validatePhone() {
    var value = phoneInput.value;

    if (!value) {
      showErrorMessage(phoneInput, 'Please enter telephone number');
      return false;
    }

    if (value.indexOf('+') === -1) {
      showErrorMessage(phoneInput, 'Please enter international code with +');
      return false;
    }

    showErrorMessage(phoneInput, null);
    return true;
  }

  function validateForm() {
    var isValidEmail = validateEmail();
    var isValidPhone = validatePhone();
    return isValidEmail && isValidPhone;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Do not submit to the server
    if (validateForm()) {
      alert('Success!');
    }
  });

  emailInput.addEventListener('input', validateEmail);
  phoneInput.addEventListener('input', validatePhone);
})();
