import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { render } from "react-dom";
import Counter from "./Counter";
import { createStore } from 'redux';

const store = createStore();

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;