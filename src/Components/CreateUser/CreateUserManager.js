import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";
export const configFunction = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
}

export const createUserByEmail = (name, email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
            const userInfo = res.user;
            userInfo.isSignIn = true;
            updateName(name)
            return userInfo
        })
        .catch((error) => {
            const userInfo = {};
            const errorMessage = error.message;
            userInfo.error = errorMessage;
            userInfo.isSignIn = false;
            return userInfo;
        });
}

const updateName = name => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
        displayName: name,
    }).then(res => {
        console.log('update name');
    }).catch(error => {
        console.log(error);
    });
}

export const googleLogin = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider)
        .then(res => {
            const { displayName, email } = res.user;
            const userInfo = {
                name: displayName,
                email:email,
                isSignIn:true,
            }
            return userInfo
        }).catch(error => {
            const userInfo = {};
            const errorMessage = error.message;
            userInfo.error = errorMessage;
            userInfo.isSignIn = false;
            return userInfo;
        });
}