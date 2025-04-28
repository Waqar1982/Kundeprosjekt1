// Initialiserer hundelisten hvis den ikke finnes fra før 
// *HUSK Å ENDRE*
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
    console.log('dogId',dogId)
    let currentUser = model.data.users.find(user=>user.userID==model.app.currentUserId)
    // går igjennom lista av hunder til currentuser
    for(let i = 0; i < currentUser.dogList.length; i++) {
        if(currentUser.dogList[i]==dogId) {
        currentUser.dogList.splice(i,1)
        }
    }
    for(let i = 0; i < model.data.dogs.length; i++) {
    if(model.data.dogs[i].id==dogId) {
    model.data.dogs.splice(i,1)
    }
    }
    
    updateview();
}

// Viser detaljer for en bestemt hund
function viewDog(id) {
    const dog = model.data.dogs.find(d => d.id == id);
    if (!dog) return alert('Hund ikke funnet.');

    alert(`Du ser på hunden ${dog.name}`);

}
