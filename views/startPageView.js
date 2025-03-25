

function viewStartPage() {
    app.innerHTML = /*html*/ `
    <input type="text" id="username" placeholder="Brukernavn">
    <input type="text" id="password" placeholder="Passord">
    <button onclick="logIn()">Logg Inn</button>
    <button onclick="createAccount()">Lag en konto</button>
    <button onclick="topLists()">Flere Topplister</button>
    <input type="text" id="search" placeholder="Søk">
    <button onclick="ratingSite()">Ratingside</button>
    <h1>Dashboard1</h1>
    <h2>Dagens Hund:</h2>

    `

}


