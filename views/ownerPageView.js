function ownerPageView() {
const currentUser = model.data.users.find(user=>user.userID==model.app.currentUserId);
let html =""

html += /*html*/ `

  <div style="position: relative; text-align: center; font-family: Helvetica, sans-serif; padding: 20px;">

     

    <!-- PROFIL -->
    <div style="display: flex; justify-content: flex-end; padding-right: 20px; margin-bottom: 20px;">
      <button onclick="myProfile()" 
        style="padding: 10px; font-size: 12px;">
        Min profil
      </button>
      <h1>Velkommen ${currentUser.firstName}</h1>
    </div>
 

    <!-- HOVEDINNHOLD -->
    <div>
      <h1>Min Hundeside</h1>
      <textarea placeholder="${currentUser.bio}" rows="3" style="width: 80%; padding: 10px;"></textarea>
    </div>

    <!-- Legg til ny hund -->
          
    <!-- Skjema for å legge til ny hund (skjult som standard) -->
    <div id="addDogForm" style= "background: white; padding 20px; border-radius: 10px; margin-top: 20px;">
      <h2>Legg til en ny hund</h2>
       ${showAddDogForm(currentUser.userID)}
      </div>

    <!-- Viser lagrede hunder -->
    <div style="display: flex; justify-content: space-around; flex-wrap: wrap; margin-top: 30px;">
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
    let dog = dogList[i];
    // Endre alle dog til doglist[i]
    html+=/*html*/`
    <div id="dog-${dogList[i].name}" style="text-align: center; margin-bottom: 20px;">
    <button onclick="viewDog('${dog.name}')" style="padding: 5px 10px; margin-bottom: 5px;">${dog.name}</button>
    <br>
    <img src="${dog.imageURL}" style="width: 200px; border-radius: 10px;">
    <br>
    <button id="delete-${dog.name}" onclick="askDeleteDog('${dog.name}')" style="padding: 5px 10px; margin-top: 5px; background-color: red; color: white; border: none; border-radius: 5px;">Slett</button>
    <button id="confirm-delete-${dog.name}" onclick="deleteDog('${dog.name}')" style="display: none; padding: 5px 10px; background-color: green; color: white; border: none; border-radius: 5px; margin-top: 5px;">Bekreft slett</button>
    <button id="cancel-delete-${dog.name}" onclick="cancelDeleteDog('${dog.name}')" style="display: none; padding: 5px 10px; background-color: gray; color: white; border: none; border-radius: 5px; margin-top: 5px;">Avbryt</button>

  </div>

    `;
  }
  return html;
  }
  // Lag input for hver input, med onchange
  function showAddDogForm(id) {
    const formHtml = /*html*/ `
    <div id="addDogForm" style="position: fixed; top: 20%; left: 30%; background: white; padding: 20px; border-radius: 10px;">
    <h2>Legg til en ny hund</h2>
    
    <input type="text" onchange="saveDogName(this.value)" placeholder="Hundens navn" style="padding: 5px; margin-bottom: 10px;">
    <input type="text" onchange="saveDogImage(this.value)" placeholder="Bilde-URL" style="padding: 5px; margin-bottom: 10px;">
    <button onclick="addDog(${id})" style="padding: 5px 10px;">Legg til</button>
    </div>
    `;
   return formHtml;
}