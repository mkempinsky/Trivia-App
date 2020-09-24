import React from 'react';
import Question from '../QuestionSingle';
import Button from '../Button';
import Scoreboard from '../ScoreBoard';
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
    {title: 'Animals', key: 27},
];

class Questions extends React.Component {
    state = {
        isLoaded: false,
        error: null,
        questions: [],
        points: 0,
        difficulty: 'random',
        category: 9,
        isStarted: null,
        questionsAnswered: 0,
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
            .then((res) => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        points: 0,
                        questions: result.results,
                        isStarted: true,
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error,
                    });
                }
            );
    };
    updateCounter = (isAnsweredCorrect) => {
        this.setState(
            (prevState) => ({
                ...prevState,
                points: (isAnsweredCorrect && ++prevState.points) || prevState.points,
                questionsAnswered: ++prevState.questionsAnswered,
            }),
            () => {
                if (this.state.questionsAnswered === this.state.questions.length) {
                    swal({
                        title: 'Complete!',
                        text: `You got ${this.state.points} / ${
                            this.state.questions.length
                        } questions correct.`,
                        type: 'success',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Review Answers',
                        cancelButtonText: 'Start New Trivia',
                    }).then((result) => {
                        if (result.value) {
                            this.setState((prevState) => ({
                                ...prevState,
                            }));
                            return;
                        }
                    });
                }
            }
        );
    };
    handleLevelClick = (level) => {
        this.setState({
            difficulty: level,
        });
    };
    handleCategoryClick = (category) => {
        this.setState({
            category,
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
            confirmButtonText: 'Yes, restart!',
        }).then((result) => {
            if (result.value) {
                this.setState((prevState) => ({
                    ...prevState,
                    isStarted: null,
                    questionsAnswered: 0,
                }));
                return;
            }
        });
    };

    render() {
        const {questions, difficulty, category, isStarted} = this.state;
        const questionsCount = questions.length;
        const activeCategory = categories.filter((x) => x.key === category);
        const categoryName = activeCategory[0].title;
        return (
            <div>
                {isStarted && <Scoreboard category={categoryName} level={difficulty} />}
                <Button theme="correct">Correct</Button>
                <Button theme="incorrect">InCorrect</Button>
                <Button theme="disabled">Disabled</Button>

                {!this.state.isStarted && (
                    <div>
                        <div className="filters">
                            <p>Select a level:</p>
                            <div className="levels-container">
                                {levels.map((level) => {
                                    const active = level === difficulty ? 'active' : '';
                                    return (
                                        <div key={level}>
                                            <Button
                                                key={level}
                                                className={`levels ${active}`}
                                                onClick={() =>
                                                    this.handleLevelClick(level)
                                                }>
                                                {level.toUpperCase()}
                                            </Button>
                                        </div>
                                    );
                                })}
                            </div>
                            <p>Select a Category:</p>
                            <div className="levels-container">
                                {categories.map((x) => {
                                    const active = x.key === category ? 'active' : '';
                                    return (
                                        <div key={x.key}>
                                            <Button
                                                key={x.key}
                                                className={`categories ${active}`}
                                                onClick={() =>
                                                    this.handleCategoryClick(x.key)
                                                }>
                                                {x.title.toUpperCase()}
                                            </Button>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div>
                            <Button className="start" onClick={this.fetchQuestions}>
                                Begin Trivia
                            </Button>
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
                                    marginTop: '15px',
                                }}
                                onClick={this.handleRestart}>
                                New Trivia
                            </a>
                        </div>
                        <div style={{flex: '2'}}>
                            {questions.map((question) => {
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
                <style jsx>
                    {`
                        .levels-container {
                            display: flex;
                            flex-wrap: wrap;
                            justify-content: flex-start;
                            padding: 60px 0;
                        }
                        .levels-container > div {
                            margin: 0 30px 0 0;
                        }
                    `}
                </style>
            </div>
        );
    }
}

export default Questions;
