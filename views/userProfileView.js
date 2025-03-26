function userProfileView() {
app.innerHTML = /*html*/ `

<button onclick="topLists()">Flere Topplister</button>
<input type="text" id="search" placeholder="Søk">
<button onclick="ratingSite()">Ratingside</button>
<h1>Profil<h1>
<h3>Kort info om eier<h3>
<h2>Hunder<h2>
<h3>Hundenavn<h3>
<button onclick="myProfile()">Min Profil</button>
`
}