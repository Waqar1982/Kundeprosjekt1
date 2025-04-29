function createAccountView() {
    let html = ""

    html += /*html*/ `
   

<div class="header">
    <h1 style="margin-bottom: 20px;">Opprett Bruker</h1>
    <hr>
</div>
<div class="form-container">
    <input type="text" id="firstName" placeholder="Fornavn" style= "width: 20%;" onchange="model.inputs.createUser.firstName=this.value">
    <input type="text" id="lastName" placeholder="Etternavn" style= "width: 20%;" onchange="model.inputs.createUser.lastName=this.value">
    <input type="text" id="email" placeholder="E-Post" style= "width: 20%;" onchange="model.inputs.createUser.email=this.value">
    <input type="text" id="password" placeholder="Passord" style= "width: 20%;" onchange="model.inputs.createUser.password=this.value">
    <input type="text" id="phone" placeholder="Telefonnummer" style= "width: 20%;" onchange="model.inputs.createUser.number=this.value">
   
    <button onclick="handleUserRegistration()" style= "width: 20%;">Registrer</button>
    </div> 
    `;
    return html
}