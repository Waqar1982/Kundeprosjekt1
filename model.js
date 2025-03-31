const app = document.getElementById('app')

const model = {

app:{
    currentPage: 'startPageView',

    page: [
        'startPage', 
        'dashboard', 
        'RatingPage',
        'profil',
        'ownerPage',
        'dogPage',
        'topLists']


},
inputs: {
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
        { id: 1, name: 'testnavn1', race: '', age: '', size: '', favorittmat: '', rating: 4, ratings: 52, pictures: [] },
        { id: 2, name: 'testnavn2', race: '', age: '', size: '', favorittmat: '', rating: 3, ratings: 34, picture: 'dogpictures/dog2.avif' },
        { id: 3, name: 'testnavn3', race: '', age: '', size: '', favorittmat: '', rating: 3.5, ratings: 41, picture: 'dogpictures/dog3.avif' },
        { id: 4, name: 'testnavn4', race: '', age: '', size: '', favorittmat: '', rating: 5, ratings: 28, picture: 'dogpictures/dog4.avif' },
        { id: 5, name: 'testnavn5', race: '', age: '', size: '', favorittmat: '', rating: 4.5, ratings: 33, picture: 'dogpictures/dog5.avif' },
        { id: 6, name: 'testnavn6', race: '', age: '', size: '', favorittmat: '', rating: 4, ratings: 52, picture: 'dogpictures/dog6.avif' },
        { id: 7, name: 'testnavn7', race: '', age: '', size: '', favorittmat: '', rating: 3, ratings: 34, picture: 'dogpictures/dog7.avif' },
        { id: 8, name: 'testnavn8', race: '', age: '', size: '', favorittmat: '', rating: 3.5, ratings: 41, picture: 'dogpictures/dog8.avif' },
        { id: 9, name: 'testnavn9', race: '', age: '', size: '', favorittmat: '', rating: 5, ratings: 28, pictures: [] },
        { id: 10, name: 'testnavn10', race: '', age: '', size: '', favorittmat: '', rating: 4.5, ratings: 33, picture: 'dogpictures/dog10.avif' },
        { id: 11, name: 'testnavn11', race: '', age: '', size: '', favorittmat: '', rating: 4, ratings: 52, picture: 'dogpictures/dog11.avif' },
        { id: 12, name: 'testnavn12', race: '', age: '', size: '', favorittmat: '', rating: 3, ratings: 34, picture: 'dogpictures/dog12.avif' },
        { id: 13, name: 'testnavn13', race: '', age: '', size: '', favorittmat: '', rating: 3.5, ratings: 41, pictures: [] },
        { id: 14, name: 'testnavn14', race: '', age: '', size: '', favorittmat: '', rating: 5, ratings: 28, pictures: [] },
        { id: 15, name: 'testnavn15', race: '', age: '', size: '', favorittmat: '', rating: 4.5, ratings: 33, pictures: [] },
        { id: 16, name: 'testnavn16', race: '', age: '', size: '', favorittmat: '', rating: 4.5, ratings: 33, pictures: [] },
    ],

    topLists: {
        all: [1,2,3,4,5,6,7,8,9,10],
        small: [3, 5, 10, 11, 12],
        big: [2, 4, 6, 7, 8],
        shiba: [],
        labrador: [],
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
