import React from 'react';
import {purpleGradient} from '../../lib/styles';
const Button = (props) => {
    return (
        <div>
            <button {...props}>{props.children}</button>
            <style jsx>{`
                button {
                    width: 300px;
                    height: 50px;
                    border-radius: 10px;
                    border: 2px solid var(--interactive);
                    background: #fff;
                    margin: 15px 0;
                    cursor: pointer;
                    color: var(--interactive);
                    font-weight: bold;
                    font-size: 16px;
                    font-family: var(--font-title);
                }
                button:focus {
                    outline: none;
                }
                button:hover {
                    border: 2px solid var(--interactive-400);
                    color: var(--interactive-400);
                }
                button.active {
                    background: var(--interactive-100);
                }
            `}</style>
        </div>
    );
};

export default Button;
