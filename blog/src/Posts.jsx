import { firestore } from "./firebase";
// import firebase from "firebase"
import { useEffect, useState } from "react";
let Posts = (props) => {
  let [posts, setPosts] = useState([]);

  useEffect(() => {
    let f = async () => {
      await firestore
        .collection(`${props.userid}`)
        .onSnapshot((querySnapshot) => {
          let arr = [];
          console.log(querySnapshot);
          console.log(props.userid);
          if (querySnapshot) {
            querySnapshot.forEach((element) => {
              let obj = {
                id: element.id,
                data: element.data(),
              };
              //  console.log(element.body + "1");
              arr.push(obj);
              // let {data} = element;
              // arr.push({data})
            });
            setPosts(arr);
          }
        });
    };
    f();
  }, []);

  if (posts.length == 0) return (<div className="mycontainer">No Posts Yet</div>);

  return (
    <div className="mycontainer">
      {posts.map((el) => {
        return (
          <div class="card" styles={{ width: "30rem" }}>
            <div class="card-body">
              <h5 class="card-title">Post</h5>
              <p class="card-text">{el.data.body}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
