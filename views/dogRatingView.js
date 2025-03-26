function viewDogRating() {
    app.innerHTML = /*html*/ `

    <button onclick="topLists()">Flere Topplister</button>
    <input type="text" id="search" placeholder="Søk">
    <button onclick="ratingSite()">Ratingside</button>
    <button onclick="myProfile()">Min Profil</button>
    <h1>Ratingside<h1>
    <h2>Hundenavn<h2>
    <h3>Tilbake til forrige<h3>
    <h3>Gå til neste<h3>
    <h2>Hunderase<h2>
    `
}