function dogPageView() {
    app.innerHTML = /*HTML*/ `
    <button onclick= "mainView()">Tilbake til Main View</button> <br> <br>
    <button onclick="myProfile()">Min profil</button>
    <img src="dogpictures/dog13.avif" alt="Aikos profil bilde" style="width: 100px; height: 100px;">
    <input id="breed" type="text" placeholder="Rase">
    <input id="breed" type="text" placeholder="Alder">    
    <input id="breed" type="text" placeholder="Størrelse/Vekt">    
    <input id="breed" type="text" placeholder="Favorittmat">  
    <img src="" alt="Flere bilder"> 
    <h1>Rating stars</h1>
    <input id="breed" type="text" placeholder="Her kan du skrive hva du vil">
    `
}