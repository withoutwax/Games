import firebase from 'firebase';

let config = {
    apiKey: "AIzaSyDvZT4xc_gYVKmT7tB4WcyEXcxZtwLe0y4",
    authDomain: "games-c5987.firebaseapp.com",
    databaseURL: "https://games-c5987.firebaseio.com",
    projectId: "games-c5987",
    storageBucket: "games-c5987.appspot.com",
    messagingSenderId: "534185131808",
    appId: "1:534185131808:web:5318c1ce5390916185e145"
};

let fire = firebase.initializeApp(config);
export default fire;