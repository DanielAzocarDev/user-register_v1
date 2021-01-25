import firebase from 'firebase/app'

import "firebase/auth"
import "firebase/firestore"

const config = {
  apiKey: "AIzaSyCKdFNU1rhH7ScxFc9Q66bseeb8p5YhCqU",
  authDomain: "proyecto-pruebas-registrousers.firebaseapp.com",
  projectId: "proyecto-pruebas-registrousers",
  storageBucket: "proyecto-pruebas-registrousers.appspot.com",
  messagingSenderId: "131220517224",
  appId: "1:131220517224:web:754b314313b1418cc166dd"
}

firebase.initializeApp(config);

export const auth = firebase.auth()
export const firestore = firebase.firestore()