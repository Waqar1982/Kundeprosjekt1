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


    dogs: [
        { id: 1, rase: '', alder: '', størrelseVekt: '', favorittmat: '', rating: 4, pictures: [] },
        { id: 2, rase: '', alder: '', størrelseVekt: '', favorittmat: '', rating: 3, pictures: [] },
        { id: 3, rase: '', alder: '', størrelseVekt: '', favorittmat: '', rating: 3.5, pictures: [] },
        { id: 4, rase: '', alder: '', størrelseVekt: '', favorittmat: '', rating: 5, pictures: [] },
        { id: 5, rase: '', alder: '', størrelseVekt: '', favorittmat: '', rating: 4.5, pictures: [] },
    ],

    nyheter: [],

},

}
