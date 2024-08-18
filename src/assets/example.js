window.greetAdmin = function () {
  const usernameInput = document.getElementById('username');

  if (usernameInput) {
    const inputValue = usernameInput.value;
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

window.clearMemberVotes = function (memberName) {
  alert(memberName + ' votes have been cleared');
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
