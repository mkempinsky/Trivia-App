import React from "react";
import Questions from "../components/Questions";

class Trivia extends React.Component {
  state = {
    correctAnswers: null
  };
  render() {
    return (
      <div>
        <p>Trivia</p>
        <Questions />
      </div>
    );
  }
}
export default Trivia;
