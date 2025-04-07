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



    for(let i = 0; i< model.data.users.length; i++){
        if(model.data.users[i].email == model.inputs.loggInn.userName && model.data.users[i].password == model.inputs.loggInn.password){
            //yay logget inn
            model.app.currentUserId = model.data.users[i].userID;
        }
    }

    //const user = model.data.users.find(element => element.userID == model.app.currentUserId);
    //user.fistName
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