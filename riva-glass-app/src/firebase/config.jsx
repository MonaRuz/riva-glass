import firebase from "firebase/app"
import "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyD8G_kopQ2eP-vruWX6jSHfe4j_k1zsrkE",
  authDomain: "riva-glass.firebaseapp.com",
  projectId: "riva-glass",
  storageBucket: "riva-glass.appspot.com",
  messagingSenderId: "17284045683",
  appId: "1:17284045683:web:01f10f3d5f58f19206c306",
  measurementId: "G-J5Q10ME6N1"
}


// počáteční nastavení firebase (init)
firebase.initializeApp(firebaseConfig)


// počáteční nastavení služeb (services)
const projectFirestore = firebase.firestore()


export { projectFirestore }
