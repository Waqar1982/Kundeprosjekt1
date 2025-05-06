function dogRating() {
    
    let html=""
    dogID = model.inputs.ratingDogID;
   
    const dog=model.data.dogs.find(element=>element.id==dogID)
    let stars=""
    if(model.app.currentUserId==null){
        stars=printStarsDisplay(dog.id)
    }else{
       stars=printStars(dog.id)

    }
    html += /*html*/ `
    <h1> Rate min hund</h1>
    <h2>${dog.name}<h2>
    <button onclick="changeRatingDog(dogID, 'down')"style="cursor: pointer;">Tilbake</button>
    <img src=${dog.picture}>
    <button onclick="changeRatingDog(dogID, 'up')"style="cursor: pointer;">Gå til neste</button>
    <div id="stars">${stars}</div>
    
    <h2>Rase: ${dog.race}<h2>
    `;
    return html
}

function updateDogRatingViewStars() {
    document.getElementById('stars').innerHTML = printStars(model.inputs.currentDogID);
}