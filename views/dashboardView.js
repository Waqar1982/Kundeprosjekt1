function dashboardViewFunction() {
    app.innerHTML = /*HTML*/ `

    <img src="dogpictures/dog1.avif" alt="Hundebilde" style="position: absolute; top: 120px; left: 10px; height: 150px;">
    <div class="stars" style="position: absolute; top: 305px; left: 60px; color: gold;">
    ${printStars(model.data.dogs[0].id)}
    </div>

    <img src="dogpictures/dog2.avif" alt="Hundebilde" style="position: absolute; top: 300px; left: 10px; height: 150px;">
    <div class="stars" style="position: absolute; top: 485px; left: 60px; color: gold;">
    ${printStars(model.data.dogs[0].id)}
    </div>

    <img src="dogpictures/dog3.avif" alt="Hundebilde" style="position: absolute; top: 480px; left: 10px; height: 150px;">
    <div class="stars" style="position: absolute; top: 665px; left: 60px; color: gold;">
    ${printStars(model.data.dogs[0].id)}
    </div>

    <img src="dogpictures/dog4.avif" alt="Hundebilde" style="position: absolute; top: 660px; left: 10px; height: 150px;">
    <div class="stars" style="position: absolute; top: 845px; left: 60px; color: gold;">
    ${printStars(model.data.dogs[0].id)}
    </div>

    <img src="dogpictures/dog5.avif" alt="Hundebilde" style="position: absolute; top: 840px; left: 10px; height: 150px;">
    <div class="stars" style="position: absolute; top: 1025px; left: 60px; color: gold;">
    ${printStars(model.data.dogs[0].id)}
    </div>

    <div id="topLeft">
    <button onclick="topLists()">Flere Topplister</button>
    <input type="text" id="search" placeholder="Søk">
    <button onclick="ratingSite()">Ratingside</button>
    <button onclick= "mainView()">Tilbake til Main View</button>
    <button id="profileButton" onclick="profileButton()">Profil</button>
    </div>

    

    <h1>Dashboard</h1>
    <div id="todaysDog">
    <h2 style="margin: 0; text-align: center;">Dagens Hund:</h2>
    <img src="dogpictures/dog1.avif" alt="Dagens Hund">
    ${printStars(model.data.dogs[0].id)}
    </div>

    <input type="text" id="newsBox" placeholder="Nyheter!">
    <div id="top5Dogs">
    <h2>Topp 5 hunder</h2>
    </div>
    `
}