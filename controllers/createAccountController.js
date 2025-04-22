function handleUserRegistration() {
    
 const firstName = model.inputs.createUser.firstName
 const lastName =  model.inputs.createUser.lastName
 const email = model.inputs.createUser.email
 const phone = model.inputs.createUser.phone

    // Bruk registerUser-funksjonen fra userController.js
    registerUser(firstName, lastName, email, phone);
}







