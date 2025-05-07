document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var username = document.getElementById('username').value.trim();
    var password = document.getElementById('password').value.trim();
    var role = document.querySelector('input[name="role"]:checked');

    var message = document.getElementById('message');

    if (!role) {
        message.textContent = "Please select a role.";
        return;
    }

    // Redirect to dashboard after successful login
    if (username === "f" && password === "1234" && role.value === "farmer") {
        message.style.color = "green";
        message.textContent = "Welcome, Farmer!";
        setTimeout(function() {
            window.location.href = "dashboard.html";  // Redirect to farmer dashboard
        }, 1000);  // 1-second delay for message display
    } else if (username === "c" && password === "1234" && role.value === "consultant") {
        message.style.color = "green";
        message.textContent = "Welcome, Consultant!";
        setTimeout(function() {
            window.location.href = "dashboard.html"; // Correct if in the same directory
        }, 1000);  // 1-second delay for message display
    } else {
        message.style.color = "red";
        message.textContent = "Invalid credentials.";
    }
});
