function validateEmail()
 {
  var email = document.getElementById("email").value;
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(regex.test(email)) {
    alert("Valid email address!");
  } else {
    alert("Invalid email address!");
  }
}