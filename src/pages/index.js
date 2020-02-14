import Layout from '../components/Layout';
import MaxWidth from '../components/MaxWidth';
import {dropShadow, yellow} from '../lib/styles';
import Image from '../components/Image';
import Button from '../components/Button';
import Link from 'next/link';

const Homepage = () => {
    return (
        <Layout>
            <div className="hero">
                <div className="overlay"></div>
            </div>
            <div className="main">
                <MaxWidth>
                    <div className="info__card">
                        <div className="info__card-content">
                            <h2>Download the App</h2>
                            <p>
                                Take trivia on the go. Download the app to get instant
                                trivia at your fingertips.
                            </p>
                            <Link href="/download">
                                <Button>Steps to Download</Button>
                            </Link>
                        </div>
                        <Image
                            src="/static/cellphone-1.jpg"
                            width="420px"
                            height="320px"
                            styled={true}
                        />
                    </div>
                    <div className="info__card">
                        <Image
                            src="/static/woman-using-laptop.jpg"
                            width="420px"
                            height="320px"
                            styled={true}
                        />
                        <div className="info__card-content">
                            <h2>Personalize Your Trivia</h2>
                            <p>
                                Register an account to set preferences and keep track of
                                your progress.
                            </p>
                            <Link href="/register">
                                <a>
                                    <Button>Register</Button>
                                </a>
                            </Link>
                        </div>
                    </div>
                </MaxWidth>
            </div>
            <style jsx>
                {`
                    .hero {
                        background-image: url('/static/hero.jpg');
                        background-size: cover;
                        background-position: bottom center;
                        background-repeat: no-repeat;
                        background-attachment: fixed;
                        min-height: 500px;
                        min-width: 100%;
                        box-shadow: inset 0 0 10px rgba(000, 000, 000, 0.2);
                        positon: relative;
                    }
                    .overlay {
                        width: 100%;
                        height: 500px;
                        background: rgba(000, 000, 000, 0.3);
                        positon: absolute;
                    }
                    .main {
                        padding: 50px 0;
                        height: 900px;
                    }
                    .info__card {
                        display: flex;
                        width: 100%;
                        align-items: center;
                        justify-content: space-around;
                        color: #fff;
                        margin: 50px 0;
                    }
                    .info__card p {
                        font-size: 24px;
                        max-width: 500px;
                    }
                    .main__image {
                        width: 420px;
                        height: 320px;
                        background-image: url('/static/cellphone-1.jpg');
                        background-size: cover;
                        background-position: bottom center;
                        background-repeat: no-repeat;
                        box-shadow: ${dropShadow()};
                        border-radius: 5px;
                    }
                    .info__card-content {
                        border-bottom: 2px solid #fff;
                    }
                `}
            </style>
        </Layout>
    );
};
export default Homepage;
