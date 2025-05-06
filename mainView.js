updateview();

function header() {
  const isLoggedIn = model.app.currentUserId != null;
  const adminLoggedIn = model.app.currentUserId === 1
  let profileButtonHTML = isLoggedIn ? profileButton() : "";
  let loginBoxHTML = isLoggedIn ? "" : logInBox();

  return /*HTML*/ `
  <div id="topLeft"> 
    <button class="nav" onclick="changePage('dashboard')">Forside</button> 
    <button class="nav" onclick="changePage('ratingPage')">Rating</button>
    <button class="nav" onclick="changePage('topLists')">Topp Lister</button>
    ${!adminLoggedIn ? `<button class="nav" onclick="changePage('createPage')">Opprett Bruker</button>` : ""}
    <button class="nav" id="darkModeButton" onclick="toggleDarkMode()">Dark Mode</button>
    ${isLoggedIn ? `<button class="nav" onclick="changeCurrentOwner()">Min Profil</button>` : ""}
    ${isLoggedIn ? `<button class="nav loggAv" onclick="logout()">Logg Av</button>` : ""}
  </div>
  ${loginBoxHTML}
  `;
}

function updateview() {
  const content = chosenview();

  app.innerHTML = /*HTML*/ `
  <header>${header()}</header>
  <main>${content}</main>
  `;
}

function chosenview() {
  console.log(model.app.currentPage);

  if (model.app.currentPage == model.app.page[0]) {
    return startPageView();
  } else if (model.app.currentPage == model.app.page[1]) {
    return dashboardViewFunction();
  } else if (model.app.currentPage == model.app.page[2]) {
    return dogRating();
  } else if (model.app.currentPage == model.app.page[3]) {
    return dashboardViewFunction();
  } else if (model.app.currentPage == model.app.page[5]) {
    return dogPageView();
  } else if (model.app.currentPage == model.app.page[4]) {
    return ownerPageView();
  } else if (model.app.currentPage == model.app.page[6]) {
    return topListsView();
  } else if (model.app.currentPage == model.app.page[7]) {
    return createAccountView();
  }
}

function changePage(newPage) {
  model.app.currentPage = newPage;
  updateview();
}

function changeCurrentOwner() {
  model.inputs.ownerID = model.app.currentUserId
  changePage('ownerPage')
}

function changeCurrentDog(newDogID) {
  model.inputs.currentDogID = newDogID;
  changePage("dogPage");
}

function changeRatingDog(dogID, direction) {
  if(direction == 'down') {
    dogID--
    if(model.data.dogs.find(element=>element.id==dogID)) {
      model.inputs.ratingDogID = dogID;
      changePage("ratingPage");
    } else if (dogID>0) {
      changeRatingDog(dogID, 'down')
    } else {
      return
    }
  }
  if(direction == 'up') {
    dogID++
    if(model.data.dogs.find(element=>element.id==dogID)) {
      model.inputs.ratingDogID = dogID;
      changePage("ratingPage");
    } else if(dogID < model.data.dogs.length + 1) {
      changeRatingDog(dogID, 'up')
    } else {
      return
    }
  }
}

function profileButton() {
  return /*HTML*/ `
  <button id="profileButton" onclick="changePage('profil')">Profil</button>
  `;
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function logout() {
  model.app.currentUserId = null
  changePage("dashboard")
}

function logInBox() {
  return ""
}