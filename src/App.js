import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { render } from "react-dom";
import Counter from "./Counter";
import { createStore } from "redux";

const initialstate = { count: 0 };

function reducer(state = initialstate, action) {
  console.log("reducer", state, action);
  return state;
}

const store = createStore(reducer);

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
