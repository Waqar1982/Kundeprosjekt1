function dashboardViewFunction() {
    dogToday = model.data.dogs[0]
    let html=""
    let logInMenu = model.app.currentUserId == null ? logInView() : ""
    html += /*HTML*/ `

    ${logInMenu}
    
    <div id="todaysDog">
    <h2 style="margin: 0; text-align: center;">Dagens Hund:</h2>
    <img src="${dogToday.picture}" alt="Dagens Hund" onclick="changeCurrentDog(dogToday.id)">
    <div>${dogToday.name}</div> <br>
    ${printStars(dogToday.id)}
    </div>

    <div type="text" id="newsBox" placeholder="Nyheter!" 
    style="height:350px; border: 3px solid black; padding: 30px;">
    ${printNews()}</div>

    <div id="top5Dogs">
    <h2>Topp 5 hunder</h2>
    <div>${printDogs()}</div>
    </div>
    `
return html
   
}
function printDogs (){
   let dogs = model.data.dogs
   let html=""

    for (i=0; i<5; i++) {
        dogi = dogs[i]
        top1 = 50 + 185*i
        top2 = 220 + 185*i
        html += `
        <div>
        <img src="${dogi.picture}" onclick="changeCurrentDog(${dogi.id})" alt="Hundebilde" 
        style="position: absolute; top: ${top1}px; left: 0px; height: 150px;">
        <div class="stars" style="position: absolute; top: ${top2}px; left: 23px; color: gold;">
        ${printStars(dogi.id)}
        </div>
        </div>
        `
    }
    return html
}

function printNews (){
    let feed = model.data.news
    let html="<h2>Nyheter</h2>"

    for (i=0; i<feed.length; i++) {
        html += `
        <div>
        ${feed[i]}
        </div>
        <br>
        `
    }
    return html
}