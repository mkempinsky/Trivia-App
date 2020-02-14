import {dropShadow} from '../../lib/styles';
import MaxWidth from '../MaxWidth';

export default class Nav extends React.Component {
    render(){
        return(
            <React.Fragment>
            <nav>
                <MaxWidth style={{margin: '0'}}>
                    <div>

                    <h1>Trivia For Fun</h1>
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
                        display: flex;
                        align-items: center;
                        text-align: left;
                        padding: 15px 0px;
                        positon: sticky;
                        top: 0;
                    }
                    `}
                </style>

            </React.Fragment>
        )
    }
}