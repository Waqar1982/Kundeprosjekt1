function ratingStarsView() {
    console.log("kjører ratingStarsView")
app.innerHTML = /*HTML*/`

<button onclick= "mainView()">Tilbake til Main View</button>


<div class="rating">
${printStars(model.data.dogs[0].id)}

</div>


`
}

function printStars (id) {
let ratingNumber = model.data.dogs.find((element)=>element.id==id).rating
let maxStars = 5
let html = ''

for (let i =0; i<maxStars; i++){
    console.log (id)
if(i<ratingNumber){
    console.log (i<ratingNumber)
    html+= /*HTML*/`
    <span onclick="changeStarRating(${id},${i})" class="star gold" data-value="1">&#9733</span>

    `
} else {
    console.log('kjøre')
    html+= /*HTML*/`
    <span onclick="changeStarRating(${id},${i})" class="star" data-value="1">&#9733</span>

     `
}
}
return html
}
function changeStarRating (chosenId,starIndex,){
 console.log(chosenId,starIndex)

 for(let i=0;i<model.data.dogs.length; i++){
        if(model.data.dogs[i].id===chosenId&&starIndex==0){
     model.data.dogs[i].rating=0}
        else if(model.data.dogs[i].id===chosenId&&starIndex!=0){
     model.data.dogs[i].rating=starIndex +1
     
  }
   
 

   console.log( model.data.dogs[i] )


}
//printStars(chosenId) 
ratingStarsView()
 }


