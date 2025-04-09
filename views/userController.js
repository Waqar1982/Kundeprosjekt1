// Funksjon for å registrere en ny bruker
function registerUser(firstName, lastName, email, phone) {
    const isValidName = (name) => /^[A-Za-z]+$/.test(name);
    const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);
    const isValidPhone = (phone) => /^\d+$/.test(phone);

    if (!isValidName(firstName)) {
        alert("Fornavn må kun inneholde bokstaver.");
        return;
    }
    if (!isValidName(lastName)) {
        alert("Etternavn må kun inneholde bokstaver.");
        return;
    }
    if (!isValidEmail(email)) {
        alert("E-Post må inneholde @.");
        return;
    }
   // if (!isValidPhone(phone)) {
    //    alert("Telefonnummer må kun inneholde tall.");
     //   return;
    //}

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
        info: 'Ny bruker',
        dogRatings: [],
    };

    model.data.users.push(newUser);
    model.app.currentUserId = newUser.userID;

    console.log("Ny bruker registrert og logget inn:", newUser);
    clearCreateUserInput();
    changePage('dashboard');
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