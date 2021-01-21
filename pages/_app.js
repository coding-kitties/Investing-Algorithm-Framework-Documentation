import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Layout from "../src/layout";
import theme from '../src/theme';
import * as gtag from '../lib/gtag'
import {useRouter} from "next/router";


export default function MyApp(props) {
    const { Component, pageProps } = props;
    const router = useRouter();

    React.useEffect(() => {
        const handleRouteChange = (url) => {
            gtag.pageview(url)
        }
        router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])

    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <React.Fragment>
            <Head>
                <title>Investing Algorithm Framework: The framework for creation of investing algorithms</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                <link href="https://fonts.googleapis.com/css?family=Lexend+Deca&display=swap" rel="stylesheet"/>
                <script data-ad-client="ca-pub-6898179895018365" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
            </Head>
            <ThemeProvider theme={theme}>
                <Layout>
                    <CssBaseline />
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </React.Fragment>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired,
};