function startPageView() {
    let html=""
    html+= /*html*/ `
 

    <h1>StartPage</h1>
    <div id="todaysDog">
    <h2 style="margin: 0; text-align: center;">Dagens Hund:</h2>
    <img src="dogpictures/dog1.avif" alt="Dagens Hund">
    <div class="stars" style="color: gold; text-align: center; margin-top: 10px;">
    ${printStars(model.data.dogs[0].id)}
        </div>
    </div>
    <input type="text" id="newsBox" placeholder="Ukes hunderase:"; style="height:350px;  border-radius: 5px; ">
    <div id="top5Dogs">
    <h2>Topp 5 hunder</h2>
    </div>
    `

    dogs = model.data.dogs
    for (i=0; i<5; i++) {
        dog = dogs[i]
        top1 = 120 + 180*i
        top2 = 305 + 180*i
        html += `
        <img src="${dog.picture}" onclick="dogPageView(${i+1})" alt="Hundebilde" style="position: absolute; top: ${top1}px; left: 10px; height: 150px;">
        <div class="stars" style="position: absolute; top: ${top2}px; left: 60px; color: gold;">
        ${printStars(dog.id)}
        </div>
        `
    }
    return html
}

function logInView() {
    let html=""
    html+= /*html*/ `
    <div id="loginBox">
    <input type="text" id="username" placeholder="Brukernavn" onchange="saveUsernameInput(this.value)">
    <input type="text" id="password" placeholder="Passord" onchange="savePasswordInput(this.value)">
    <button onclick="logIn()">Logg Inn</button>
    <button onclick="createAccount()">Lag en konto</button>
    </div>
    `
    return html
}