import { printIntrospectionSchema } from "graphql";
import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Shorten my Link</h1>
      <h2>Type a Link here: </h2>
      <input
        type="text"
        value={printIntrospectionSchema.value}
        onChange={this.handleChange}
      />
    </div>
  );
}
