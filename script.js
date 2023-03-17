const subscribeForm = document.querySelector('.subscription-form');
const errorHint = document.querySelector('.error');
const errorIcon = document.querySelector('.error-icon');
const emailField = document.querySelector('.email-field');

const mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,})$/;

function validateEmail() {
  if (emailField.value.match(mailformat)) {
    errorHint.style.display = 'none';
    errorIcon.style.display = 'none';
    emailField.classList.remove('textfield-error');
    return true;
  }
  errorHint.style.display = 'block';
  errorIcon.style.display = 'block';
  emailField.classList.add('textfield-error');
  return false;
}

emailField.addEventListener('change', () => {
  validateEmail();
});

subscribeForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (validateEmail()) {
    alert('Valid. POST request template');
    e.target.reset();
  }
});
