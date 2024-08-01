function greet() {
  alert("Hello");
}


document.addEventListener('DOMContentLoaded', () => {
  const usernameInput = document.getElementById('username');
  const submitButton = document.querySelector('.submit-btn');
  const passwordInput = document.getElementById('password');

  if (usernameInput && submitButton) {
    submitButton.addEventListener('click', () => {
      const inputValue = usernameInput.value;
      const password = passwordInput.value;
      console.log('Username input value:', inputValue);
      console.log('Password input value', password);
    });
  }
});
