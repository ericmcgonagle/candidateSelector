function greet() {
  alert("Hello");
}


document.addEventListener('DOMContentLoaded', () => {
  const usernameInput = document.getElementById('username');
  const submitButton = document.querySelector('.submit-btn');

  if (usernameInput && submitButton) {
    submitButton.addEventListener('click', () => {
      const inputValue = usernameInput.value;
      console.log('Username input value:', inputValue);
    });
  }
});
