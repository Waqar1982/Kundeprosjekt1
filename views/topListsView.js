function topListsView() {
    app.innerHTML = /*html*/ `
    <h1>Topp 10 Hunder</h1>
    <div id='all' class="topList"></div>
    
    <h1>Topp 10 Små Hunder</h1>
    <div id='small' class="topList"></div>
    
    <h1>Topp 10 Store Hunder</h1>
    <div id='big' class="topList"></div>
    
    <h1>Topp 10 Adopterte Hunder</h1>
    <div id='adopted' class="topList"></div>
    
    <h1>Topp 10 Shiba Inu</h1>
    <div id='shiba' class="topList"></div>
    
    `
}

function fillTopList(type) {
    list = document.getElementById(type)
    for(i=1; i<11; i++) {
        list.innerHTML += `
        <div class="dogInList">
            <img src="dogs/dog${i}.avif">
        </div>
        ` //Testbilder.
        // Bilder skal komme fra topplister i modellen som kan endres med kode
        // Bilder og/eller navn lenker til hundenes profil.
    }
}
//fillTopList('all') Bilder er ikke i felles-mappen ennå.