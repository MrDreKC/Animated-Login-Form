let password = document.getElementById("password");
let eyeToggle = document.getElementById("eye");

eyeToggle.addEventListener("click", () => {
  if (password.type == "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
})
