// Initialiserer hundelisten hvis den ikke finnes fra før 
// *HUSK Å ENDRE*
let dogs = JSON.parse(localStorage.getItem('dogs')) || [];

// Legger til variabler som holder styr på om feltene er gyldige
let invalidName = false;
let invalidImage = false;

// Lagrer og henter bio fra localStorage
function saveBio() {
    const bioText = document.getElementById('bioOwner').value;
    localStorage.setItem('bio', bioText);
}

function loadBio() {
    const savedBio = localStorage.getItem('bio');
    if (savedBio) {
       // document.getElementById('bioOwner').value = savedBio;
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

// Legger til en ny hund og oppdaterer visningen med visuell feilmelding
function addDog() {
    const nameInput = document.getElementById('newDogName');
    const imageInput = document.getElementById('newDogImage');
    const name = nameInput.value.trim();
    const imageURL = imageInput.value.trim();

    // Sjekker om feltene er tomme
    invalidName = !name;
    invalidImage = !imageURL;

    if (!invalidName && !invalidImage) {
        dogs.push({ name, imageURL});
        saveDogs();
        closeAddDogForm();
        changePage('ownerPage');
    } else {
     // Sett feltene som røde eller grønne før vi oppdaterer visningen
    if (invalidName) {
        nameInput.style.border = '2px solid red';
    } else {
        nameInput.style.border = '2px solid green';
    }

    if (invalidImage) {
        imageInput.style.border = '2px solid red';
    } else {
        imageInput.style.border = '2px solid green';
    }
   
    }
}

// Når slett-knappen trykkes, vis bekreftelse-knappen
function askDeleteDog(name) {
    document.getElementById(`confirm-delete-${name}`).style.display = 'inline-block';
    document.getElementById(`cancel-delete-${name}`).style.display = 'inline-block';
    document.getElementById(`dog-${name}`).style.border = '2px solid red'; // Marker hunden med rød kant
    const deleteButton = document.getElementById(`delete-${name}`);
    if (deleteButton) {
        deleteButton.style.display = 'none'; // Skjuler slett-knappen
    }
}

// Kanseller slettingen
function cancelDeleteDog(name) {
    document.getElementById(`confirm-delete-${name}`).style.display = 'none'; // Skjul Bekreft slett
    document.getElementById(`cancel-delete-${name}`).style.display = 'none'; // Skjul Avbryt
    document.getElementById(`dog-${name}`).style.border = 'none'; // Fjern rød kant
    const deleteButton = document.getElementById(`delete-${name}`); // Finner slett-knappen
    if (deleteButton) {
        deleteButton.style.display = 'inline-block'; // Vis Slett-knappen igjen
    }
}


    // Slette hund med oppdatering av visning
    function deleteDog(name) {
    const index = dogs.findIndex(dog => dog.name === name);
    const dogListElement = document.getElementById(`dog-${name}`);

    if (index !== -1) {
        dogs.splice(index, 1); // Fjern hunden fra arrayet
        saveDogs(); // Lagre endringene
        changePage('ownerPage');
    } else {
     // Hvis hunden ikke finnes, marker elementet rødt
        if (dogListElement) {
            dogListElement.style.border = '2px solid red';
        }
    }
}

// Viser detaljer for en bestemt hund
function viewDog(name) {
    const dog = dogs.find(d => d.name === name);
    if (!dog) return alert('Hund ikke funnet.');

    alert(`Du ser på hunden ${dog.name}`);

}
