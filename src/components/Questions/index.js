import React from "react";
import Question from "../QuestionSingle";
import { getProp, shuffleArray } from "../../lib/utils";

const levels = ["random", "easy", "medium", "hard"];
const categories = [
  {title: 'General Knowledge', key: 9},
  {title: 'Television', key: 14},
  {title: 'Film', key: 11},
  {title: 'Music', key: 12},
  {title: 'Science & Nature', key: 17},
  {title: 'Sports', key: 21},
  {title: 'Geography', key: 22},
  {title: 'History', key: 23},
  {title: 'Politics', key: 24},
  {title: 'Celebrities', key: 26}, 
  {title: 'Animals', key: 27}
]

class Questions extends React.Component {
  state = {
    isLoaded: false,
    error: null,
    questions: [],
    points: 0,
    difficulty: null,
    category: null,
  };

  fetchQuestions = () => {
    console.log("fetching questions");
    let level =
      this.state.difficulty === "random" || this.state.difficulty === null
        ? ""
        : `&difficulty=${this.state.difficulty}`;
    let category = this.state.category === null ? `&category=${9}` : `&category=${this.state.category}`;
    fetch(`https://opentdb.com/api.php?amount=10${level}${category}`)
      .then(res => res.json())
      .then(
        result => {
          this.setState(
            {
              isLoaded: true,
              points: 0,
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
  handleLevelClick = level => {
    this.setState(
      {
        difficulty: level
      },
      () => {
        this.fetchQuestions();
      }
    );
  };
  handleCategoryClick = category => {
    this.setState(
      {
        category
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
    const currentCategory = this.state.category || 9;

    return (
      <div>
        <div className="filters">
          <p>Select a level:</p>
          <div className="levels-container">
            {levels.map(level => {
              const active = level === currentLevel ? "active" : "";
              return (
                <button
                  key={level}
                  className={`levels ${active}`}
                  onClick={() => this.handleLevelClick(level)}
                >
                  {level.toUpperCase()}
                </button>
              );
            })}
          </div>
          <p>Select a Category:</p>
          <div className="levels-container">
            {categories.map(category => {
              const active = category.key === currentCategory ? "active" : "";
              return (
                <button
                  key={category.key}
                  className={`categories ${active}`}
                  onClick={() => this.handleCategoryClick(category.key)}
                >
                  {category.title.toUpperCase()}
                </button>
              );
            })}
          </div>
        </div>
        <div className="container">
          <div className="counter" style={{flex: '1'}}>
            <h3 style={{margin: '0 0 5px 0'}}>Points:</h3>
            {this.state.points}/{questionsCount}
          </div>
          <div style={{flex: '2'}}>
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
        </div>
      </div>
    );
  }
}

export default Questions;
