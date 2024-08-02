function greetAdmin() {
  const usernameInput = document.getElementById('username');

  if (usernameInput) {
    const inputValue = usernameInput.value;
    alert('Hello ' + inputValue + "\nPermissions: Admin");
  }
}

function greetMember() {
  const usernameInput = document.getElementById('username');

  if (usernameInput) {
    const inputValue = usernameInput.value;
    alert('Hello ' + inputValue + "\nPermissions: Member");
  }
}


document.addEventListener('DOMContentLoaded', () => {
  const usernameInput = document.getElementById('username');
  const submitButton = document.querySelector('.submit-btn');
  const passwordInput = document.getElementById('password');

  if (usernameInput && submitButton) {
    submitButton.addEventListener('click', () => {
      const inputValue = usernameInput.value;
      const password = passwordInput.value;

      alert('Hello ' + inputValue);
    });
  }
});
