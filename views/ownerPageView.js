function ownerPageView() {
  app.innerHTML = /*html*/ `
  <button onclick= "mainView()">Tilbake til Main View</button> <br> <br>
  <button onclick="myProfile()"></button>
  <button onclick="topListsView()">Flere Topplister</button>
  <input type="text" id="search" placeholder="Søk">
  <button onclick="ratingSite()">Ratingside</button>
  <input id="bioOwner" type="text" placeholder="Skriv litt om deg selv">
  <button onclick="dogLuna()"></button>
  <button onclick="dogAiko()"></button>
  `  
}