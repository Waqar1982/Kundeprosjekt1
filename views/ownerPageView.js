function ownerPageView() {
  loadBio(); // Laste inn bio fra loclStorage
  loadDogs(); // Laste inn eksisterende hunder fra localStorage

  app.innerHTML = /*html*/ `
    <div style="position: relative; text-align: center; font-family: Helvetica, sans-serif; padding: 20px;">

      <!-- KNAPPER OG SØKEFELT PÅ EGEN LINJE -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; padding: 0 20px;">
        
        <!-- KNAPPENE -->
        <div style="display: flex; gap: 15px; margin-top: -120px; margin-left: -40px;"> <!-- Økt gap mellom knappene -->
          <button onclick= "mainView()" style="padding: 1px 3px; font-size: 12px;">Tilbake til Main View</button>
          <button onclick="topListsView()" style="padding: 1px 3px; font-size: 12px;">Flere Topplister</button>
          <button onclick="ratingSite()" style="padding: 1px 3px; font-size: 12px;">Ratingside</button>
      </div>

      

        <!-- SØKEFELTET -->
        <input type="text" id="search" placeholder="Søk" style="padding: 5px; width: 250px; margin-top: -110px; margin-right: -40px;">
       </div>

        <!-- PROFIL -->
        <div style="display: flex; justify-content: flex-end; padding-right: 20px; margin-bottom: 20px;">
        <button onclick="myProfile()" 
            style="padding: 10px; font-size: 12px;">
            Min profil
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
              <button id="delete-${dog.name}" onclick="askDeleteDog('${dog.name}')" style="padding: 5px 10px; margin-top: 5px; background-color: red; color: white; border: none; border-radius: 5px;">Slett</button>
             <button id="confirm-delete-${dog.name}" onclick="deleteDog('${dog.name}')" style="display: none; padding: 5px 10px; background-color: green; color: white; border: none; border-radius: 5px; margin-top: 5px;">Bekreft slett</button>
             <button id="cancel-delete-${dog.name}" onclick="cancelDeleteDog('${dog.name}')" style="display: none; padding: 5px 10px; background-color: gray; color: white; border: none; border-radius: 5px; margin-top: 5px;">Avbryt</button>
 
              </div>
              `).join('')}
              </div>

            <!-- Hardkodede hunder Luna og Aiko -->
            <div style="display: flex; justify-content: space-around; flex-wrap: wrap; margin-top: 30px;">
            
            <div id="dog-Luna" style="text-align: center; margin-bottom: 20px;">
              <button onclick="dogPageView(4)" style="padding: 5px 10px; margin-bottom: 5px; background-color: lightblue; border: 1px solid black; border-radius: 5px;">
              Aiko
          </button>
              <br>
              <img src="dogpictures/dog4.avif" style="width: 200px; border-radius: 10px;">
            </div>

        <div id="dog-Aiko" style="text-align: center; margin-bottom: 20px;">
        <br>
        <button onclick="dogPageView(3)" style="padding: 5px 10px; margin-bottom: 5px;">Luna</button>
        <br>
        <img src="dogpictures/dog3.avif" style="width: 200px; border-radius: 10px;">
        </div>

        </div>
    </div>  
  `;

  dogs.forEach(dog => {
    const confirmBtn = document.getElementById(`confirm-delete-${dog.name}`);
    const cancelBtn = document.getElementById(`cancel-delete-${dog.name}`);
    const dogDiv = document.getElementById(`dog-${dog.name}`);
    
    if (confirmBtn) confirmBtn.style.display = 'none'; // Skjuler bekreft-slett-knappen
    if (cancelBtn) cancelBtn.style.display = 'none';  // Skjuler avbryt-slett-knappen
    if (dogDiv) dogDiv.style.border = 'none'; // Fjern eventuell rød kant
  });
}
function loadBio() {
  const savedBio = localStorage.getItem('bio');
  if (savedBio) {
    document.getElementById('bioOwner').value = savedBio;
  }
}



