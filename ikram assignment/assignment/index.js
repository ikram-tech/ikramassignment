// script.js

document.getElementById('signupForm').addEventListener('submit', function(event) {
    // Get form elements
    var fullname = document.getElementById('fullname').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Simple validation checks
    if (fullname.length < 3) {
        alert('Full name must be at least 3 characters long.');
        event.preventDefault(); // Prevent form submission
    }
    
    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        event.preventDefault(); // Prevent form submission
    }
    
    // Email validation regex
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        event.preventDefault(); // Prevent form submission
    }
});
