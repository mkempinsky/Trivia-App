import Layout from '../components/Layout';
import MaxWidth from '../components/MaxWidth';
import {dropShadow, yellow, BREAKPOINT} from '../lib/styles';
import Image from '../components/Image';
import Button from '../components/Button';
import {HiddenOnDesktop, HiddenOnMobile} from '../components/HiddenElements';
import Link from 'next/link';

const Homepage = () => {
    return (
        <Layout>
            <style jsx>
                {`
                    .wrapper {
                        background: #1d976c;
                        background: -webkit-linear-gradient(
                            to right,
                            #93f9b9,
                            #1d976c
                        ); /* Chrome 10-25, Safari 5.1-6 */
                        background: linear-gradient(
                            to right,
                            #93f9b9,
                            #1d976c
                        ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                    }
                `}
            </style>
        </Layout>
    );
};
export default Homepage;
