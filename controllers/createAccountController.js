function registerUser() {
    // Dummy user data
    const firstName = "Dummy";
    const lastName = "User";
    const email = "dummy.user@example.com";
    const phone = "12345678";

    // Logic to register the user would go here
    console.log(`Registering user with the following details:
        First Name: ${firstName}
        Last Name: ${lastName}
        Email: ${email}
        Phone: ${phone}`);

    // After registration, redirect to the dashboard view
    dashboardViewFunction();
}