// Initialiserer hundelisten hvis den ikke finnes fra før
let dogs = JSON.parse(localStorage.getItem('dogs')) || [];

// Lagrer og henter bio fra localStorage
function saveBio() {
    const bioText = document.getElementById('bioOwner').value;
    localStorage.setItem('bio', bioText);
}

function loadBio() {
    const savedBio = localStorage.getItem('bio');
    if (savedBio) {
        document.getElementById('bioOwner').value = savedBio;
    }
}

// Lagrer og henter hunder fra localStorage
function saveDogs() {
    localStorage.setItem('dogs', JSON.stringify(dogs));
}

function loadDogs() {
    dogs = JSON.parse(localStorage.getItem('dogs')) || [];
}

// Viser skjemaet for å legge til ny hund
function showAddDogForm() {
    if (!document.getElementById('addDogForm')) {
    const formHtml = `
    <div id="addDogForm" style="position: fixed; top: 20%; left: 30%; background: white; padding: 20px; border-radius: 10px;">
    <h2>Legg til en ny hund</h2>
    <input type="text" id="newDogName" placeholder="Hundens navn" style="padding: 5px; margin-bottom: 10px;">
    <input type="text" id="newDogImage" placeholder="Bilde-URL" style="padding: 5px; margin-bottom: 10px;">
    <button onclick="addDog()" style="padding: 5px 10px;">Legg til</button>
    <button onclick="closeAddDogForm()" style="padding: 5px 10px; margin-left: 10px;">Avbryt</button>
    </div>
    `;
    document.body.insertAdjacentElement('beforeend', formHtml);
} else {
    document.getElementById('addDogForm').style.display = 'block';
}
}

// Skjuler skjemaet for å legge til ny hund
function closeAddDogForm() {
    const form = document.getElementById('addDogForm');
    if (form) form.style.display = 'none';
}

// Legger til en ny hund og oppdaterer visningen
function addDog() {
    const name = document.getElementById('newDogName').value;
    const imageURL = document.getElementById('newDogImage').value;

    if (name && imageURL) {
        dogs.push({ name, imageURL});
        saveDogs();
        closeAddDogForm();
        ownerPageView();
    } else {
        alert('Vennligst fyll ut både navn og bilde-URL');
    }
}

// Slette hund
function deleteDog(name) {
    const confirmation = confirm(`Er du sikker på at du vil slette ${name}?`);
    if (confirmation) {
    dogs = dogs.filter(dog => dog.name !== name);
    saveDogs();
    ownerPageView();
}
}
// Viser detaljer for en bestemt hund
function viewDog(name) {
    const dog = dogs.find(d => d.name === name);
    if (!dog) return alert('Hund ikke funnet.');

    alert(`Du ser på hunden ${dog.name}`);

}
