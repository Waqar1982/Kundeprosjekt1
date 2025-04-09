function handleUserRegistration() {
    
 const firstName = model.inputs.createUser.firstName
 const lastName =  model.inputs.createUser.lastName
 const email = model.inputs.createUser.email
 const phone = model.inputs.createUser.phone

    // Bruk registerUser-funksjonen fra userController.js
    registerUser(firstName, lastName, email, phone);
}






/*function registerUser() {

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

   
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
    if (!isValidPhone(phone)) {
        alert("Telefonnummer må kun inneholde tall.");
        return;
    }

    const newUser = {
        userID: model.data.users.length + 1,
        adminUser: false,
        firstName: firstName,
        lastName: lastName,
        password: '',
        email: email,
        phone: phone,
        profilePicture: '',
        info: 'Ny bruker',
    };

    model.data.users.push(newUser);

    model.app.currentUserId = newUser.userID;
    console.log("Ny bruker registrert og logget inn:", newUser);

    changePage('dashboard');
}*/
