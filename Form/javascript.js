let popup = document.getElementById("popup");

function validateForm() {
// Get form values
var fullName = document.forms["myForm"]["fullName"].value;
var email = document.forms["myForm"]["email"].value;
var phoneNumber = document.forms["myForm"]["phoneNumber"].value;
var password = document.forms["myForm"]["password"].value;
var confirmPassword = document.forms["myForm"]["confirmPassword"].value;

// Validate Full Name
if (fullName.length < 5) {
  alert("Name must be at least 5 characters long.");
  return false;
}

// Validate Email
if (email.indexOf("@") === -1) {
  alert("Enter a valid email address.");
  return false;
}

// Validate Phone Number
if (phoneNumber.length !== 10 || phoneNumber === "123456789" || isNaN(phoneNumber)) {
  alert("Enter a valid 10-digit phone number.");
  return false;
}

// Validate Password
if (password.length < 8 || password === "password" || password === fullName) {
  alert("Password must be at least 8 characters long and should not be 'password' or your name.");
  return false;
}

// Validate Confirm Password
if (password !== confirmPassword) {
  alert("Passwords do not match.");
  return false;
}
if (SubmitEvent) {
  alert("Your Response is submited!!...")
  }
  }
    

function verifyHuman() {
  var response = grecaptcha.getResponse();
  if (response.length === 0) {
    alert("Please complete the reCAPTCHA verification.");
    return false; // Prevent form submission
  } else {
    alert("reCAPTCHA verification successful. Form submitted!");
    return true; // Allow form submission
  }
}

function openPopup(){
  popup.classList.add("open-popup");
}

function closePopup(){
  popup.classList.remove("open-popup");
}

