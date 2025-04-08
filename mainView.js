

updateview ()
function header(){
return/*HTML*/`

   
    <button onclick= "changePage('dashboard')">DashboardView</button> 
    <button onclick= "changePage('dogPage')">dogPageView</button>
    <button onclick= "changePage('RatingPage')">DogRatingView</button>
    <button onclick= "changePage('ownerPage')">OwnerPagerView</button>
    <button onclick= "changePage('startPage')">StartPageView</button>
    <button onclick= "changePage('topLists')">TopListsView</button>
    <button onclick= "userProfileView()">UserProfileView</button>
    <button onclick= "createAccountView()">CreateAccountView</button>
    ${searchView()}
  `
  
}
function updateview (){
const content=chosenview()


app.innerHTML=/*HTML*/`
<header>${header()}</header>
<main>${content}</main>
`

}
function chosenview (){
  console.log (model.app.currentPage)
if(model.app.currentPage==model.app.page[0]){
return startPageView()

}else if(model.app.currentPage==model.app.page[1]){
  return dashboardViewFunction()
}else if(model.app.currentPage==model.app.page[2]){
  return dogRating()
}else if (model.app.currentPage==model.app.page[3]){
  return dashboardViewFunction()
}else if (model.app.currentPage==model.app.page[5]){
  return dogPageView()
}else if (model.app.currentPage==model.app.page[4]){
  return ownerPageView()
}else if (model.app.currentPage==model.app.page[6]){
  return topListsView()
}

}
function changePage (newPage){
model.app.currentPage=newPage;
updateview()
}
function changeCurrentDog (newDogID){
   model.inputs.currentDogID=newDogID;
   changePage('dogPage')
    

}




