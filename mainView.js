

updateview ()
function header(){
return/*HTML*/`
    <button onclick= "ratingStarsView()">RatingStarsView</button>
    <button onclick= "dashboardViewFunction()">DashboardView</button> 
    <button onclick= "dogPageView()">DogPageView</button>
    <button onclick= "changePage('RatingPage')">DogRatingView</button>
    <button onclick= "ownerPageView()">OwnerPagerView</button>
    <button onclick= "changePage('startPage')">StartPageView</button>
    <button onclick= "topListsView()">TopListsView</button>
    <button onclick= "userProfileView()">UserProfileView</button>
    <button onclick= "searchView()">searchView</button>
    <button onclick= "createAccountView()">CreateAccountView</button>
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
  return dogRatingView()
}

}
function changePage (newPage){
model.app.currentPage=newPage;
updateview()
}





