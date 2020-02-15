import React from 'react';
import {BREAKPOINT} from '../../lib/styles';
import {getProp} from '../../lib/utils';

export const HiddenOnMobile = props => {
    const displayValue =
        getProp(props, 'style.display') || getProp(props, 'display') || 'block';
    return (
        <div style={props.style}>
            {props.children}
            <style jsx>
                {`
                    div {
                        display: none;
                    }

                    @media screen and (min-width: ${BREAKPOINT}) {
                        div {
                            display: ${displayValue};
                        }
                    }
                `}
            </style>
        </div>
    );
};

export const HiddenOnDesktop = props => {
    const displayValue =
        getProp(props, 'style.display') || getProp(props, 'display') || 'block';
    return (
        <div style={props.style}>
            {props.children}
            <style jsx>
                {`
                    div {
                        display: ${displayValue};
                    }

                    @media screen and (min-width: ${BREAKPOINT}) {
                        div {
                            display: none;
                        }
                    }
                `}
            </style>
        </div>
    );
};
