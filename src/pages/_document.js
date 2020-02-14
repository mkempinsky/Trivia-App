import Document_, {Main, NextScript, Head} from 'next/document';
import {globalStyles, blue} from '../lib/styles';

export default class Document extends Document_ {
    render() {
        return (
            <html lang="en">
                <Head>
                    <meta charSet="UTF-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1, minimal-ui"
                    />
                    <meta name="theme-color" content={blue(700)} />
                    <meta name="mobile-web-app-capable" content="yes" />
                    <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
                    <link
                        href="https://fonts.googleapis.com/css?family=Comfortaa:400,500,700&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.googleapis.com/css?family=Work+Sans:400,500,600,700,800&display=swap"
                        rel="stylesheet"
                    />

                    <style dangerouslySetInnerHTML={{__html: globalStyles}} />
                </Head>
                <body>
                    <Main />

                    <NextScript />
                </body>
            </html>
        );
    }
}
