updateview()
function header(){
  let profileButtonHTML = model.app.currentUserId == null ? "" : profileButton()
  return/*HTML*/`
   
  <button onclick= "changePage('dashboard')">DashboardView</button> 
  <button onclick= "changePage('dogPage')">dogPageView</button>
  <button onclick= "changePage('ratingPage')">DogRatingView</button>
  <button onclick= "changePage('ownerPage')">OwnerPagerView</button>
  <button onclick= "changePage('topLists')">TopListsView</button>
  <button onclick= "changePage('createPage')">CreateAccountView</button>
  ${profileButtonHTML}
  ${searchView()}
  `
  
}
function updateview(){
  const content=chosenview()

  app.innerHTML=/*HTML*/`
  <header>${header()}</header>
  <main>${content}</main>
  `
}

function chosenview(){
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
  }else if (model.app.currentPage==model.app.page[7]){
    return createAccountView()
  }
}
function changePage(newPage){
  model.app.currentPage=newPage;
  updateview()
}

function changeCurrentDog(newDogID){
  model.inputs.currentDogID=newDogID;
  changePage('dogPage')
}

function changeRatingDog(newDogID){
  if(newDogID < model.data.dogs.length+1 && newDogID > 0) {
    model.inputs.currentDogID=newDogID;
  }
  changePage('ratingPage')
}

function profileButton() {
  return /*HTML*/`
  <button id="profileButton" onclick="changePage('profil')">Profil</button>
  `
}


