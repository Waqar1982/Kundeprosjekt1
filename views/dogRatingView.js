function dogRatingView() {
    dogID = 4
    dog = model.data.dogs[dogID-1]
    app.innerHTML = /*html*/ `
   
    
    <button onclick= "mainView()">Tilbake til Main View</button> <br> <br>

    <button onclick="topListsView()">Flere Topplister</button>
    <input type="text" id="search" placeholder="Søk">
    <button onclick="myProfile()">Min Profil</button>
   
    <h1>Ratingside<h1>
    <h2>${dog.name}<h2>
    <button onclick="tilbake()">Tilbake</button>
    <img src=${dog.picture}>
    <button onclick="gåTilNeste()", position center>Gå til neste</button>
    ${printStars(model.data.dogs[0].id)}
    
    <h2>Rase: ${dog.race}<h2>
    `
}

