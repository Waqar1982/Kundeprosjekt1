const app = document.getElementById('app')

const model = {

app:{
    currentUserId: null,
    currentPage: 'dashboard', // 

    page: [
        'startPage', 
        'dashboard', 
        'ratingPage',
        'profil',
        'ownerPage',
        'dogPage',
        'topLists',
        'createPage',
        'search']
},

inputs: {
    currentDogID: 4,
    ratingDogID: 7,
    ownerID: 1,
    
    loggInn: {
        userName: '',
        password: '',
        infoOwner: '',
    },
    
    searchResult: {
        sort: null,
        searchText: '',
        layout: 'list',
    },
   
    createUser: {    
        password: '',
        email: '',
        firstName: '',
        lastName: '',
        number: null,
    },

    newUser: {
        userID: null,
        adminUser: false,
        firstName: '',
        lastName: '',
        password: '',
        email: '',
        phone: '',
        profilePicture: '',
        info: 'Ny bruker',
    },

    newDog: {
        owner: null,
        name: '',
        image: '',
        race: '',
        size: '',
        age: '',
        favoriteFood: '',
        info: '',
    },

    updateDog: {
        size: '',
        age: '',
        favoriteFood: '',
        info: '',
    },

    myProfile: {
        myInfo: '',
        newDog: '',
        addImgDog: '',
        profilePicture: '',
    },

    rateDog: {
        giveStars: null,
        commentDog: '',
    },
},

data: {
    users: [
        {userID: 1,
        bio: 'Dette er min bio', 
        adminUser: true,
        firstName: 'Mister',
        lastName: 'Admin',
        password: 'admin',
        email: 'admin@admin.no',
        phone: 12345,
        profilePicture: '',
        dogList: [4, 5, 6],
        info: 'Admin',
        dogRatings: [{id: 1, rating: 4.5}]},

        {userID: 5,
        bio: 'Dette er min bio', 
        adminUser: false,
        firstName: 'Test',
        lastName: 'User',
        password: 'test',
        email: 'dummyuser@gmail.com',
        phone: 12345,
        profilePicture: '',
        dogList: [1, 2, 3],
        info: 'Test User. Please Ignore.',
        dogRatings: [{id: 1, rating: 4.5}]}
    ],


    dogs: [ //Kan starte med ett bilde
        { id: 1, owner: 5, name: 'Simba', race: 'Chow-Chow', age: '5', size: '', favoriteFood: '', info: '', rating: 0, ratings: 52, picture: 'dogpictures/dog1.avif' },
        { id: 2, owner: 5, name: 'Cody', race: 'Border Collie', age: '7', size: 'Stor', favoriteFood: '', info: '', rating: 3, ratings: 34, picture: 'dogpictures/dog2.avif' },
        { id: 3, owner: 5, name: 'Luna', race: 'Mops', age: '4', size: 'Liten', favoriteFood: 'Pølse', info: '', rating: 3.5, ratings: 41, picture: 'dogpictures/dog3.avif' },
        { id: 4, owner: 1, name: 'Aiko', race: 'Sibirsk Husky', age: '6', size: 'Stor', favoriteFood: 'Griseøre', info: 'Liker å kose', rating: 5, ratings: 28, picture: 'dogpictures/dog4.avif' },
        { id: 5, owner: 1, name: 'Sissi', race: 'Welsh Corgi Pembroke', age: '3', size: 'Liten', favoriteFood: '', info: '', rating: 4.5, ratings: 33, picture: 'dogpictures/dog5.avif' },
        { id: 6, owner: 1, name: 'Saga', race: 'Australian Shepherd', age: '5', size: 'Stor', favoriteFood: '', info: '', rating: 4, ratings: 52, picture: 'dogpictures/dog6.avif' },
        { id: 7, owner: 1, name: 'Theo', race: 'Amerikansk Staffordshire Terrier', age: '5', size: 'Stor', favoriteFood: '', info: '', rating: 3, ratings: 34, picture: 'dogpictures/dog7.avif' },
        { id: 8, owner: 1, name: 'Lassie', race: 'Shetland Sheepdog', age: '7', size: 'Stor', favoriteFood: '', info: '', rating: 3.5, ratings: 41, picture: 'dogpictures/dog8.avif' },
        { id: 9, owner: 1, name: 'Victor', race: 'Golden Retriever', age: '6', size: '', favoriteFood: '', info: '', rating: 5, ratings: 28, picture: 'dogpictures/dog9.avif' },
        { id: 10, owner: 1, name: 'Lucy', race: 'Yorkshire Terrier', age: '8', size: 'Liten', favoriteFood: '', info: '', rating: 4.5, ratings: 33, picture: 'dogpictures/dog10.avif' },
        { id: 11, owner: 1, name: 'Tyko', race: 'Fransk Bulldog', age: '4', size: 'Liten', favoriteFood: '', info: '', rating: 4, ratings: 52, picture: 'dogpictures/dog11.avif' },
        { id: 12, owner: 1, name: 'Max', race: 'Dachshund', age: '3', size: 'Liten', favoriteFood: '', info: '', rating: 3, ratings: 34, picture: 'dogpictures/dog12.avif' },
        { id: 13, owner: 1, name: 'Leo', race: 'Labrador Retriever', age: '5', size: '', favoriteFood: '', info: '', rating: 3.5, ratings: 41, picture: 'dogpictures/dog13.avif' },
        { id: 14, owner: 1, name: 'Mikki', race: 'Shiba Inu', age: '8', size: '', favoriteFood: '', info: '', rating: 5, ratings: 28, picture: 'dogpictures/dog14.avif' },
        { id: 15, owner: 1, name: 'Mille', race: 'Cocker Spaniel', age: '5', size: '', favoriteFood: '', info: '', rating: 4.5, ratings: 33, picture: 'dogpictures/dog15.avif' },
        { id: 16, owner: 1, name: 'Frida', race: 'Boxer', age: '5', size: '', favoriteFood: '', info: '', rating: 4.5, ratings: 33, picture: 'dogpictures/dog16.avif' },
    ],

    topLists: {
        all: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
        small: [3, 5, 10, 11, 12],
        big: [2, 4, 6, 7, 8, 9, 13, 16],
        puppies: [],
        shiba: [],
        labrador: [],
        mix: [],
        adopted: [9, 13, 14, 15, 16]
    },

    news: ["Denne ukas hunderase er: Shiba Inu.", "Intervju med eieren av dagens hund: Simba.",
        "Se hunder oppe til adopsjon nær deg.", "Vi har fått 4 nye medlemer den siste uken!","7 hunder har bursdag i dag: De er ______"],
        //Eksempel-nyheter
},
}
