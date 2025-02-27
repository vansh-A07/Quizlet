// Attach event listener to the form
let form = document.getElementById("loginForm");

form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    let username = document.getElementById("username").value;
    let password = document.getElementById("pword").value;

    // Retrieve stored users from localStorage
    let storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the user exists and password matches
    let userFound = storedUsers.find(
        (user) => user.username === username && user.password === password
    );

    if (userFound) {
        alert(`Login successful! Welcome back, ${userFound.username}`);
        // Redirect to the index page
        window.location.href = "index.html";
    } else {
        alert("Login failed! Invalid username or password.");
    }
});