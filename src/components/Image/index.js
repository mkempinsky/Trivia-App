import React, {Component} from 'react';
import {BREAKPOINT, px} from '../../lib/styles';

//transparent 1px by 1px gif
const placeholder =
    'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';

export default class Image extends Component {
    render() {
        const {width, mobileWidth, height, mobileHeight, styled, src, alt} = this.props;

        return (
            <React.Fragment>
                <img
                    src={src}
                    className={`${styled ? 'styled' : ''}`}
                    alt={alt}
                    {...this.props}
                />
                <style jsx>{`
                    img {
                        display: inline-block;
                        max-width: 100%;
                        vertical-align: top;
                        width: ${mobileWidth};
                        height: ${mobileHeight};
                        background-size: cover;
                        object-fit: cover;
                    }
                    img.styled {
                        border-radius: 5px;
                        box-shadow: 0 3px 20px rgba(000, 000, 000, 0.3);
                    }
                    @media screen and (min-width: ${BREAKPOINT}) {
                        img {
                            width: ${width};
                            height: ${height};
                        }
                    }
                `}</style>
            </React.Fragment>
        );
    }
}
