function saveUsernameInput(username){
    model.inputs.loggInn.userName = username;
}

function savePasswordInput(password){
    model.inputs.loggInn.password = password;
}


function logIn() {
    const username = document.querySelector('#username');
    const password = document.querySelector('#password');

    password.classList.remove('input-error');
    username.classList.remove('input-error');
 
    
    console.log (password)
    const findUser = model.data.users.find(element=>element.email==model.inputs.loggInn.userName)
    const findPassword = model.data.users.find(element=>element.password==model.inputs.loggInn.password)
    if (!findUser) {
        username.classList.add('input-error'); // Legg til rød kant på brukernavn
        //return;
    }
    if (!findPassword) {
        password.classList.add('input-error'); // Legg til rød kant på passord
        //return;
    }
else if (findUser && findPassword) {
    console.log("kjørerelse")
    for(let i = 0; i< model.data.users.length; i++){
        console.log("kjørerloop")
        if(model.data.users[i].email == model.inputs.loggInn.userName && model.data.users[i].password == model.inputs.loggInn.password){
            console.log("Logged in")
            model.app.currentUserId = model.data.users[i].userID;
            changePage("dashboard");
        }
    }
}

}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function isValidUser(username) {
    const users = ['user1@example.com', 'user2@example.com'];
    return users.includes(username);
}

function validatePassword(username, password) {
    const validCredentials = {
        'user1@example.com': 'password123',
        'user2@example.com': 'password456'
    };
    return validCredentials[username] === password;
}

function createAccount() {
    model.app.currentPage = 'createPage';
    app.innerHTML = createAccountView();
}

function ratingSite() {
    dogRatingView();
}

function topLists() {
    topListsView();
}