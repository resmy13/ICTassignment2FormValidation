// Function to validate the signup form
function validateForm() {
    const name = document.getElementById('name').value;
    const country = document.getElementById('country').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;

    // Regular expression for a valid email format
    const emailPattern = /^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // Regular expression for a valid phone number format
    const phonePattern = /^(\d{10}|(\d{3}[-.\s]\d{3}[-.\s]\d{4})|(\d{3}\s\d{3}\s\d{4})|(\d{3}\.\d{3}\.\d{4}))$/;

    // Regular expression for password validation
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    // Check if any field is empty
    if (name === '' && email === '' && phone === '' && password === '' && confirmPassword === '') {
        alert('All fields must be filled out');
        return false;
    }
    
    // Check if the email is in a valid format
    if (!email.match(emailPattern)) {
        alert('Please enter a valid email address');
        return false;
    }

    // Check if the phone number is in a valid format
    if (!phone.match(phonePattern)) {
        alert('Please enter a valid phone number');
        return false;
    }

    // Check if password and confirm password match
    if (password !=== confirmPassword) {
        alert('Passwords do not match');
        return false;
    }

    

    
    
    return true;

    
}
function checkPasswordStrength() {
    const password = document.getElementById("password").value;
    const passwordStrength = document.getElementById("password-strength").value;
    const progressBar = passwordStrength.querySelector(".progress-bar").value;

    // Calculate password strength score (0 to 4)
    let strength = 0;

    if (password.length >= 8) {
        strength += 1;
    }

    if (/[A-Z]/.test(password)) {
        strength += 1;
    }

    if (/[a-z]/.test(password)) {
        strength += 1;
    }

    if (/\d/.test(password)) {
        strength += 1;
    }

    
    progressBar.style.width = (strength / 4) * 100 + "%";

    
    if (strength === 0) {
        progressBar.className = "progress-bar bg-danger";
    } else if (strength === 1) {
        progressBar.className = "progress-bar bg-warning";
    } else if (strength >= 2) {
        progressBar.className = "progress-bar bg-success";
    }
}



