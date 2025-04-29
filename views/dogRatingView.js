function dogRating() {
    
    let html=""
    dogID = model.inputs.ratingDogID;
    /* if(idInput && idInput < model.data.dogs.length+1) {
        dogID = idInput
    }*/
    //let dog = model.data.dogs[dogID-1];
    const dog=model.data.dogs.find(element=>element.id==dogID)
    let stars=""
    if(model.app.currentUserId==null){
        stars=printStarsDisplay(dog.id)
    }else{
       stars=printStars(dog.id)

    }
    html += /*html*/ `
    
    <h2>${dog.name}<h2>
    <button onclick="changeRatingDog(dogID-1)"style="cursor: pointer;">Tilbake</button>
    <img src=${dog.picture}>
    <button onclick="changeRatingDog(dogID+1)"style="cursor: pointer;">Gå til neste</button>
    <div id="stars">${stars}</div>
    
    <h2>Rase: ${dog.race}<h2>
    `;
    return html

    /*const darkModeToggle = document.getElementById('darkModeToggle');
            darkModeToggle.addEventListener('click', function () {
                document.body.classList.toggle('dark-mode');
        // Re-render the stars after toggling dark mode
        document.getElementById('stars').innerHTML = printStars(model.data.dogs[0].id);
    });*/
}

// Update the stars in dogRatingView after clicking on stars in ratingStarsView

function updateDogRatingViewStars() {
    document.getElementById('stars').innerHTML = printStars(model.inputs.currentDogID);
}