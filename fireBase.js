let app_fireBase = {};

(function(){
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDvZT4xc_gYVKmT7tB4WcyEXcxZtwLe0y4",
        authDomain: "games-c5987.firebaseapp.com",
        databaseURL: "https://games-c5987.firebaseio.com",
        projectId: "games-c5987",
        storageBucket: "games-c5987.appspot.com",
        messagingSenderId: "534185131808"
    };
    firebase.initializeApp(config);

    app_fireBase = firebase;
})()
