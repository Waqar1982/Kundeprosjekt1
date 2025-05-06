// Funksjon for å registrere en ny bruker
function registerUser(firstName, lastName, email, phone) {
    const isValidName = (name) => /^[A-Za-z]+$/.test(name);
    const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);
    const isValidPhone = (phone) => /^\d+$/.test(phone);

    const newUser = {
        userID: model.data.users.length + 1,
        adminUser: false,
        firstName: firstName,
        lastName: lastName,
        password: model.inputs.createUser.password,
        email: email,
        phone: phone,
        profilePicture: '',
        dogList: [],
        bio: 'Ny bruker',
        dogRatings: [],
    };

    model.data.users.push(newUser);
    model.app.currentUserId = newUser.userID;

    console.log("Ny bruker registrert og logget inn:", newUser);
    clearCreateUserInput();
    app.innerHTML = `<h1>Bruker Laget</h1>
    <button onclick="changePage('dashboard')">Tilbake til forsiden</button>`;
}

function getAllUsers() {
    return model.data.users;
}

function getUserById(userId) {
    return model.data.users.find((user) => user.userID === userId);
}
function clearCreateUserInput (){
    model.inputs.createUser.password = '';
    model.inputs.createUser.email = '';
    model.inputs.createUser.firstName = '';
    model.inputs.createUser.lastName = '';
    model.inputs.createUser.number = '';
}