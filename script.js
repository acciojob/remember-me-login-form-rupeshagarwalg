//your JS code here. If required.
// Select elements
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const submitBtn = document.getElementById("submit");
const existingBtn = document.getElementById("existing");
const form = document.getElementById("loginForm");

// Check for saved credentials in localStorage on load
window.onload = () => {
  const savedUser = localStorage.getItem("username");
  const savedPass = localStorage.getItem("password");

  if (savedUser && savedPass) {
    existingBtn.style.display = "block"; // show existing user button
  } else {
    existingBtn.style.display = "none"; // hide it
  }
};

// Form submission behavior
form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent page refresh
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (username === "" || password === "") {
    alert("Please enter both username and password.");
    return;
  }

  alert(`Logged in as ${username}`);

  if (checkbox.checked) {
    // Save credentials in localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    existingBtn.style.display = "block";
  } else {
    // Remove saved credentials
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    existingBtn.style.display = "none";
  }

  // clear fields
  usernameInput.value = "";
  passwordInput.value = "";
  checkbox.checked = false;
});

// Existing user login button behavior
existingBtn.addEventListener("click", () => {
  const savedUser = localStorage.getItem("username");
  if (savedUser) {
    alert(`Logged in as ${savedUser}`);
  }
});
