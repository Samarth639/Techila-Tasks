// validations
function validateEmail() {
  var emailInput = document.getElementById("input2");
  var emailMessage = document.getElementById("email");
  var email = emailInput.value;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(email)) {
    emailMessage.style.display = "none";
  } else {
    emailMessage.style.display = "block";
  }
}

function validatePhone() {
  var phoneInput = document.getElementById("input3");
  var phoneMessage = document.getElementById("phone");
  var phone = phoneInput.value;
  var phoneRegex = /^\d+$/;

  if (phoneRegex.test(phone)) {
    phoneMessage.style.display = "none";
  } else {
    phoneMessage.style.display = "block";
  }
}
function validateForm() {
  var inputs = document.getElementsByClassName("inputs");
  var valid = true;
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].value === "") {
      alert("All fields are compulsory!");
      valid = false;
      break;
    }
  }
  if (!valid) {
    var inputFields = document.getElementsByClassName("inputs");
    for (var i = 0; i < inputs.length; i++) {
      inputFields[i].value = "";
    }
  }
  console.log("valid" + valid);
}


// data stored
let object  = {};
function saved(event){
    object[event.target.name] = event.target.value;
    console.log(object)
}