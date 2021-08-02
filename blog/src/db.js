import firebase from "firebase"

function createUserCollectionSet(user){
    firebase.firestore().collection(`${user}`).set({})
 }

//  function createUserCollectionAdd(user,data){
//     firestore.collection("users").doc(user).add({Body:data});
//  }

//  export default {createUserCollectionSet,createUserCollectionAdd}
export default createUserCollectionSet
