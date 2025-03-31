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
}

function fillTopList(type) {
    if(type =='all') {  //for testing
        list = document.getElementById(type)
        for(i=1; i<11; i++) {
            list.innerHTML += `
            <div class="dogInList">
                <img src="dogpictures/dog${i}.avif">
            </div>
            ` //Testbilder.
            // Bilder skal komme fra topplister i modellen som kan endres med kode
            // Bilder og/eller navn lenker til hundenes profil.
        }
        return
    }
    list = document.getElementById(type)
    for(i=1; i<6; i++) {
        dogID = model.data.topLists[type][i-1]
        pic = model.data.dogs[dogID-1].picture
        list.innerHTML += `
        <div class="dogInList">
            <img src=${pic}>
        </div>
        `
    }
}