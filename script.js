const form = document.querySelector("#form");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');
const dob = document.querySelector('#dob');
const terms = document.querySelector('#terms');
form.addEventListener('submit', (e) => {
// Clear previous error messages
clearErrors();
if (!validateInputs()) {
e.preventDefault(); // Prevent form submission if validation fails
}
});
function validateInputs() {
  let success = true; // Assume success unless any validation fails
  // Validate First Name
  if (firstName.value.trim() === "") {
    success = false;
    setError(firstName, "First Name is required.");
  }
  // Validate Last Name
  if (lastName.value.trim() === "") {
    success = false;
    setError(lastName, "Last Name is required.");
  }
  // Validate Email
  if (email.value.trim() === "") {
    success = false;
    setError(email, "Email is required.");
  } else if (!validateEmail(email.value.trim())) {
    success = false;
    setError(email, "Please enter a valid email.");
  }
  // Validate Password
  if (password.value.trim() === "") {
    success = false;
    setError(password, "Password is required.");
  }
  // Validate Confirm Password
  if (cpassword.value.trim() === "") {
    success = false;
    setError(cpassword, "Confirm Password is required.");
  } else if (cpassword.value.trim() !== password.value.trim()) {
    success = false;
    setError(cpassword, "Passwords do not match.");
  }
  // Validate Date of Birth
  if (dob.value.trim() === "") {
    success = false;
    setError(dob, "Date of Birth is required.");
  }
  // Validate Terms and Conditions
  if (!terms.checked) {
    success = false;
    setError(terms, "You must agree to the Terms and Conditions.");
  }
  return success; // Return true if all validations pass
}
// Function to set error messages
function setError(element, message) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");
  errorElement.innerText = message;
  inputGroup.classList.add("error");
  inputGroup.classList.remove("success");
}
// Function to clear all error messages
function clearErrors() {
  const errorElements = document.querySelectorAll(".error");
  errorElements.forEach((error) => {
    error.innerText = "";
  });
  const inputGroups = document.querySelectorAll(".input-group");
  inputGroups.forEach((group) => {
    group.classList.remove("error");
    group.classList.remove("success");
  });
}
const validateEmail = (email) => {
return String(email)
.toLowerCase()
.match(
     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-
  9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-
Z]{2,}))$/
  
  );
};