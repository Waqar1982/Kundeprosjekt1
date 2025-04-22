updateview()
function header(){
  let profileButtonHTML = model.app.currentUserId == null ? "" : profileButton()
  return/*HTML*/`
   
  <button onclick= "changePage('dashboard')">Dashboard</button> 
  <button onclick= "changePage('dogPage')">Dog Page</button>
  <button onclick= "changePage('ratingPage')">Dog Rating</button>
  <button onclick= "changePage('ownerPage')">Owner Pager</button>
  <button onclick= "changePage('topLists')">Top Lists</button>
  <button onclick= "changePage('createPage')">Create Account</button>
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
    model.inputs.ratingDogID=newDogID;
  }
  changePage('ratingPage')
}

function profileButton() {
  return /*HTML*/`
  <button id="profileButton" onclick="changePage('profil')">Profil</button>
  `
}


