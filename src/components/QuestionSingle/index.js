import React from "react";
import { getProp, shuffleArray } from "../../lib/utils";
import Button from "../Button";

class Question extends React.Component {
  state = {
    isAnsweredCorrect: null,
    isAnswered: null
  };
  componentDidMount = () => {
    const data = this.props.data;
    const correctAnswer = getProp(data, "correct_answer");
    const incorrrectAnswers = getProp(data, "incorrect_answers");
    // create array with all answers as object
    const answers = incorrrectAnswers.map(answer => {
      return { answer, correct: false };
    });
    answers.push({ answer: correctAnswer, correct: true });
    const shuffledAnswers = shuffleArray(answers);
    this.setState({
      answers: shuffledAnswers
    });
    return;
  };

  handleClick = answer => {
    this.setState(
      {
        isAnsweredCorrect: answer,
        isAnswered: true
      },
      function() {
        this.props.triggerParentUpdate(this.state.isAnsweredCorrect);
      }
    );
  };

  render() {
    const data = this.props.data;
    const question = getProp(data, "question");
    const difficulty = getProp(data, "difficulty");
    const category = getProp(data, "category").replace('Entertainment:', '');
    const answers = this.state.answers;
    return (
      <div className="question-card">
        <p
          style={{ textAlign: "center" }}
          dangerouslySetInnerHTML={{ __html: question }}
        />
        <div className="answers-container">
          {this.state.answers && (
            <div>
              {answers.map(answer => {
                const theme = this.state.isAnsweredCorrect
                  ? "correct"
                  : "incorrect";
                const correctColor =
                  answer.correct && this.state.isAnsweredCorrect && "green";
                const showCorrect =
                  answer.correct &&
                  this.state.isAnswered &&
                  !this.state.isAnsweredCorrect &&
                  "reveal-correct";

                return (
                  <Button
                    key={answer.answer}
                    className={`question ${correctColor} ${showCorrect}`}
                    disabled={this.state.isAnswered}
                    onClick={() => this.handleClick(answer.correct)}
                  >
                    <span dangerouslySetInnerHTML={{ __html: answer.answer }} />
                  </Button>
                );
              })}
            </div>
          )}
        </div>
        <div className="difficulty-container">
          Level:{" "}
          {difficulty && difficulty === "easy" && (
            <span>
              <i className={`fas fa-circle ${difficulty}`} />
            </span>
          )}
          {difficulty && difficulty === "medium" && (
            <span>
              <i className={`fas fa-circle ${difficulty}`} />
              <i className={`fas fa-circle ${difficulty}`} />
            </span>
          )}
          {difficulty && difficulty === "hard" && (
            <span>
              <i className={`fas fa-circle ${difficulty}`} />
              <i className={`fas fa-circle ${difficulty}`} />
              <i className={`fas fa-circle ${difficulty}`} />
            </span>
          )}
        </div>
        <span style={{fontSize: '12px'}} dangerouslySetInnerHTML={{__html: category}}/>
      </div>
    );
  }
}
export default Question;
