function ratingStarsView() {
    console.log("kjører ratingStarsView")
app.innerHTML = /*HTML*/`

<button onclick= "mainView()">Tilbake til Main View</button>



${printStars(model.data.dogs[0].id)}
${printStarsDisplay(model.data.dogs[0].id)}
${printStarsDisplay(model.data.dogs[1].id)}




`
}

function printStars (id) {
let ratingNumber = model.data.dogs.find((element)=>element.id==id).rating
let maxStars = 5
let html = ''

for (let i =0; i<maxStars; i++){
    console.log (ratingNumber)
if(i<ratingNumber){
    console.log (i<ratingNumber)
    html+= /*HTML*/`
    <span onclick="changeStarRating(${id},${i+1})" class="star gold" data-value="1">&#9733</span>

    `
} else {
    console.log('kjøre')
    html+= /*HTML*/`
    <span onclick="changeStarRating(${id},${i+1})" class="star" data-value="1">&#9733</span>

     `
}
}
return `<div class="rating">${html}</div>`
}
function changeStarRating (chosenId,starIndex,){
 console.log(chosenId,starIndex)

 for(let i=0;i<model.data.dogs.length; i++){
        if(model.data.dogs[i].id===chosenId&&starIndex==0){
     model.data.dogs[i].rating=0}
        else if(model.data.dogs[i].id===chosenId&&starIndex!=0){
            if (model.data.dogs[i].rating==starIndex){
                model.data.dogs[i].rating=starIndex -1
            }else{
                model.data.dogs[i].rating=starIndex 
            }
    
 
  
        
  }
   
 

   console.log( model.data.dogs[i] )


}
//printStars(chosenId) 
ratingStarsView()
 }


 function printStarsDisplay (id) {
    let ratingNumber = model.data.dogs.find((element)=>element.id==id).rating
    let maxStars = 5
    let html = ''
    
    for (let i =0; i<maxStars; i++){
        console.log (ratingNumber)
    if(i<ratingNumber){
        console.log (i<ratingNumber)
        html+= /*HTML*/`
        <span  class="star gold" data-value="1">&#9733</span>
    
        `
    } else {
        console.log('kjøre')
        html+= /*HTML*/`
        <span  class="star" data-value="1">&#9733</span>
    
         `
    }
    }
    return `<div class="rating">${html}</div>`
    }