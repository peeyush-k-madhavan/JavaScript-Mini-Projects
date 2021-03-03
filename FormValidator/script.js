const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//Show RED and Message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

//Show GREEN
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

//Valid Email
function checkMail(input) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, `Email is not valid`);
  }
}
//Check Required
function checkrequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}
//Field Name (ID)
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
//Check Length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

//Password Match
function checkPasswordMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, `Passwords do not match`);
  } else if (input2.value === "") {
    showError(input2, `Passwords do not match`);
  } else {
    showSuccess(input2);
  }
}
//Event Listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkrequired([username, email, password]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkMail(email);
  checkPasswordMatch(password, password2);
});
