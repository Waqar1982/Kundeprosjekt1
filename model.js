const app = document.getElementById('app')

const model = {

app:{
    currentUserId: null,
    currentPage: 'startPage', // 

    page: [
        'startPage', 
        'dashboard', 
        'RatingPage',
        'profil',
        'ownerPage',
        'dogPage',
        'topLists',
        'search']


},
inputs: {
    currentDogID: 1,
    
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
        username: '',
        password: '',
        email: '',
        firstName: '',
        lastName: '',
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
        adminUser: true,
        firstName: 'Mister',
        lastName: 'Admin',
        password: 'admin',
        email: 'admin@admin.no',
        profilePicture: '',
        dogList: [],
        info: 'Admin',
        dogRatings: [{id: 1, rating: 4.5}]},

        {userID: 5,
        adminUser: false,
        firstName: 'Test',
        lastName: 'User',
        password: 'test',
        email: 'dummyuser@gmail.com',
        profilePicture: '',
        dogList: [],
        info: 'Test User. Please Ignore.',
        dogRatings: [{id: 1, rating: 4.5}]}
    ],


    dogs: [ //Kan starte med ett bilde
        { id: 1, name: 'testnavn1', race: 'Chow-Chow', age: '5', size: '', favoriteFood: '', rating: 0, ratings: 52, picture: 'dogpictures/dog1.avif' },
        { id: 2, name: 'testnavn2', race: 'Border Collie', age: '7', size: 'Stor', favoriteFood: '', rating: 3, ratings: 34, picture: 'dogpictures/dog2.avif' },
        { id: 3, name: 'Luna', race: 'Mops', age: '4', size: 'Liten', favoriteFood: 'Pølse', rating: 3.5, ratings: 41, picture: 'dogpictures/dog3.avif' },
        { id: 4, name: 'Aiko', race: 'Sibirsk Husky', age: '6', size: 'Stor', favoriteFood: 'Griseøre', rating: 5, ratings: 28, picture: 'dogpictures/dog4.avif' },
        { id: 5, name: 'testnavn5', race: 'Welsh Corgi Pembroke', age: '3', size: 'Liten', favoriteFood: '', rating: 4.5, ratings: 33, picture: 'dogpictures/dog5.avif' },
        { id: 6, name: 'testnavn6', race: 'Australian Shepherd', age: '5', size: 'Stor', favoriteFood: '', rating: 4, ratings: 52, picture: 'dogpictures/dog6.avif' },
        { id: 7, name: 'testnavn7', race: 'Amerikansk Staffordshire Terrier', age: '5', size: 'Stor', favoriteFood: '', rating: 3, ratings: 34, picture: 'dogpictures/dog7.avif' },
        { id: 8, name: 'testnavn8', race: 'Shetland Sheepdog', age: '7', size: 'Stor', favoriteFood: '', rating: 3.5, ratings: 41, picture: 'dogpictures/dog8.avif' },
        { id: 9, name: 'testnavn9', race: 'Golden Retriever', age: '6', size: '', favoriteFood: '', rating: 5, ratings: 28, picture: 'dogpictures/dog9.avif' },
        { id: 10, name: 'testnavn10', race: 'Yorkshire Terrier', age: '8', size: 'Liten', favoriteFood: '', rating: 4.5, ratings: 33, picture: 'dogpictures/dog10.avif' },
        { id: 11, name: 'testnavn11', race: 'Fransk Bulldog', age: '4', size: 'Liten', favoriteFood: '', rating: 4, ratings: 52, picture: 'dogpictures/dog11.avif' },
        { id: 12, name: 'testnavn12', race: 'Dachshund', age: '3', size: 'Liten', favoriteFood: '', rating: 3, ratings: 34, picture: 'dogpictures/dog12.avif' },
        { id: 13, name: 'testnavn13', race: 'Labrador Retriever', age: '5', size: '', favoriteFood: '', rating: 3.5, ratings: 41, picture: 'dogpictures/dog13.avif' },
        { id: 14, name: 'testnavn14', race: 'Shiba Inu', age: '8', size: '', favoriteFood: '', rating: 5, ratings: 28, picture: 'dogpictures/dog14.avif' },
        { id: 15, name: 'testnavn15', race: 'Cocker Spaniel', age: '5', size: '', favoriteFood: '', rating: 4.5, ratings: 33, picture: 'dogpictures/dog15.avif' },
        { id: 16, name: 'testnavn16', race: 'Boxer', age: '5', size: '', favoriteFood: '', rating: 4.5, ratings: 33, picture: 'dogpictures/dog16.avif' },
    ],

    topLists: {
        all: [1,2,3,4,5,6,7,8,9,10],
        small: [3, 5, 10, 11, 12],
        big: [2, 4, 6, 7, 8],
        shiba: [],
        labrador: [],
        mix: [],
    },
    /* topLists: [{
        listID: 1,
        name: 'all',
        topList: [],
    },{
        listID: 2,
        name: 'small',
        topList: [3, 5, 10, 11, 12],
    },{
        listID: 3,
        name: 'big',
        topList: [],
    },{
        listID: 4,
        name: 'shiba',
        topList: [],
    },{
        listID: 5,
        name: 'labrador',
        topList: [],
    },], */

    nyheter: [],

},

}
