import React, {Component} from "react";
import {
  Button,
  Grid,
  Typography,
  TextField
} from "@material-ui/core";
import { Link } from "react-router-dom";

export default class RoomJoin extends Component {
    constructor(props) {
        super(props);
        this.state = {
          roomCode: "",
          error: "",
        };
    }

    render() {
        return (
            <Grid container spacing={1} alignItems="center">
                <Grid item xs={12}>
                    <Typography variant="h4" component="h4">Join A Room</Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField error={this.state.error} label="Code" placeholder="Enter a room code" value={this.state.roomCode} helper={this.state.error} variant="outlined"/>
                </Grid>
            </Grid>
        );
    }
};
