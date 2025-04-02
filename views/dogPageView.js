function dogPageView(idInput) {   //ta inn input her senere
    dogID = 3
    if(idInput) {
        dogID = idInput
    }
    dog = model.data.dogs[dogID-1]
    app.innerHTML = /*HTML*/ `
    <button onclick= "mainView()">Tilbake til Main View</button> <br> <br>
    <button onclick="ownerPageView()">Eiers profil</button> <br>
    <h2>${dog.name}</h2>
    <div class='row'>
        <div class='column1'>
            <img src=${dog.picture} alt="Aikos profil bilde" style="width: 400px; height: 400px;">
        </div>
        <div class='column2'>
            <br>
            <div id='race'>Rase: ${dog.race}</div>
            <div id='age'>Alder: ${dog.age}</div>
            <div id='Size'>Størrelse: ${dog.size}</div>
            <div id='Favourites'>Favorittmat: ${dog.favoriteFood}</div>
            <div id='description'>Liker å kose</div> <br>
        </div>
    </div>
    Oppdater info: <br> <br>
    <input id="breed" type="text" placeholder="Rase">
    <input id="breed" type="text" placeholder="Alder">    
    <input id="breed" type="text" placeholder="Størrelse/Vekt">    
    <input id="breed" type="text" placeholder="Favorittmat">  
    <img src="" alt="Flere bilder"> 
    <h1>Rating stars</h1>
    <input id="breed" type="text" placeholder="Her kan du skrive hva du vil">
    `
}

// Må legge in beskrivelse i modellen for ${dog.desc} */