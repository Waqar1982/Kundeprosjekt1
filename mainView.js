updateview()
function header(){
  let profileButtonHTML = model.app.currentUserId == null ? "" : profileButton()
  return/*HTML*/`
  <div id= "topLeft"> 
  <button class="nav" onclick= "changePage('dashboard')">Forside</button> 
  <button class="nav" onclick= "changePage('ratingPage')">Rating</button>
  <button class="nav" onclick= "changePage('topLists')">Topp Lister</button>
  <button class="nav" onclick= "changePage('createPage')">Opprett Bruker</button>
  <button class="nav" id="darkModeButton" onclick="toggleDarkMode()">Dark Mode</button>
  <button class="nav" onclick= "changePage('ownerPage')">Min Profil</button>
  <button class="nav loggAv"onclick= "changePage('')">Logg Av</button>


  </div>
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

function toggleDarkMode() {

  document.body.classList.toggle('dark-mode');
  
  }


