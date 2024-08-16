window.greetAdmin = function () {
  const usernameInput = document.getElementById('username');

  if (usernameInput) {
    const inputValue = usernameInput.value;
    alert('Hello ' + inputValue + "\nPermissions: Admin");
  }
}

window.greetMember = function () {
  const usernameInput = document.getElementById('username');

  if (usernameInput) {
    const inputValue = usernameInput.value;
  }
}

window.confirmUpvoteClick = function (candidateName) {
  alert(candidateName + ' has been selected');
}

window.confirmDownvoteClick = function (candidateName) {
  alert(candidateName + ' has been removed');
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
