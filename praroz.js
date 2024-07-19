// FORM VALIDATION DECLARATION
const Form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");

// HAMBURGER
const menuBtn = document.querySelector(".menu-icon span");

const searchBtn = document.querySelector(".search-icon");

const cancelBtn = document.querySelector(".cancel-icon");

const items = document.querySelector(".nav-items");

const form = document.querySelector("form");

menuBtn.onclick = () => {
  items.classList.add("active");

  menuBtn.classList.add("hide");

  searchBtn.classList.add("hide");

  cancelBtn.classList.add("show");
};

cancelBtn.onclick = () => {
  items.classList.remove("active");

  menuBtn.classList.remove("hide");

  searchBtn.classList.remove("hide");

  cancelBtn.classList.remove("show");

  form.classList.remove("active");
};

searchBtn.onclick = () => {
  form.classList.add("active");

  searchBtn.classList.add("hide");

  cancelBtn.classList.add("show");
};



Form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkInput();
});

// Corrected the password validation regex
function isValidPassword(password) {
  // The regex now correctly uses positive lookaheads to ensure the password contains
  // at least one lowercase letter, one uppercase letter, one digit, and one special character.
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/.test(password);
}

function isEmail(email) {
  // Standard email validation regex
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function checkInput() {
  const passwordValue = password.value.trim();
  const emailValue = email.value.trim();
  
  // Email check
  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email must include @ and .com");
  } else {
    setSuccessFor(email);
  }

  // Password check
  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be blank");
  } else if (!isValidPassword(passwordValue)) {
    // The error message is shown if the password does not meet the criteria specified in the regex
    setErrorFor(password, "Password must contain letters, number, and special characters");
  } else {
    setSuccessFor(password);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerText = message;
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
