import { printIntrospectionSchema, ValuesOfCorrectTypeRule } from "graphql";
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

var slugs = [];

function makeId(length) {
  var result = "";
  var characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  for (var j = 0; j < slugs.length; j++) {
    if (slugs[j] === result) return 0;
  }
  slugs.push(result);
  console.log(slugs);
  return result;
}

export default function App() {
  const classes = useStyles();
  const [myValue, setValue] = useState("");
  const handleChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };
  const makeSlug = (f) => {
    console.log(makeId(4));
  };
  return (
    <div className="App">
      <h1>Shorten my Link</h1>
      <h2>
        Type a Link here:
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="standard-basic"
            label="url"
            value={myValue}
            onChange={handleChange}
          />
        </form>
        <Button onClick={makeSlug} color="primary">
          Submit
        </Button>
      </h2>
    </div>
  );
}
