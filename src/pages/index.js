import Layout from '../components/Layout';
import MaxWidth from '../components/MaxWidth';
import { dropShadow } from '../lib/styles';


const Homepage = () => {
    return (
        <Layout>
            <div className="hero">
                <div className="overlay">
                Test you triva skills anytime, anywhere.
                </div>
            </div>
            <div className="main">
                <MaxWidth>
                    <div className="info__card">
                        <div>
                            <h2>Download the App</h2>
                            <p>Browsers are boring. Download the app to get instant trivia at your fingertips.</p>
                        </div>
                        <div className="main__image"/>
                    </div>
                    <div className="info__card">
                        <div className="main__image"/>
                        <div>
                            <h2>Download the App</h2>
                            <p>Browsers are boring. Download the app to get instant trivia at your fingertips.</p>
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
                    positon: relative;
                }
                .overlay {
                    width: 100%;
                    height: 500px;
                    background: rgba(000,000,000,.3);
                    positon: absolute;
                }
                .main {
                    padding: 50px 0;
                    height: 900px;
                }
                .info__card {
                    display: flex;
                    width: 100%
                    align-items: center;
                    justify-content: center;
                    color:#fff;
                    margin: 50px 0;
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
                `}
            </style>
        </Layout>
    )
}
export default Homepage;