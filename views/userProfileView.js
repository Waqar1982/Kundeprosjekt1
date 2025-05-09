function logOut() {
    // Fjern brukerdata fra localStorage (eller annen lagring)
    localStorage.removeItem('currentUser');
    // Naviger til startPageView-siden
    startPageView();
}

function userProfileView() {
    loadBio(); // Laste inn bio fra loclStorage
    loadDogs(); // Laste inn eksisterende hunder fra localStorage
  
    app.innerHTML = /*html*/ `
      <div style="position: relative; text-align: center; font-family: Helvetica, sans-serif; padding: 20px;">
  
        <!-- KNAPPER OG SØKEFELT PÅ EGEN LINJE -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; padding: 0 20px;">
          
          <!-- KNAPPENE -->
          <div style="display: flex; gap: 15px; margin-top: -120px; margin-left: -40px;"> <!-- Økt gap mellom knappene -->
            <button onclick="topListsView()" style="padding: 1px 3px; font-size: 12px;">Flere Topplister</button>
            <button onclick="ratingSite()" style="padding: 1px 3px; font-size: 12px;">Ratingside</button>
            <button onclick="dashboardViewFunction()" style="padding: 1px 3px; font-size: 12px;">Hjemmeside</button>
        </div>
  
          <!-- SØKEFELTET -->
          <input type="text" id="search" placeholder="Søk" style="padding: 5px; width: 250px; margin-top: -110px; margin-right: -40px;">
         </div>
  
          <!-- PROFIL -->
          <div style="display: flex; justify-content: flex-end; padding-right: 20px; margin-bottom: 20px;">
          <button onclick="logOut()" 
              style="padding: 10px; font-size: 12px;">
              Logg ut
              </button>
              </div>
   
  
      <!-- HOVEDINNHOLD -->
      <div>
        <h1>Min Hundeside</h1>
        <textarea id="bioOwner" placeholder="Skriv litt om deg selv" rows="3" style="width: 80%; padding: 10px;"></textarea>
      </div>
  
            <!-- Legg til ny hund -->
            <button onclick="showAddDogForm()" style="padding: 10px; margin-top: 10px;">Legg til en ny hund</button>
            
                  <!-- Skjema for å legge til ny hund (skjult som standard) -->
                  <div id="addDogForm" style="display: none; background: white; padding 20px; border-radius: 10px; margin-top: 20px;">
                  <h2>Legg til en ny hund</h2>
                  <input type="text" id="newDogName" placeholder="Hundens navn" style="padding: 5px; margin-bottom: 10px; ${invalidName ? 'border: 2px solid red;' : ''}"> <!-- Feilmelding ved tomt felt for navn -->
                  <input type="text" id="newDogImage" placeholder="Bilde-URL" style="padding: 5px; margin-bottom: 10px; ${invalidImage ? 'border: 2px solid red;' : ''}"> <!-- Feilmelding ved tomt bilde-URL-felt -->
                  <button onclick="addDog()" style="padding: 5px 10px;">Legg til</button>
                  <button onclick="closeAddDogForm()" style="padding: 5px 10px; margin-left: 10px;">Avbryt</button>
                </div>
  
            <!-- Viser lagrede hunder -->
            <div style="display: flex; justify-content: space-around; flex-wrap: wrap; margin-top: 30px;">
              ${dogs.map(dog => `
                <div id="dog-${dog.name}" style="text-align: center; margin-bottom: 20px;">
                <button onclick="viewDog('${dog.name}')" style="padding: 5px 10px; margin-bottom: 5px;">${dog.name}</button>
                <br>
                <img src="${dog.imageURL}" style="width: 200px; border-radius: 10px;">
                <br>
                <button onclick="deleteDog('${dog.name}')" style="padding: 5px 10px; margin-top: 5px; background-color: red; color: white; border: none; border-radius: 5px;">Slett</button>
                <div>
                `).join('')}
                </div>
  
              <!-- Hardkodede hunder Luna og Aiko -->
              <div style="display: flex; justify-content: space-around; flex-wrap: wrap; margin-top: 30px;">
              
              <div id="dog-Luna" style="text-align: center; margin-bottom: 20px;">
                <button onclick="dogPageView(1)" style="padding: 5px 10px; margin-bottom: 5px; background-color: lightblue; border: 1px solid black; border-radius: 5px;">testnavn1</button>
                <br>
                <img src="dogpictures/dog1.avif" style="width: 200px; border-radius: 10px;">
                ${printStars(model.data.dogs[0].id)}
              </div>
  
          <div id="dog-Aiko" style="text-align: center; margin-bottom: 20px;">
          <br>
          <button onclick="dogPageView(2)" style="padding: 5px 10px; margin-bottom: 5px;">testnavn2</button>
          <br>
          <img src="dogpictures/dog2.avif" style="width: 200px; border-radius: 10px;">
          ${printStars(model.data.dogs[0].id)}
          </div>
  
          </div>
      </div>  
    `;
  }
