function logIn() {
    const username = document.getElementById('username');
    const password = document.getElementById('password');

    username.classList.remove('input-error');
    password.classList.remove('input-error');

    if (!validateEmail(username.value)) {
        username.classList.add('input-error'); // Legg til rød kant på brukernavn
        return;
    }
    if (!validatePassword(username.value, password.value)) {
        password.classList.add('input-error'); // Legg til rød kant på passord
        return;
    }
    if (!isValidUser(username.value,)) {
       username.classList.add('input-error'); // Legg til rød kant på brukernavn
       password.classList.add('input-error'); // Legg til rød kant passord
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
    createAccountView();
}

function ratingSite() {
    dogRatingView();
}

function topLists() {
    topListsView();
}