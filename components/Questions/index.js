import React from "react";
import Question from "../QuestionSingle";
import { getProp, shuffleArray } from "../../lib/utils";

const levels = ["random", "easy", "medium", "hard"];

class Questions extends React.Component {
  state = {
    isLoaded: false,
    error: null,
    questions: [],
    points: 0,
    difficulty: null
  };

  fetchQuestions = () => {
    let level =
      this.state.difficulty === null
        ? ""
        : `&difficulty=${this.state.difficulty}`;

    fetch(`https://opentdb.com/api.php?amount=10${level}${level}`)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            questions: result.results
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  };
  componentDidMount = () => {
    this.fetchQuestions();
  };
  updateCounter = isAnsweredCorrect => {
    if (isAnsweredCorrect) {
      this.setState(prevState => ({
        ...prevState,
        points: ++this.state.points
      }));
    }
  };
  handleClick = level => {
    const difficulty = level === "random" ? null : level;
    this.setState(
      {
        difficulty
      },
      () => {
        this.fetchQuestions();
        console.log(this.state);
      }
    );
  };

  render() {
    const questions = this.state.questions;
    const questionsCount = questions.length;
    return (
      <div>
        <div style={{ display: "flex" }}>
          {levels.map(level => {
            return (
              <button onClick={() => this.handleClick(level)}>{level}</button>
            );
          })}
        </div>
        <p>
          {this.state.points}/{questionsCount}
        </p>
        {questions.map(question => {
          return (
            <Question
              key={question.question}
              data={question}
              triggerParentUpdate={this.updateCounter}
            />
          );
        })}
      </div>
    );
  }
}

export default Questions;
