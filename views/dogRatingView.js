function dogRatingView() {
    app.innerHTML = /*html*/ `
   
    
    <button onclick= "mainView()">Tilbake til Main View</button> <br> <br>

    <button onclick="topListsView()">Flere Topplister</button>
    <input type="text" id="search" placeholder="Søk">
    <button onclick="ratingSite()">Ratingside</button>
    <button onclick="myProfile()">Min Profil</button>
    <button onclick="gåTilNeste()">Gå til neste</button>
    <button onclick="tilbake()">Tilbake</button>
    <h1>Ratingside<h1>
    ${printStars(model.data.dogs[0].id)}
    
    <h2>Hundenavn<h2>
    <h3>Gå til neste<h3>
    <h2>Hunderase<h2>
    `
}

