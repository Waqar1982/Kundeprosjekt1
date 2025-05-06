
function saveDogs() {
}

function addDog(ownerId) {
    const newDog = {
        id: Math.floor(Math.random()*model.data.dogs.length+100-ownerId),
        owner: model.app.currentUserId,
        name: model.inputs.newDog.name,
        race: model.inputs.newDog.race,
        age: model.inputs.newDog.age,
        size: model.inputs.newDog.size,
        favoriteFood: model.inputs.newDog.favoriteFood,
        rating: 0,
        ratings: 0,
        info: '',
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
