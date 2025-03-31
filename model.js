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
        { id: 1, rase: '', alder: '', størrelseVekt: '', favorittmat: '', rating: 4, ratings: 52, pictures: [] },
        { id: 2, rase: '', alder: '', størrelseVekt: '', favorittmat: '', rating: 3, ratings: 34, pictures: [] },
        { id: 3, rase: '', alder: '', størrelseVekt: '', favorittmat: '', rating: 3.5, ratings: 41, picture: 'dogpictures/dog3.avif' },
        { id: 4, rase: '', alder: '', størrelseVekt: '', favorittmat: '', rating: 5, ratings: 28, pictures: [] },
        { id: 5, rase: '', alder: '', størrelseVekt: '', favorittmat: '', rating: 4.5, ratings: 33, picture: 'dogpictures/dog5.avif' },
        { id: 6, rase: '', alder: '', størrelseVekt: '', favorittmat: '', rating: 4, ratings: 52, pictures: [] },
        { id: 7, rase: '', alder: '', størrelseVekt: '', favorittmat: '', rating: 3, ratings: 34, pictures: [] },
        { id: 8, rase: '', alder: '', størrelseVekt: '', favorittmat: '', rating: 3.5, ratings: 41, pictures: [] },
        { id: 9, rase: '', alder: '', størrelseVekt: '', favorittmat: '', rating: 5, ratings: 28, pictures: [] },
        { id: 10, rase: '', alder: '', størrelseVekt: '', favorittmat: '', rating: 4.5, ratings: 33, picture: 'dogpictures/dog10.avif' },
        { id: 11, rase: '', alder: '', størrelseVekt: '', favorittmat: '', rating: 4, ratings: 52, picture: 'dogpictures/dog11.avif' },
        { id: 12, rase: '', alder: '', størrelseVekt: '', favorittmat: '', rating: 3, ratings: 34, picture: 'dogpictures/dog12.avif' },
        { id: 13, rase: '', alder: '', størrelseVekt: '', favorittmat: '', rating: 3.5, ratings: 41, pictures: [] },
        { id: 14, rase: '', alder: '', størrelseVekt: '', favorittmat: '', rating: 5, ratings: 28, pictures: [] },
        { id: 15, rase: '', alder: '', størrelseVekt: '', favorittmat: '', rating: 4.5, ratings: 33, pictures: [] },
        { id: 16, rase: '', alder: '', størrelseVekt: '', favorittmat: '', rating: 4.5, ratings: 33, pictures: [] },
    ],

    topLists: {
        all: [1,2,3,4,5,6,7,8,9,10],
        small: [3, 5, 10, 11, 12],
        big: [],
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
