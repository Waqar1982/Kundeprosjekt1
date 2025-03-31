function startPageView() {
    app.innerHTML = /*html*/ `
    <img src="dogpictures/dog1.avif" alt="Hundebilde" style="position: absolute; top: 120px; left: 10px; height: 150px;">
    <div class="stars" style="position: absolute; top: 305px; left: 60px; color: gold;">
        ${'★'.repeat(5)}${'☆'.repeat(5 - 5)}
    </div>

    <img src="dogpictures/dog2.avif" alt="Hundebilde" style="position: absolute; top: 300px; left: 10px; height: 150px;">
    <div class="stars" style="position: absolute; top: 485px; left: 60px; color: gold;">
        ${'★'.repeat(4)}${'☆'.repeat(5 - 4)}
    </div>

    <img src="dogpictures/dog3.avif" alt="Hundebilde" style="position: absolute; top: 480px; left: 10px; height: 150px;">
    <div class="stars" style="position: absolute; top: 665px; left: 60px; color: gold;">
        ${'★'.repeat(3)}${'☆'.repeat(5 - 3)}
    </div>

    <img src="dogpictures/dog4.avif" alt="Hundebilde" style="position: absolute; top: 660px; left: 10px; height: 150px;">
    <div class="stars" style="position: absolute; top: 845px; left: 60px; color: gold;">
        ${'★'.repeat(2)}${'☆'.repeat(5 - 2)}
    </div>

    <img src="dogpictures/dog5.avif" alt="Hundebilde" style="position: absolute; top: 840px; left: 10px; height: 150px;">
    <div class="stars" style="position: absolute; top: 1025px; left: 60px; color: gold;">
        ${'★'.repeat(1)}${'☆'.repeat(5 - 1)}
    </div>

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
    <h1>StartPage</h1>
    <div id="todaysDog">
    <h2 style="margin: 0; text-align: center;">Dagens Hund:</h2>
    <img src="dogpictures/dog1.avif" alt="Dagens Hund">
    <div class="stars" style="color: gold; text-align: center; margin-top: 10px;">
    ${'★'.repeat(5)}
        </div>
    </div>
    <input type="text" id="newsBox" placeholder="Nyheter!">
    <div id="top5Dogs">
    <h2>Topp 5 hunder</h2>
    </div>
    `
}