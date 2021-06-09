import React from "react";
import CreateRoom from "./CreateRoom";
import RoomJoin from "./RoomJoin";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Room from './Room'

const HomePage = () => {
  return (
      <Router>
          <Switch>
              <Route exact path="/">
                  <p>Home page link</p>
              </Route>
              <Route path="/join" component={RoomJoin}/>
              <Route path="/create" component={CreateRoom}/>
              <Route path="/room/:roomCode" component={Room} />
          </Switch>
      </Router>
  );
};

export default HomePage;
