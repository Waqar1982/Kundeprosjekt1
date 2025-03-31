function ratingStarsView() {
    console.log("kjører ratingStarsView")
app.innerHTML = /*HTML*/`

<button onclick= "mainView()">Tilbake til Main View</button>


<div class="rating">
${printStars(model.data.dogs[10].id)}

</div>


`
}

function printStars (id) {
let ratingNumber = model.data.dogs.find((element)=>element.id==id).rating
let maxStars = 5
let html = ''

for (let i =0; i<maxStars; i++){
if(i<ratingNumber){
    console.log (i<ratingNumber)
    html+= /*HTML*/`
    <span onclick="changeStarRating(id)" class="star gold" data-value="1">&#9733</span>

    `
} else {
    console.log('kjøre')
    html+= /*HTML*/`
    <span onclick="changeStarRating(id)" class="star" data-value="1">&#9733</span>

     `
}
}
return html
}
function changeStarRating (chosenId){
    
    
}
