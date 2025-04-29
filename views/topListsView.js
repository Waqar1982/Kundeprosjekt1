function topListsView() {
    let html =""
    html += /*html*/ `

    <h1>Topp 10 Hunder</h1>
    <div id='all' class="topList">${fillTopList('all', 10)}</div>
    
    <h1>Topp 5 Små Hunder</h1>
    <div id='small' class="topList">${fillTopList('small', 5)}</div>
    
    <h1>Topp 5 Store Hunder</h1>
    <div id='big' class="topList">${fillTopList('big', 5)}</div>

    <h1>Topp 5 Adopterte Hunder</h1>
    <div id='adopted' class="topList">${fillTopList('adopted', 5)}</div>

    `  
    return html
}

    //<h1>Topp 5 Adopterte Hunder</h1>
    //<div id='adopted' class="topList">${fillTopList('adopted', 5)}</div>
    
    //<h1>Topp 5 Shiba Inu</h1>
    //<div id='shiba' class="topList">${fillTopList('shiba', 5)}</div>

function fillTopList(type, number) {
let html = ""
    for(i=0; i<number; i++) {
        let dogID = model.data.topLists[type][i]
        console.log(dogID)
        if(model.data.dogs.find(element => element.id == dogID)) {
            const dog = model.data.dogs.find(element => element.id == dogID)
            html += `
            <div class="dogInList">
            ${dog.name} <br>
            <img src=${dog.picture} onclick="changeCurrentDog(${dogID})"> <br>
            ${printStarsDisplay(dogID)} <br> <br>
            </div>
            ` 
        } else if(model.data.topLists[type].length>number){
            model.data.topLists[type].splice(i,1)
            i--
        }
    }
    return html
}