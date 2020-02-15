import {dropShadow, yellow} from '../../lib/styles';
import MaxWidth from '../MaxWidth';
import MenuIcon from '../Svgs/MenuIcon';
import Link from 'next/link';

const navLinks = [
    {title: 'Play Trivia', href: '/trivia'},
    {title: 'About', href: '/about'}
];

export default class Nav extends React.Component {
    state = {
        isNavExpanded: null
    };
    toggleNav = () => {
        this.setState(prevState => ({
            isNavExpanded: !prevState.isNavExpanded
        }));
    };
    render() {
        const {isNavExpanded} = this.state;
        return (
            <React.Fragment>
                <nav>
                    <MaxWidth>
                        <div className="nav-inner">
                            <div>
                                <Link href="/">
                                    <a style={{color: '#000'}}>
                                        <h1>Trivia For Fun</h1>
                                    </a>
                                </Link>
                            </div>
                            <div
                                className={`menu-icon ${isNavExpanded ? 'expanded' : ''}`}
                                onClick={this.toggleNav}>
                                <MenuIcon />
                            </div>
                        </div>
                        <div className={`sub-nav ${isNavExpanded ? 'expanded' : ''}`}>
                            <ul className={`${isNavExpanded ? 'expanded' : ''}`}>
                                {navLinks.map(link => {
                                    const {title, href} = link;
                                    return (
                                        <li>
                                            <Link href={href} title={title}>
                                                <a>{title}</a>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </MaxWidth>
                </nav>
                <style jsx>
                    {`
                        nav {
                            width: 100%;
                            background: #fff;
                            height: 80px;
                            box-shadow: ${dropShadow()};
                            padding: 15px 0px;
                            top: 0;
                            position: fixed;
                        }
                        .nav-inner {
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                        }
                        a {
                            color: #fff;
                            text-decoration: none;
                        }
                        .menu-icon {
                            padding: 5px;
                            display: flex;
                            border-radius: 100%;
                        }
                        .menu-icon:hover {
                            cursor: pointer;
                        }
                        .menu-icon.expanded {
                            background: ${yellow()};
                            transition: all 0.5s;
                        }
                        .sub-nav {
                            background: rgba(51, 51, 51, 0.8);
                            box-shadow: ${dropShadow()};
                            position: fixed;
                            top: 80px;
                            right: 0;
                            width: 0;
                            height: 100%;
                            transition: all 0.5s;
                        }
                        .sub-nav.expanded {
                            width: 100%;
                            transition: all 0.5s;
                        }
                        ul {
                            list-style: none;
                            padding: 30px;
                            text-align: center;
                            font-size: 28px;
                            color: #fff;
                        }

                        li {
                            margin: 30px 0;
                        }
                    `}
                </style>
            </React.Fragment>
        );
    }
}
