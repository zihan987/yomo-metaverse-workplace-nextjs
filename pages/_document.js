import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
    render() {
        return (
            <Html lang='en'>
                <Head>
                    <meta name="viewport" content="width=device-width" />
                    <meta name="description" content="Open-source Virtual HQ with YoMo and other Geo-distributed System Tech Stacks." />
                    <meta name="twitter:image:src" content="https://blog.yomo.run/static/images/logo.png" />
                    <meta name="twitter:site" content="@yomohq" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="YoMo Virtual HQ" />
                    <meta name="twitter:description" content="Open-source Virtual HQ with YoMo and other Geo-distributed System Tech Stacks." />
                    <meta charSet="utf-8" />
                    <meta name="googlebot" content="index,follow" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="true" />
                    <link rel="stylesheet" media="print" onLoad="this.onload=null;this.removeAttribute('media');" href="https://fonts.googleapis.com/css2?family=Exo+2:wght@400&amp;display=swap" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <Script
                        src="https://www.googletagmanager.com/gtag/js?id=UA-47208480-12"
                        onLoad={() => {
                            window.dataLayer = window.dataLayer || [];
                            function gtag() { dataLayer.push(arguments); }
                            gtag('js', new Date());
                            gtag('config', 'UA-47208480-12');
                        }}
                    />
                </body>
            </Html>
        )
    }
}

export default MyDocument