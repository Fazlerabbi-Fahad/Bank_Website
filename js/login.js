// login page JS
document.getElementById('btn-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    if (userEmail === 'fazlerabbifahad.54@gmail.com' && userPassword === 'fazle123') {
        window.location.href = 'bank.html';
    } else {
        alert('Invalid email or password!!!Please enter the correct email and password.');
    }
})

