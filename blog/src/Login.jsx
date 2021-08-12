import { auth, SignInWithGoogle,firestore } from "./firebase";
import { useEffect } from "react";
import "./login.css";
import { Redirect } from "react-router-dom";
let Login = (props) => {
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
     if(user){ let { uid } = user;
      props.idhandler({uid});
      let docref = firestore.collection("users").doc(uid);
      let document = await docref.get();
      console.log(document.data().posts);
      if (!document.data().posts) {
        docref.set({
          posts: [],
        });
      }else{
        return;
      }
    }
    });
  }, []);

  return (
    <>
      {props.userid ? (
        <Redirect to="/posts" />
      ) : (
        <>
          <button
            type="button"
            className="btn btn-lg btn-primary"
            onClick={SignInWithGoogle}
          >
            {" "}
            Login
          </button>
        </>
      )}
    </>
  );
};

export default Login;
