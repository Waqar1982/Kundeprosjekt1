function dogRatingView() {
    dogID = 6
    dog = model.data.dogs[dogID-1]
    app.innerHTML = /*html*/ `
   
    
    <button onclick= "mainView()">Tilbake til Main View</button> <br> <br>

    <button onclick="topListsView()">Flere Topplister</button>
    <input type="text" id="search" placeholder="Søk">
    <button onclick="myProfile()">Min Profil</button>
    <button onclick="gåTilNeste()">Gå til neste</button>
    <button onclick="tilbake()">Tilbake</button>

    <h1>Ratingside<h1>
    <h2>${dog.name}<h2>
    <img src=${dog.picture}>
    ${printStars(model.data.dogs[0].id)}
    
    <h3>Gå til neste<h3>
    <h2>Rase: ${dog.race}<h2>
    `
}

