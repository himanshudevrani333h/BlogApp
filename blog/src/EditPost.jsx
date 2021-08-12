import { Redirect } from "react-router-dom";
import { auth, firestore } from "./firebase";
import {useState} from "react"
import "./post.css";
let EditPost = (props) => {
  let [posts,setpost] = useState([]);
  let str = "";
  
  return (
    <>
      {props.userid ? (
        <>
          <div className="input-group ">
            <div className="input-group-prepend ">
              <span className="input-group-text">Edit Post</span>
            </div>
            <textarea
              className="form-control"
              placeholder="What's Happening?"
              aria-label="With textarea"
              onChange={(el) => {
                str = el.currentTarget.value;
              }}
            ></textarea>
            <button
              type="button"
              className="btn btn-primary"
              onClick={async () => {
                console.log(str);

                if (str != "") {
                 let data_= await firestore.collection(`users`).doc(props.userid).get();
                 console.log(data_.data().posts);
                let arr = data_.data().posts;
                arr.push(str);
                 firestore.collection(`users`).doc(`${props.userid}`).update({
                  posts: arr
                });
                }

                str = "";

                document.querySelector(".form-control").value ="";
              }}
            >
              Post
            </button>
          </div>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              props.idhandler(null);
              auth.signOut();
            }}
          >
            Logout
          </button>{" "}
        </>
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
};

export default EditPost;
