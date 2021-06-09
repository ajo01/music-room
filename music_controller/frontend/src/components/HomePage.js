import React, { Component } from "react";
import CreateRoom from "./CreateRoom";
import RoomJoin from "./RoomJoin";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { Button, Grid, Typography, ButtonGroup } from "@material-ui/core";
import Room from "./Room";

export default class HomePage extends Component {
  renderHomePage() {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} align="center">
          <Typography variant="h3" compact="h3">
            House Party
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <ButtonGroup disableElevation variant="contained" color="primary">
            <Button color="primary" to="/join" component={Link}>Join a Room</Button>
            <Button color="secondary" to="/create" component={Link}>Create a Room</Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    );
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            {this.renderHomePage()}
          </Route>
          <Route path="/join" component={RoomJoin} />
          <Route path="/create" component={CreateRoom} />
          <Route path="/room/:roomCode" component={Room} />
        </Switch>
      </Router>
    );
  }
}
