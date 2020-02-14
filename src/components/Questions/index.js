import React from 'react';
import Question from '../QuestionSingle';
import swal from 'sweetalert2';

const levels = ['random', 'easy', 'medium', 'hard'];
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
];

class Questions extends React.Component {
    state = {
        isLoaded: false,
        error: null,
        questions: [],
        points: 0,
        difficulty: null,
        category: null,
        isStarted: null,
        questionsAnswered: 0
    };
    fetchQuestions = () => {
        let level =
            this.state.difficulty === 'random' || this.state.difficulty === null
                ? ''
                : `&difficulty=${this.state.difficulty}`;
        let category =
            this.state.category === null
                ? `&category=${9}`
                : `&category=${this.state.category}`;
        fetch(`https://opentdb.com/api.php?amount=10${level}${category}`)
            .then(res => res.json())
            .then(
                result => {
                    this.setState({
                        isLoaded: true,
                        points: 0,
                        questions: result.results,
                        isStarted: true
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
    updateCounter = isAnsweredCorrect => {
        this.setState(
            prevState => ({
                ...prevState,
                points: (isAnsweredCorrect && ++prevState.points) || prevState.points,
                questionsAnswered: ++prevState.questionsAnswered
            }),
            () => {
                if (this.state.questionsAnswered === this.state.questions.length) {
                    swal({
                        title: 'Complete!',
                        text: `You got ${this.state.points} / ${this.state.questions.length} questions correct.`,
                        type: 'success',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Review Answers',
                        cancelButtonText: 'Start New Trivia'
                    }).then(result => {
                        if (result.value) {
                            this.setState(prevState => ({
                                ...prevState
                            }));
                            return;
                        }
                    });
                }
            }
        );
    };
    handleLevelClick = level => {
        this.setState({
            difficulty: level
        });
    };
    handleCategoryClick = category => {
        this.setState({
            category
        });
    };
    handleRestart = () => {
        swal({
            title: 'Are you sure?',
            text: "You won't be able to come back to this quiz.",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, restart!'
        }).then(result => {
            if (result.value) {
                this.setState(prevState => ({
                    ...prevState,
                    isStarted: null,
                    questionsAnswered: 0
                }));
                return;
            }
        });
    };

    render() {
        const questions = this.state.questions;
        const questionsCount = questions.length;
        const currentLevel = this.state.difficulty || 'random';
        const currentCategory = this.state.category || 9;
        console.log(this.state.questionsAnswered);
        return (
            <div>
                {!this.state.isStarted && (
                    <div>
                        <div className="filters">
                            <p>Select a level:</p>
                            <div className="levels-container">
                                {levels.map(level => {
                                    const active = level === currentLevel ? 'active' : '';
                                    return (
                                        <button
                                            key={level}
                                            className={`levels ${active}`}
                                            onClick={() => this.handleLevelClick(level)}>
                                            {level.toUpperCase()}
                                        </button>
                                    );
                                })}
                            </div>
                            <p>Select a Category:</p>
                            <div className="levels-container">
                                {categories.map(category => {
                                    const active =
                                        category.key === currentCategory ? 'active' : '';
                                    return (
                                        <button
                                            key={category.key}
                                            className={`categories ${active}`}
                                            onClick={() =>
                                                this.handleCategoryClick(category.key)
                                            }>
                                            {category.title.toUpperCase()}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                        <div>
                            <button className="start" onClick={this.fetchQuestions}>
                                Begin Trivia
                            </button>
                        </div>
                    </div>
                )}
                {this.state.isStarted && questions && (
                    <div className="container">
                        <div className="counter" style={{flex: '1'}}>
                            <h3 style={{margin: '0 0 5px 0'}}>Points:</h3>
                            {this.state.points}/{questionsCount}
                            <a
                                style={{
                                    display: 'block',
                                    fontSize: '12px',
                                    marginTop: '15px'
                                }}
                                onClick={this.handleRestart}>
                                New Trivia
                            </a>
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
                )}
            </div>
        );
    }
}

export default Questions;
