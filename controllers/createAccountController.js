function registerUser() {
  
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

   
    console.log(`Registering user with the following details:
        First Name: ${firstName}
        Last Name: ${lastName}
        Email: ${email}
        Phone: ${phone}`);

    
    dashboardViewFunction();
}