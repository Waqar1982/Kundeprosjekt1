function createAccountView() {
    let html = ""

    html += /*html*/ `
        <style>
    .form-container {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .header {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .header h1 {
        margin: 0;
    }
    hr {
        width: 100%;
        border: 1px solid #000;
        margin-bottom: 30px;
    }
</style>

<div class="header">
    <h1 style="margin-bottom: 20px;">Opprett Bruker</h1>
    <hr>
</div>
<div class="form-container">
    <input type="text" id="firstName" placeholder="Fornavn" style= "width: 50%;">
    <input type="text" id="lastName" placeholder="Etternavn" style= "width: 50%;">
    <input type="text" id="email" placeholder="E-Post" style= "width: 50%;">
    <input type="text" id="password" placeholder="Passord" style= "width: 50%;">
    <input type="text" id="phone" placeholder="Telefonnummer" style= "width: 50%;">
    <button onclick="handleUserRegistration()" style= "width: 50%;">Registrer</button>
    </div> 
    `;
    return html
}