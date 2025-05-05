function dogPageView() {   //ta inn input her senere
    let html=""

    dog = model.data.dogs.find(element=>element.id==model.inputs.currentDogID)
    html += /*HTML*/ `
   
    <br> <br>
    <button onclick="goToOwner()">Eiers profil</button> <br>
    <h2>${dog.name}</h2>
    <div class='row'>
        <div class='column1'>
            <img src=${dog.picture} alt="${dog.name}s profilbilde" style="width: 400px; height: 400px;">
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
    `
    if(model.app.currentUserId == dog.owner) {
        html += /*HTML*/ `
        <br><br>
        
        <input id="info" type="text" placeholder="Oppdater alder" onchange="model.inputs.updateDog.age=this.value">
        <input id="info" type="text" placeholder="Oppdater størrelse" onchange="model.inputs.updateDog.size=this.value">
        <input id="info" type="text" placeholder="Oppdater favorittmat" onchange="model.inputs.updateDog.favoriteFood=this.value">
        <input id="info" type="text" placeholder="Oppdater beskrivelse" onchange="model.inputs.updateDog.info=this.value">
        <button onclick="addInfo()">Oppdater hund</button>
        `
    }
    return html
}

function goToOwner() {
    model.inputs.ownerID = dog.owner
    changePage('ownerPage')
}

// Må legge in beskrivelse i modellen for ${dog.desc} */

function addInfo() {
    if(model.inputs.updateDog.size) {
        dog.size = model.inputs.updateDog.size
        model.inputs.updateDog.size = ''
    }
    if(model.inputs.updateDog.age) {
        dog.age = model.inputs.updateDog.age
        model.inputs.updateDog.age = ''
    }
    if(model.inputs.updateDog.favoriteFood) {
        dog.favoriteFood = model.inputs.updateDog.favoriteFood
        model.inputs.updateDog.favoriteFood = ''
    }
    if(model.inputs.updateDog.info) {
        dog.info = model.inputs.updateDog.info
        model.inputs.updateDog.info = ''
    }
    updateview()
}