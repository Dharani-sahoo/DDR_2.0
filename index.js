// JavaScript for the form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = char(document.getElementById('Name')).value;
    const no =docoment.getElementById('No').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    $('.carousel').carousel()
    
    // Simple form validation
    if(name && email && message) {
        alert('Thank you for contacting us, ' + name + '! We will get back to you soon.');
        // Reset form
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill out all the fields.');
    }


    // Login Form Validation
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Hardcoded username and password for demo purposes
    const validUsername = 'admin';
    const validPassword = 'password123';

    // Check if the entered username and password are correct
    if (username === validUsername && password === validPassword) {
        alert('Login successful!');
        // Redirect or proceed with successful login logic here
    } else {
        alert('invalit pasword!');
    }


});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the form values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('error-message');

    // Clear any previous error messages
    errorMessage.textContent = '';

    // Simple validation for password matching
    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match!';
    } else {
        alert('Account created successfully!');
        // Here you could add logic to send the data to a server for account creation
        // Reset the form
        document.getElementById('signupForm').reset();
    }
});




});
