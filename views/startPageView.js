function startPageView() {
    app.innerHTML = /*html*/ `

    <img src="dogpictures/dog1.avif" alt="Hundebilde" style="position: absolute; top: 120px; left: 10px; height: 150px;">
    <img src="dogpictures/dog2.avif" alt="Hundebilde" style="position: absolute; top: 300px; left: 10px; height: 150px;">
    <img src="dogpictures/dog3.avif" alt="Hundebilde" style="position: absolute; top: 480px; left: 10px; height: 150px;">
    <img src="dogpictures/dog4.avif" alt="Hundebilde" style="position: absolute; top: 660px; left: 10px; height: 150px;">
    <img src="dogpictures/dog5.avif" alt="Hundebilde" style="position: absolute; top: 840px; left: 10px; height: 150px;">
    
    <div id="loginBox">
    <input type="text" id="username" placeholder="Brukernavn">
    <input type="text" id="password" placeholder="Passord">
    <button onclick="logIn()">Logg Inn</button>
    <button onclick="createAccount()">Lag en konto</button>
    </div>
    <div id="topLeft">
    <button onclick="topLists()">Flere Topplister</button>
    <input type="text" id="search" placeholder="Søk">
    <button onclick="ratingSite()">Ratingside</button>
    </div>
    <h1>Dashboard1</h1>
    <div id="todaysDog">
    <h2>Dagens Hund:</h2>
    </div>
    <input type="text" id="newsBox" placeholder="Nyheter">
    <div id="top5Dogs">
    <h2>Topp 5 hunder</h2>
    </div>
    `
}