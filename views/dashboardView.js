function dashboardViewFunction() {
    app.innerHTML = /*HTML*/ `

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

    dogs = model.data.dogs
    for (i=0; i<5; i++) {
        dog = dogs[i]
        top1 = 120 + 180*i
        top2 = 305 + 180*i
        app.innerHTML += `
        <img src="${dog.picture}" onclick="dogPageView(${i+1})" alt="Hundebilde" style="position: absolute; top: ${top1}px; left: 10px; height: 150px;">
        <div class="stars" style="position: absolute; top: ${top2}px; left: 60px; color: gold;">
        ${printStars(dog.id)}
        </div>
        `
    }
}