function validateEmail() {
  var emailInput = document.getElementById("emailInput");
  var hiddenText = document.getElementById("hidden-text");

  var email = emailInput.value;
  var isValidEmail = email.includes("@");

  if (!isValidEmail) {
    hiddenText.style.display = "block";
  } else {
    hiddenText.style.display = "none";
  }
}
