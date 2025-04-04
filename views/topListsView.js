function topListsView() {
    app.innerHTML = /*html*/ `
    <button onclick= "mainView()">Tilbake til Main View</button>

    <h1>Topp 10 Hunder</h1>
    <div id='all' class="topList"></div>
    
    <h1>Topp 5 Små Hunder</h1>
    <div id='small' class="topList"></div>
    
    <h1>Topp 5 Store Hunder</h1>
    <div id='big' class="topList"></div>
    
    <h1>Topp 5 Adopterte Hunder</h1>
    <div id='adopted' class="topList"></div>
    
    <h1>Topp 5 Shiba Inu</h1>
    <div id='shiba' class="topList"></div>
    
    `
    fillTopList('all')
    fillTopList('small')
    fillTopList('big')
}

function fillTopList(type) {
    list = document.getElementById(type)
    if(type =='all') {  //for testing
        for(i=0; i<10; i++) {
            dogID = model.data.topLists[type][i]
            pic = model.data.dogs[dogID-1].picture
            dogName = model.data.dogs[dogID-1].name
            list.innerHTML += `
            <div class="dogInList">
                ${dogName} <br>
                <img src=${pic} onclick="dogPageView(${dogID})"> <br>
                ${printStars(dogID)} <br> <br>
            </div>

            ` //Testbilder.
            // Bilder skal komme fra topplister i modellen som kan endres med kode
            // Bilder og/eller navn lenker til hundenes profil.
        }
        return
    }
    for(i=0; i<5; i++) {
        dogID = model.data.topLists[type][i]
        pic = model.data.dogs[dogID-1].picture
        dogName = model.data.dogs[dogID-1].name
        list.innerHTML += `
        <div class="dogInList">
            ${dogName} <br>
            <img src=${pic} onclick="dogPageView(${dogID})"> <br>
            
             ${printStars(dogID)}
        </div>
        
        `
    }
}