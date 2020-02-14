import React from 'react';
import Questions from '../components/Questions';
import Footer from '../components/Footer';
import Layout from '../components/Layout';

class Trivia extends React.Component {
    state = {
        correctAnswers: null
    };
    render() {
        return (
            <Layout>
                <div style={{maxWidth: '700px', margin: '0 auto'}}>
                    <h1>Totally Trivia</h1>
                    <Questions />
                </div>
            </Layout>
        );
    }
}
export default Trivia;
