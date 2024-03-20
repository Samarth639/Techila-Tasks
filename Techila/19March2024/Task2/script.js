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
  function validateForm1() {
    var inputs = document.getElementsByClassName("inputsof1");
    var valid = true;
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value === "") {
            alert("All fields are compulsory!"); 
            valid = false;
            break;
        }
    }
    if(valid) {
        var form1 = document.getElementsByClassName("form1");
        for (var j = 0; j < form1.length; j++) {
            form1[j].style.display = "none";
        }


        // opening new form
        var form2 = document.getElementsByClassName("form2");
        for (var j = 0; j < form2.length; j++) {
            form2[j].style.display = "block";
        }

        //changing background color of circles
        document.getElementById("gola2").style.backgroundColor="yellow"
        document.getElementById("gola1").style.backgroundColor="rgb(149, 113, 165, 0.75)"
        
    }
    console.log('valid: ' + valid);
}



