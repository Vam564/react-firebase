import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const config = {

    apiKey: "AIzaSyDzlH6OAloKmf7lnPxW95hZeezb8o8H1tk",
    authDomain: "react-firebase-8de05.firebaseapp.com",
    databaseURL: "https://react-firebase-8de05.firebaseio.com",
    projectId: "react-firebase-8de05",
    storageBucket: "react-firebase-8de05.appspot.com",
    messagingSenderId: "590198772488",
    appId: "1:590198772488:web:0c54b67ac35e4513cf12bd"

}
class Firebase {

    constructor() {
        firebase.initializeApp(config);
        this.auth = firebase.auth();
        this.db = firebase.firestore();
        this.storage = firebase.storage();
    }

    isInitialized() {
		return new Promise(resolve => {
			this.auth.onAuthStateChanged(resolve)
		})
    }

    login(email, password) {
		return this.auth.signInWithEmailAndPassword(email, password)
  }
  
  async register(name, email, password) {
		await this.auth.createUserWithEmailAndPassword(email, password)
		return this.auth.currentUser.updateProfile({
			displayName: name
		})
	}
}
export default new Firebase();