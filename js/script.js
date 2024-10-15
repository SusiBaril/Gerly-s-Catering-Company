const loginEmailBtn = document.querySelector(".login-details");
const loginForm = document.querySelector(".login-form");

loginEmailBtn.addEventListener("click", () => {
  loginForm.style.display = "block";
  loginEmailBtn.style.display = "none";
});

const singupEmailBtn = document.querySelector(".login-details");
const signupForm = document.querySelector(".signup-form");

singupEmailBtn.addEventListener("click", () => {
    signupForm.style.display = "block";
    singupEmailBtn.style.display = "none";
});