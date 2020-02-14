import React from 'react';
import {purpleGradient} from '../../lib/styles';
const Button = props => {
    return (
        <div>
            <button {...props} className={`${props.theme ? props.theme : 'default'}`}>
                {props.children}
            </button>
            <style jsx>
                {`
                    button {
                        width: 200px;
                        font-size: 16px;
                        font-weight: 600;
                        color: #fff;
                        cursor: pointer;
                        margin: 30px 0;
                        height: 55px;
                        text-align: center;
                        border: none;
                        background-size: 300% 100%;
                        border-radius: 50px;
                        moz-transition: all 0.4s ease-in-out;
                        -o-transition: all 0.4s ease-in-out;
                        -webkit-transition: all 0.4s ease-in-out;
                        transition: all 0.4s ease-in-out;
                    }

                    button:hover {
                        background-position: 100% 0;
                        moz-transition: all 0.4s ease-in-out;
                        -o-transition: all 0.4s ease-in-out;
                        -webkit-transition: all 0.4s ease-in-out;
                        transition: all 0.4s ease-in-out;
                    }

                    button:focus {
                        outline: none;
                    }

                    button.default {
                        background-image: ${purpleGradient};
                        box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);
                    }
                `}
            </style>
        </div>
    );
};

export default Button;
