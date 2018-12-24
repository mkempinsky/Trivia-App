import React from "react";
import Questions from "../components/Questions";
import Footer from "../components/Footer";

class Trivia extends React.Component {
  state = {
    correctAnswers: null
  };
  render() {
    return (
      <div style={{maxWidth: '700px', margin: '0 auto'}}>
        <h1>Trivia</h1>
        <Questions />
      </div>
    );
  }
}
export default Trivia;
