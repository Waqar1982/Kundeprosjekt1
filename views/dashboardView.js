function dashboardViewFunction() {
    let html=""
    let logInMenu = model.app.currentUserId == null ? logInView() : ""
    html += /*HTML*/ `

  
    
    ${logInMenu}
    <h1>Dashboard</h1>
    <div id="todaysDog">
    <h2 style="margin: 0; text-align: center;">Dagens Hund:</h2>
    <img src="dogpictures/dog1.avif" alt="Dagens Hund" onclick="changeCurrentDog(1)">
    ${printStars(model.data.dogs[0].id)}
    </div>

    <input type="text" id="newsBox" placeholder="Nyheter!" style="height:350px;  border-radius: 5px; ">
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
        dog = dogs[i]
        top1 = 120 + 180*i
        top2 = 305 + 180*i
        html += `
        <div>
        <img src="${dog.picture}" onclick="changeCurrentDog(${dog.id})" alt="Hundebilde" style="position: absolute; top: ${top1}px; left: 10px; height: 150px;">
        <div class="stars" style="position: absolute; top: ${top2}px; left: 60px; color: gold;">
        ${printStars(dog.id)}
        </div>
        </div>
        `
    }
    return html
}