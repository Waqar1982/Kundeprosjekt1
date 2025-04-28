function dogPageView() {   //ta inn input her senere
    model.inputs.updateDog.info = ''
    let html=""

    dog = model.data.dogs.find(element=>element.id==model.inputs.currentDogID)
    html += /*HTML*/ `
   
    <br> <br>
    <button onclick="goToOwner()">Eiers profil</button> <br>
    <h2>${dog.name}</h2>
    <div class='row'>
        <div class='column1'>
            <img src=${dog.picture} alt="Aikos profil bilde" style="width: 400px; height: 400px;">
            ${printStars(dog.id)}
        </div>
        <div class='column2'>
            <br>
            <div id='race'>Rase: ${dog.race}</div>
            <div id='age'>Alder: ${dog.age}</div>
            <div id='Size'>Størrelse: ${dog.size}</div>
            <div id='Favourites'>Favorittmat: ${dog.favoriteFood}</div>
            <div id='description'>Info: ${dog.info}</div> <br>
        </div>
    </div>
 
    <br><br>
   
    <input id="info" type="text" placeholder="Oppdater info" onchange="model.inputs.updateDog.info=this.value">
    <button onclick="addInfo()">Oppdater hund</button>
    `
    return html
}

function goToOwner() {
    model.inputs.ownerID = dog.owner
    changePage('ownerPage')
}

// Må legge in beskrivelse i modellen for ${dog.desc} */

function addInfo() {
    dog.info = model.inputs.updateDog.info
    model.inputs.updateDog.info = ''
}