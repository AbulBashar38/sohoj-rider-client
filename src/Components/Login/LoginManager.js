import firebase from "firebase/app";
import "firebase/auth";

export const emailSignIn=(email,password)=>{
    return firebase.auth().signInWithEmailAndPassword(email, password)
  .then(res => {
    const userInfo = res.user;
    userInfo.isSignIn=true;
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