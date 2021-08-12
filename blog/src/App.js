import EditPost from "./EditPost";
import Login from "./Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import Posts from "./Posts";

let App = () => {
  let [userid, setuserID] = useState(null);

  let idhandler = (id) => {
    if (id) setuserID(id.uid);
    else setuserID(null);
  };

  return (
    <Router>
      <Switch>
        <Route path="/posts">
          <div className="row">
            <div className="col-4  mt-4">
              <EditPost userid={userid} idhandler={idhandler} />
            </div>
            <Posts userid={userid} />
          </div>
        </Route>
        <Route path="/">
          <Login idhandler={idhandler} userid={userid} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
