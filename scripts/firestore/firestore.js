// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyDvZT4xc_gYVKmT7tB4WcyEXcxZtwLe0y4",
    authDomain: 'games-c5987.firebaseapp.com',
    projectId: 'games-c5987'
});

const db = firebase.firestore();

// Update Firestire settings
// const settings = {/* your settings... */ timestampsInSnapshots: true};
// db.settings(settings);