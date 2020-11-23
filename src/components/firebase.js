import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDaHK9qoo3JUQjN3G4FxaTfg2BHTqcLwjM",
    authDomain: "ecommerce-2afab.firebaseapp.com",
    databaseURL: "https://ecommerce-2afab.firebaseio.com",
    projectId: "ecommerce-2afab",
    storageBucket: "ecommerce-2afab.appspot.com",
    messagingSenderId: "711474757856",
    appId: "1:711474757856:web:1711545c9de05ffedd5085",
    measurementId: "G-QJN0PMLDLR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export {db, auth}