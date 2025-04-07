function dogRatingView(idInput) {
    dogID = 4;
    if(idInput && idInput < model.data.dogs.length+1) {
        dogID = idInput
    }
    dog = model.data.dogs[dogID-1];
    app.innerHTML = /*html*/ `
   
    <button id="darkModeToggle">Toggle Dark Mode</button>
    <button onclick= "mainView()">Tilbake til Main View</button> <br> <br>

    <button onclick="topListsView()"style="cursor: pointer;">Flere Topplister</button>
    <input type="text" id="search" placeholder="Søk">
    <button onclick="myProfile()"style="cursor: pointer;">Min Profil</button>
   
   
    <h2>${dog.name}<h2>
    <button onclick="dogRatingView(dogID-1)"style="cursor: pointer;">Tilbake</button>
    <img src=${dog.picture}>
    <button onclick="dogRatingView(dogID+1)"style="cursor: pointer;">Gå til neste</button>
    <div id="stars">${printStars(model.data.dogs[0].id)}</div>
    
    <h2>Rase: ${dog.race}<h2>
    `;

    const darkModeToggle = document.getElementById('darkModeToggle');
            darkModeToggle.addEventListener('click', function () {
                document.body.classList.toggle('dark-mode');
        // Re-render the stars after toggling dark mode
        document.getElementById('stars').innerHTML = printStars(model.data.dogs[0].id);
    });
}

// Update the stars in dogRatingView after clicking on stars in ratingStarsView

function updateDogRatingViewStars() {
document.getElementById('stars').innerHTML = printStars(model.data.dogs[0].id);
}