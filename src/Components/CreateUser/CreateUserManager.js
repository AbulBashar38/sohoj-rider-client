import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";
export const configFunction = ()=>{
    if(!firebase.apps.length){
        firebase.initializeApp(firebaseConfig);
    }
}

export const createUserByEmail =(name,email,password)=>{
    return firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(res => {
    const userInfo = res.user;
    userInfo.isSignIn = true
    updateName(name)
    return userInfo
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}

const updateName = name =>{
    var user = firebase.auth().currentUser;

user.updateProfile({
  displayName: name,
 }).then(res=> {
  console.log('update name');
}).catch(error=> {
  console.log(error);
});
}