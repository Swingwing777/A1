var emailInput = document.querySelector('#user-email');
var phoneInput = document.querySelector('#user-tel');


// ------------------ Validate email details -------------------

function validateEmail() {
  var value = emailInput.value;

  if (!value) {
    showErrorMessage(emailInput, 'Email is a required field');
    return false;
  }

  if (value.indexOf('@') === -1) {
    showErrorMessage(emailInput, 'A valid email is required');
    return false;
  }

  showErrorMessage(emailInput, null);
  return true;
}

// ---------------- Validate phone number ----------------------

function validatePhone() {
  var number = phoneInput.value ;
  var hasPlusSign = number.indexOf('+') > -1;
  var hasNoLetters = number.indexOf('[a-zA-Z]') < 0;
  return number && hasPlusSign && hasNoLetters;

  if (value.indexOf('+') === -1) {
    showErrorMessage(phoneInput, "Please include '+' followed by international code");
    return false;
  }

  if (value.indexOf('[a-zA-Z]') > -1) {
    showErrorMessage(phoneInput, "Please '+' then numbers only");
    return false;
  }

  showErrorMessage(phoneInput, null);
  return true;
}

// ------------- Error message -----------------------

function showErrorMessage(input, message)  {
  var container = input.parentElement;

  // To remove an existing error Message
  var error = container.querySelector('error-message');
    if (error) {
      container.removeChild(error)
    }

  // To remove an existing error Message
    if (message) {
      var error = document.createElement('div');
      error.classList.add('error-message');
      container.appendChild(error);
    }
}

//--------------Validate entire form -----------------

var form = document.querySelector('.userInfo');  // find form ID on DOM

function validateForm() {
  var isValidEmail = validateEmail();
  var isValidPhone = validatePhone();
  return isValidEmail && isValidPhone;        // Return both validation results
}

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Do not submit to the server
    if (validateForm()) {  // is truthy
      alert('Success!');
    }
  })

emailInput.addEventListener('input', validateEmail);
phoneInput.addEventListener('input', validatePhone);
