import { firestore } from "./firebase";
import { useEffect, useState } from "react";
let Posts = (props) => {
  let [posts, setPosts] = useState([]);

  useEffect(() => {
    let f = async () => {
   let unsub =   await firestore
        .collection(`users`).doc(`${props.userid}`)
        .onSnapshot((querySnapshot) => {
          let arr = [];
          console.log(querySnapshot.exists);
          console.log(querySnapshot.data())
          console.log(props.userid);
          if (querySnapshot.exists) {
            querySnapshot.data().posts.map((el)=>{
              arr.push(el)
            })
            setPosts(arr);
          }
        });
        return ()=>{
          unsub();
           }
    };
    f();

    
  }, []);

  if (posts.length == 0) return (<div className="mycontainer">No Posts Yet</div>);

  return (
    <div className="mycontainer">
      {posts.map((el) => {
        return (
          <div className="card" styles={{ width: "30rem" }}>
            <div className="card-body">
              <h5 className="card-title">Post</h5>
              <p className="card-text">{el}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
