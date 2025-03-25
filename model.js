const model = {

app:{
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
    users: [{
        userID: 5,
        adminUser: false,
        firstName: '',
        lastName: '',
        password: '',
        email: '',
        profilePicture: '',
        dogList: [],
        info: '',
        dogRatings: [{id: 1, rating: 4.5}]
    }],

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
