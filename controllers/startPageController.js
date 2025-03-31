function logIn() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!validateEmail(username)) {
        alert('Brukernavn må være en gyldig e-postadresse.');
        return;
    }

    if (!isValidUser(username)) {
        alert('Feil brukernavn eller passord.');
        return;
    }

    if (!validatePassword(username, password)) {
        alert('Feil brukernavn eller passord.');
        return;
    }
    // Redirect to dashboard view
    dashboardViewFunction();
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function isValidUser(username) {
    // Dummy implementation for checking if user exists in the system
    // Replace this with actual logic to check user existence
    const users = ['user1@example.com', 'user2@example.com'];
    return users.includes(username);
}

function validatePassword(username, password) {
    // Dummy implementation for password validation
    // Replace this with actual logic to validate password
    const validCredentials = {
        'user1@example.com': 'password123',
        'user2@example.com': 'password456'
    };
    return validCredentials[username] === password;
}

function createAccount() {

}

function ratingSite() {
    dogRatingView();
}

function topLists() {
    topListsView();
}