function dogRatingView() {
    app.innerHTML = /*html*/ `

    <button onclick="topLists()">Flere Topplister</button>
    <input type="text" id="search" placeholder="Søk">
    <button onclick="ratingSite()">Ratingside</button>
    <button onclick="myProfile()">Min Profil</button>
    <h1>Ratingside<h1>
    <h2>Hundenavn<h2>
    <h3>Tilbake til forrige<h3>
    <h3>Gå til neste<h3>
    <h2>Hunderase<h2>
    `
}

function ratingStarsView() {
    console.log("kjører ratingStarsView")
app.innerHTML = /*HTML*/`


<div class="rating">
${printStars(5)}

</div>


`
}

function printStars (ratingNumber) {
let maxStars = 5
let html = ''

for (let i =0; i<maxStars; i++){
if(i<ratingNumber){
    html+= /*HTML*/`
    <span class="star" data-value="1">&#9733</span>
    <span class="star" data-value="2">&#9733</span>
    <span class="star" data-value="3">&#9733</span>
    <span class="star" data-value="4">&#9733</span>
    <span class="star" data-value="5">&#9733</span>
    
    `
} else {
    html+= /*HTML*/`
    <span class="star" data-value="1">&#9733</span>
    <span class="star" data-value="2">&#9733</span>
    <span class="star" data-value="3">&#9733</span>
    <span class="star" data-value="4">&#9733</span>
    <span class="star" data-value="5">&#9733</span>
    
    `
}
return html
}



}