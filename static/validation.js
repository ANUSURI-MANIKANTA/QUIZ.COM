function validate() {
    var username = document.getElementById('uname').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('pwd').value;
    var confirmPassword = document.getElementById('cpwd').value;
    var image = document.getElementById('image').value;

    var usernameError = document.querySelector('#form .input-group:nth-child(1) .error');
    var emailError = document.querySelector('#form .input-group:nth-child(2) .error');
    var passwordError = document.querySelector('#form .input-group:nth-child(3) .error');
    var confirmPasswordError = document.querySelector('#form .input-group:nth-child(4) .error');
    var imageError = document.querySelector('#form .input-group:nth-child(5) .error');

    // Reset errors
    usernameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';
    imageError.textContent = '';

    var isValid = true;

    // Validate username
    if (username.trim() === '') {
        usernameError.textContent = 'Username is required';
        isValid = false;
    }

    // Validate email
    if (email.trim() === '') {
        emailError.textContent = 'Email is required';
        isValid = false;
    } else if (!isValidEmail(email)) {
        emailError.textContent = 'Invalid email format';
        isValid = false;
    }

    // Validate password
    if (password.trim() === '') {
        passwordError.textContent = 'Password is required';
        isValid = false;
    } else if (password.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters long';
        isValid = false;
    }

    // Validate confirm password
    if (confirmPassword.trim() === '') {
        confirmPasswordError.textContent = 'Confirm Password is required';
        isValid = false;
    } else if (confirmPassword !== password) {
        confirmPasswordError.textContent = 'Passwords do not match';
        isValid = false;
    }

    // Validate image
    if (image.trim() === '') {
        imageError.textContent = 'Image is required';
        isValid = false;
    }

    return isValid;
}

function isValidEmail(email) {
    // Simple email validation regex
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}