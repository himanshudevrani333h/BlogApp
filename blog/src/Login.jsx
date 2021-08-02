import { auth, SignInWithGoogle } from "./firebase";
import { useEffect } from "react";
import "./login.css";
import { Redirect } from "react-router-dom";
let Login = (props) => {
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user);
      if(user){
      let { uid } = user;
      console.log({ uid });
      props.idhandler({ uid });
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
            class="btn btn-lg btn-primary"
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
