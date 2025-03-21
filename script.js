"use strict";

const btnSubmit = document.querySelector(".subscribeBtn");
const btnDismiss = document.querySelector(".dismissBtn");
const formContainer = document.querySelector(".form .container");
const successEl = document.querySelector(".success_message");
const inputEl = document.querySelector("#email");
const errorMsg = document.querySelector(".errorMsg");
const successEmailText = document.querySelector(".success_message p");


const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  const emailValue = inputEl.value.trim();

  if (emailValue === "") {
    errorMsg.textContent = "Email is required!";
    inputEl.classList.add("active");
  } else if (!isValidEmail(emailValue)) {
    errorMsg.textContent = "Valid Email Required";
    inputEl.classList.add("active");
  } else {
    formContainer.style.display = "none";
    successEl.style.display = "block";

    successEmailText.innerHTML = `A confirmation email has been sent to <strong>${emailValue}</strong>. Please open it and click the button inside to confirm your subscription.`;

    errorMsg.textContent = "";
    inputEl.classList.remove("active");
  }
});

btnDismiss.addEventListener("click", () => {

  formContainer.style.display = "flex";
  successEl.style.display = "none"; 

  inputEl.value = "";
  inputEl.classList.remove("active");
});
