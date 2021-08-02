import { Redirect } from "react-router-dom";
import { auth, firestore } from "./firebase";
import "./post.css";
let EditPost = (props) => {
  let str = "";

  return (
    <>
      {props.userid ? (
        <>
          <div class="input-group ">
            <div class="input-group-prepend ">
              <span class="input-group-text">Edit Post</span>
            </div>
            <textarea
              class="form-control"
              placeholder="What's Happening?"
              aria-label="With textarea"
              onChange={(el) => {
                str = el.currentTarget.value;
              }}
            ></textarea>
            <button
              type="button"
              class="btn btn-primary"
              onClick={() => {
                console.log(str);

                if (str != "") {
                  firestore.collection(`${props.userid}`).add({ body: str });
                }

                str = "";
              }}
            >
              Post
            </button>
          </div>
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => {
              auth.signOut();
              props.idhandler(null);
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
