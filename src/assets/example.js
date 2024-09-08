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


// TODO: add functionality to update number of remaining votes for member
window.confirmUpvoteClick = function (candidateName) {
  alert(candidateName + ' has been selected');
}

window.confirmDownvoteClick = function (candidateName) {
  alert(candidateName + ' has been removed');
}

// TODO: reset number of remaining votes for member
window.clearMemberVotes = function (memberName) {
  alert(memberName + ' votes have been cleared');
}

window.submitMemberVotes = function (memberName) {
  alert(memberName + ' has submitted his vote');
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

