const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*+-?";

const generateButton = document.getElementById("generate-button");
generateButton.addEventListener("click", generate);

const result = document.getElementById("result");
const copyButton = document.getElementById("copy-button");
copyButton.addEventListener("click", copyPassword);

function generate() {
  let characters = "";
  if (document.getElementById("lowercase-option").checked) {
    characters += lowercase;
  }
  if (document.getElementById("uppercase-option").checked) {
    characters += uppercase;
  }
  if (document.getElementById("numbers-option").checked) {
    characters += numbers;
  }
  if (document.getElementById("symbols-option").checked) {
    characters += symbols;
  }
  if (characters != "") {
    const length = Number(document.getElementById("password-length").value);
    let password = "";
    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * characters.length);
      password += characters[index];
    }
    result.value = password;
  }
}

function copyPassword() {
  const copyText = result;

  // check if the password is empty
  if (!copyText.value || copyText.value === "password") {
    Toastify({
      text: "Generate a password first!",
      duration: 3000, // Toast will appear for 3 seconds
      close: true, // Show close button
      gravity: "top", // Position the toast at the top of the screen
      position: "center", // Center it horizontally
      className: "toast-custom", // Optional custom class for additional styling
      style: {
        background: "red", // Background color of the toast
      },
    }).showToast();
    return; // stop the function if no password is generated
  }

  // selects and copy the password
  copyText.select();
  copyText.setSelectionRange(0, copyText.value.length);
  navigator.clipboard.writeText(copyText.value);

  // Show the Toastify toast
  Toastify({
    text: "Password copied to clipboard!",
    duration: 3000, // Toast will appear for 3 seconds
    close: true, // Show close button
    gravity: "top", // Position the toast at the top of the screen
    position: "center", // Center it horizontally
    className: "toast-custom", // Optional custom class for additional styling
    style: {
      background: "green", // Background color of the toast
    },
  }).showToast();
}
