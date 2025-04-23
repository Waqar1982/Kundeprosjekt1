// Initialiserer hundelisten hvis den ikke finnes fra før 
// *HUSK Å ENDRE*
// let dogs = JSON.parse(localStorage.getItem('dogs')) || [];

// Legger til variabler som holder styr på om feltene er gyldige

// Lagrer og henter bio fra localStorage
function saveBio(newBio) {
    model.data.users.bio = newBio;
    // const bioText = document.getElementById('bioOwner').value;
    // localStorage.setItem('bio', bioText);
}
// function saveDogName(newName, newImage, newRase, newSize, newAge, newFavoriteFood) {
// model.inputs.newDog.name = newName;
// model.inputs.newDog.image = newImage;
// model.inputs.newDog.rase = newRase;
// model.app.inputs.newDog.size = newSize;
// model.app.inputs.newDog.age = newAge;
// model.app.inputs.newDog.favoriteFood = newFavoriteFood;
// }

// Lagrer og henter hunder fra localStorage
function saveDogs() {
    // localStorage.setItem('dogs', JSON.stringify(dogs));
}


// Viser skjemaet for å legge til ny hund


// Skjuler skjemaet for å legge til ny hund
// function closeAddDogForm() {
//     const form = document.getElementById('addDogForm');
//     if (form) form.style.display = 'none';
// }

function addDog(ownerId) {
const newDog = {
    id: Math.floor(Math.random()*model.data.dogs.length+100-ownerId), 
    name: model.inputs.newDog.name, 
    race: model.inputs.newDog.rase, 
    age: model.inputs.newDog.age, 
    size: model.inputs.newDog.size, 
    favoriteFood: model.inputs.newDog.favoriteFood, 
    rating: 0, 
    ratings: 0, 
    picture: model.inputs.newDog.image, 
}
console.log(newDog);
let user = model.data.users.find(user=>user.userID==ownerId)
user.dogList.push(newDog.id)
model.data.dogs.push(newDog)
updateview();

}

    function deleteDog(dogId) {
    let dogToDelete = model.data.dogs.find(dog=>dog.id==dogId)
    let currentUser = model.data.users.find(user=>user.userID==model.app.currentUserId)
    for(let i = 0; i > currentUser.dogList.length; i++) {
        console.log("kjører loop")
        if(currentUser.dogList[i]==dogId) {
            console.log(dogToDelete.id,currentUser.dogList[i])
        currentUser.dogList.splice(currentUser.dogList[i])
        model.data.dogs.splice(dogToDelete)
        }
    }updateview();
    
  // Gå igjennom hundelista/model.data.dogs, slette med riktig id
  // Slette riktig id fra loggedin user sin doglist, bruke .find()
  // Oppdaterview
}

// Viser detaljer for en bestemt hund
function viewDog(id) {
    const dog = model.data.dogs.find(d => d.id == id);
    if (!dog) return alert('Hund ikke funnet.');

    alert(`Du ser på hunden ${dog.name}`);

}
