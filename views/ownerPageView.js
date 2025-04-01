function ownerPageView() {
  app.innerHTML = /*html*/ `
    <div style="position: relative; text-align: center; font-family: Helvetica, sans-serif; padding: 20px;">

      <!-- KNAPPER OG SØKEFELT PÅ EGEN LINJE -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; padding: 0 20px;">
        
        <!-- KNAPPENE -->
        <div style="display: flex; gap: 15px; margin-top: -120px; margin-left: -40px;"> <!-- Økt gap mellom knappene -->
          <button onclick= "mainView()" style="padding: 1px 3px; font-size: 12px;">Tilbake til Main View</button>
          <button onclick="topListsView()" style="ppadding: 1px 3px; font-size: 12px;">Flere Topplister</button>
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


  <div style="display: flex; justify-content: space-around; flex-wrap: wrap; margin-top: 30px;">
    <div style="text-align: center; margin-bottom: 20px;">
      <button onclick="dogLuna()" style="margin-bottom: 10px; padding: 10px;">Luna</button> <br>
    <img src="dogpictures/dog4.avif" style="width: 200px; border-radius: 10px;">
    </div>


    <div style="text-align: center; margin-bottom: 20px;">
      <button onclick="dogAiko()" style="margin-bottom: 10px; padding: 10px;">Aiko</button>
      <img src="dogpictures/dog3.avif" style="width: 200px; border-radius: 10px;">
        </div>
      </div>
    </div>  
  `  
}