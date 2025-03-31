function ratingStarsView() {
    console.log("kjører ratingStarsView")
app.innerHTML = /*HTML*/`


<div class="rating">
${printStars(2,model.data.dogs[0].id)}

</div>


`
}

function printStars (ratingNumber,id) {
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