import { printIntrospectionSchema } from "graphql";
import React, { useState } from "react";
import "./styles.css";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  }
}));

class TextFields extends React.Component {
  hadleOnChange = (event) => {
    console.log("Click");
    console.log(event.target.value);
  };
}

export default function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <h1>Shorten my Link</h1>
      <h2>
        Type a Link here:
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="standard-basic"
            label="url"
            onChange={this.hadleOnChange}
          />
        </form>
        <Button color="primary">Submit</Button>
      </h2>
    </div>
  );
}
