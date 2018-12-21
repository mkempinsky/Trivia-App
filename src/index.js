import React from "react";
import ReactDOM from "react-dom";
import Trivia from "../pages/trivia";
import "./styles.css";

function App() {
  return (
    <div className="App">
      l<Trivia />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
