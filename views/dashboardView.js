function dashboardView() {
    app.innerHTML = /*HTML*/ `
    <button onclick="topLists()">Flere Topplister</button>
    <input type="text" id="search" placeholder="Søk">
    <button onclick="ratingSite()">Ratingside</button>
    <h1>Dashboard2</h1>
    <h2>Dagens Hund:</h2>
    <input type="text" id="newsBox" placeholder="Nyheter">
    <h1>Topp 5 hunder</h1>
    `
}