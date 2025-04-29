function ownerPageView() {
  const currentUser = model.data.users.find(user=>user.userID==model.inputs.ownerID);
  //app.currentUserId TESTING
  let html =""

  html += /*html*/ `

  <div style="position: relative; text-align: center; font-family: Helvetica, sans-serif; padding: 20px;">

     

    <!-- PROFIL -->
    <!-- <div style="display: flex; justify-content: flex-end; padding-right: 20px; margin-bottom: 20px;">
        <button onclick="myProfile()" 
      //   class="myProfileBtn">
      //   Min profil
      </button>
      // Endre på h1 senere/fjerne?
       <h1>Velkommen ${currentUser.firstName} </h1> -->
    </div>
 

   <!-- HOVEDINNHOLD -->
    <div>
      <h1>Min Hundeside</h1>
      <textarea class="userBio" placeholder="${currentUser.bio}" rows="3"></textarea>
    </div>

    <!-- Legg til ny hund -->
          
    <!-- Skjema for å legge til ny hund (skjult som standard) -->
    <div>
      ${showAddDogForm(currentUser.userID)}
    </div>

    <!-- Viser lagrede hunder -->
    <div class="savedDogs">
      ${displayDogs(currentUser)}
    </div>

  </div>  
    
  `;

  return html
}

 // Lage function for lagre bio

function displayDogs(owner) {
  let html = "";
  let dogList = [];
  for(let i = 0; i < owner.dogList.length; i++) {
    for(let j = 0; j < model.data.dogs.length; j++) {
      if(model.data.dogs[j].id == owner.dogList[i]) {
        dogList.push(model.data.dogs[j]);
      }
    }
  }

  for(let i = 0; i < dogList.length; i++) {
    // let dog = dogList[i]; Never used
    html+=/*html*/`
    <div style="text-align: center; margin-bottom: 20px;">
      <button onclick="changeCurrentDog('${dogList[i].id}')" class="viewDogBtn">${dogList[i].name}</button>
      <br>
      <img src="${dogList[i].picture}" onclick="changeCurrentDog('${dogList[i].id}')" style="width: 200px; border-radius: 10px;">
    `
    if(model.app.currentUserId == model.inputs.ownerID){
      html += /*html*/
      `
      <br>
      <button onclick="deleteDog('${dogList[i].id}')" class="viewDogBtn">Slett</button>
      `
    }
    html += `</div>`
  }
  return html;
}

function showAddDogForm(id) {
  const formHtml = /*html*/ `
  <div>
    <h2>Legg til en ny hund</h2>
    
    <input class="addDogForm" type="text" onchange="model.inputs.newDog.name=this.value" placeholder="Hundens navn">
    <input class="addDogForm" type="text" onchange="model.inputs.newDog.image=this.value" placeholder="Bilde-URL">
    <input class="addDogForm" type="text" onchange="smodel.inputs.newDog.rase=this.value" placeholder="Rase">
    <input class="addDogForm" type="text" onchange="model.inputs.newDog.size=this.value" placeholder="Størrelse">
    <input class="addDogForm" type="text" onchange="model.inputs.newDog.age=this.value" placeholder="Alder">
    <input class="addDogForm" type="text" onchange="model.inputs.newDog.favoriteFood=this.value" placeholder="Favorittmat">
    
    <button onclick="addDog(${id})" class="viewDogBtn">Legg til</button>
  </div>
  `;
  return formHtml;
}