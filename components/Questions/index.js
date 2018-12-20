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
    console.log("fetching questions");
    let level =
      this.state.difficulty === "random" || this.state.difficulty === null
        ? ""
        : `&difficulty=${this.state.difficulty}`;

    fetch(`https://opentdb.com/api.php?amount=10${level}${level}`)
      .then(res => res.json())
      .then(
        result => {
          this.setState(
            {
              isLoaded: true,
              questions: result.results
            },
            () => {
              console.log(this.state);
            }
          );
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
    this.setState(
      {
        difficulty: level
      },
      () => {
        this.fetchQuestions();
      }
    );
  };

  render() {
    const questions = this.state.questions;
    const questionsCount = questions.length;
    const currentLevel = this.state.difficulty || "random";
    return (
      <div>
        <p>Select a level:</p>
        <div className="levels-container">
          {levels.map(level => {
            const active = level === currentLevel ? "active" : "";
            return (
              <button
                key={level}
                className={`levels ${active}`}
                onClick={() => this.handleClick(level)}
              >
                {level.toUpperCase()}
              </button>
            );
          })}
        </div>
        <div className="counter">
          {this.state.points}/{questionsCount}
        </div>
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
