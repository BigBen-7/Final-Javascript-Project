const Mainform = document.querySelector("#form");
const username = document.getElementById("username");
const password = document.querySelector("#password");
const confirmPassword = document.getElementById("confirm-password");

Mainform.addEventListener("submit", function (e) {
  e.preventDefault();
  checkInput();
});
function isValidPassword(password) {
  return /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/.test(
    password
  );
}

function checkInput() {
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();

  // username
  if (usernameValue === "") {
    setErrorFor(username, "Username cannot be blank");
  } else if (usernameValue < 5) {
    setErrorFor(username, "Username cannot be less than 5 chararcter");
  } else {
    setSuccessFor(username);
  }

  // password check
  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be blank");
  } else if (!isValidPassword(passwordValue)) {
    setErrorFor(
      password,
      "Password must contain letters, number and special characters"
    );
  } else if (passwordValue < 8) {
    setErrorFor(password, "Password cannot be less than 8");
  } else {
    setSuccessFor(password);
  }

  // confrim password
  if (confirmPasswordValue === "") {
    setErrorFor(confirmPassword, "password cannot be blank");
  } else if (confirmPasswordValue !== passwordValue) {
    setErrorFor(confirmPassword, "password do not match");
  } else {
    setSuccessFor(confirmPassword);
  }
}
function setErrorFor(input, message) {
  const formcontrol = input.parentElement;
  const small = formcontrol.querySelector("small");

  small.innerText = message;
  formcontrol.className = "form-control error";
}
function setSuccessFor(input) {
  const formcontrol = input.parentElement;
  formcontrol.className = "form-control success";
}
