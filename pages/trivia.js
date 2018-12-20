import React from "react";
import Questions from "../components/Questions";
import Footer from "../components/Footer";

class Trivia extends React.Component {
  state = {
    correctAnswers: null
  };
  render() {
    return (
      <div>
        <h1>Trivia</h1>
        <Questions />
        <Footer />
      </div>
    );
  }
}
export default Trivia;
