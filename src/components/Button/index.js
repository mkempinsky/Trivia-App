import React from 'react';
import {purpleGradient} from '../../lib/styles';
const Button = (props) => {
    const {theme = ''} = props;
    console.log(theme);
    return (
        <div>
            <button {...props} className={theme}>
                {props.children}
            </button>
            <style jsx>{`
                button {
                    max-width: 300px;
                    padding: 10px 15px;
                    border-radius: 3px;
                    border: 2px solid var(--interactive);
                    background: #fff;
                    margin: 10px 0;
                    cursor: pointer;
                    color: var(--gray-700);
                    font-weight: bold;
                    font-size: 14px;
                    font-family: var(--font-title);
                }
                button:focus {
                    outline: none;
                }
                button:hover {
                    border: 2px solid var(--interactive-400);
                }
                button.active {
                    background: var(--interactive-100);
                }

                button.correct {
                    border: 2px solid var(--success);
                    background: var(--success);
                    color: #fff;
                }
                button.incorrect {
                    border: 2px solid var(--error);
                    background: var(--error);
                    color: #fff;
                }
                button.disabled {
                    border: 2px solid var(--gray-500);
                    opacity: 0.5;
                }
            `}</style>
        </div>
    );
};

export default Button;
