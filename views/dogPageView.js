function dogPageView(idInput) {   //ta inn input her senere
    dogID = 3
    if(idInput) {
        dogID = idInput
    }
    dog = model.data.dogs[dogID-1]
    app.innerHTML = /*HTML*/ `
    <button onclick= "mainView()">Tilbake til Main View</button>
    <button onclick= "topListsView()">Til toplister</button>
     <br> <br>
    <button onclick="ownerPageView()">Eiers profil</button> <br>
    <h2>${dog.name}</h2>
    <div class='row'>
        <div class='column1'>
            ${printStars(model.data.dogs[0].id)}
            <img src=${dog.picture} alt="Aikos profil bilde" style="width: 400px; height: 400px;">
        </div>
        <div class='column2'>
            <br>
            <div id='race'>Rase: ${dog.race}</div>
            <div id='age'>Alder: ${dog.age}</div>
            <div id='Size'>Størrelse: ${dog.size}</div>
            <div id='Favourites'>Favorittmat: ${dog.favoriteFood}</div>
            <div id='description'>Liker å kose</div> <br>
            <img src="" alt="Lenke til flere bilder her (hvis de finnes)">
        </div>
    </div>
    Oppdater info: (Bare synlig for eier) <br> <br>
    <input id="breed" type="text" placeholder="Rase">
    <input id="breed" type="text" placeholder="Alder">    
    <input id="breed" type="text" placeholder="Størrelse/Vekt">    
    <input id="breed" type="text" placeholder="Favorittmat">  
 
    <br> <br>
   
    <input id="breed" type="text" placeholder="Her kan du skrive hva du vil">
    `
}

// Må legge in beskrivelse i modellen for ${dog.desc} */